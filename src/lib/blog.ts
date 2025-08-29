import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
  readTime: string;
  content: string;
  thumbnail?: string;
  featuredImage?: string;
  imageAlt?: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
  readTime: string;
  thumbnail?: string;
  featuredImage?: string;
  imageAlt?: string;
}

export function getSortedPostsData(): BlogPostMeta[] {
  // Get file names under /content/blog
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      // Remove ".md" from file name to get id
      const slug = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
        excerpt: matterResult.data.excerpt,
        author: matterResult.data.author,
        tags: matterResult.data.tags || [],
        readTime: matterResult.data.readTime,
        thumbnail: matterResult.data.thumbnail,
        featuredImage: matterResult.data.featuredImage,
        imageAlt: matterResult.data.imageAlt,
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      return {
        params: {
          slug: fileName.replace(/\.md$/, ''),
        },
      };
    });
}

export async function getPostData(slug: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Replace custom embed shorthand like
  // @https://www.youtube.com/shorts/<id>
  // @https://youtu.be/<id>
  // @https://www.youtube.com/watch?v=<id>
  const transformEmbeds = (markdown: string): string => {
    const YT_PATTERN = /^\s*@https?:\/\/(?:www\.)?(?:youtube\.com|youtu\.be)\/[\w\-?=&%/.]+/gim;

    const toEmbedHtml = (raw: string): string => {
      const url = raw.trim().replace(/^@/, '');
      try {
        const u = new URL(url);
        let id: string | null = null;
        if (u.hostname.includes('youtu.be')) {
          id = u.pathname.replace(/^\//, '').split('/')[0] || null;
        } else if (u.hostname.includes('youtube.com')) {
          if (u.pathname === '/watch') id = u.searchParams.get('v');
          if (!id && u.pathname.startsWith('/shorts/')) id = u.pathname.split('/')[2] || u.pathname.split('/')[1] || null;
          if (!id && u.pathname.startsWith('/embed/')) id = u.pathname.split('/')[2] || null;
        }
        if (!id) return raw; // fallback to original line if unknown
        const src = `https://www.youtube.com/embed/${id}`;
        return (
          `\n<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border:1px solid rgba(255,255,255,.1);border-radius:12px;margin:16px 0;">` +
          `<iframe src="${src}" title="YouTube video" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>` +
          `</div>\n`
        );
      } catch {
        return raw;
      }
    };

    return markdown.replace(YT_PATTERN, toEmbedHtml);
  };

  const contentWithEmbeds = transformEmbeds(matterResult.content);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(contentWithEmbeds);
  const contentHtml = processedContent.toString();

  // Combine the data with the slug and contentHtml
  return {
    slug,
    title: matterResult.data.title,
    date: matterResult.data.date,
    excerpt: matterResult.data.excerpt,
    author: matterResult.data.author,
    tags: matterResult.data.tags || [],
    readTime: matterResult.data.readTime,
    content: contentHtml,
    thumbnail: matterResult.data.thumbnail,
    featuredImage: matterResult.data.featuredImage,
    imageAlt: matterResult.data.imageAlt,
  };
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
