---
title: "Pastel & Pencils — Digital Catalog & Showcase"
date: "2025-11-30"
excerpt: "Designed and built a responsive catalog web app for a custom apparel brand. Solved a unique 'no-ecommerce' constraint by creating a streamlined, filter-heavy browsing experience optimized for in-person networking and digital sharing."
category: "web-design"
readTime: "5 min read"
thumbnail: "/projects/pastel-and-pencils/home.png"
featuredImage: "/projects/pastel-and-pencils/home.png"
imageAlt: "Pastel & Pencils catalog homepage showing custom apparel designs"
client: "Pastel & Pencils"
year: "2025"
tools: ["React", "Next.js", "Tailwind CSS", "Figma"]
link: "https://www.pastelandpencils.com/" 
---

Pastel & Pencils is a clothing and accessories brand dedicated to creating custom designs centered around Faith, Careers, and Holidays. I was approached to build a custom web application that would serve as a digital catalog for their growing collection of designs.

This project came with a very specific, unorthodox constraint: **absolutely no e-commerce.**

---

## The Challenge: A Storefront Without a Cart

The client operates entirely through word-of-mouth sales and professional networking. They didn't want to manage inventory or payments online; instead, they needed a digital tool to facilitate their in-person and direct interactions.

The brief was to build a "browsing-first" experience that worked seamlessly across phones, tablets, and computers. It needed to look like a modern shop but function like a digital lookbook—allowing potential customers to easily find specific designs (e.g., "Nurse" or "Christmas") and see available options without the friction of a checkout flow.

![Pastel & Pencils Home Page](/projects/pastel-and-pencils/home.png)

---

## The Solution

Since the primary goal was discovery rather than conversion, I stripped away the traditional "Add to Cart" mechanics and doubled down on **filtering, view modes, and accessibility**.

### 1. Frictionless Filtering
With a catalog spanning multiple distinct categories (Faith, Careers, Holidays), users needed a way to drill down quickly. I implemented a robust filtering system that allows users to instantly narrow the catalog by category, product type, or theme. This was crucial for the client's networking use case—being able to pull up "all Teacher shirts" in seconds during a conversation.

![Advanced Filtering Interface](/projects/pastel-and-pencils/filter.png)

### 2. Viewing Experience
To accommodate different browsing preferences, I built a toggleable view system. Users can switch between a grid view for scanning multiple items at once and a detailed list view for better readability. This flexibility ensures the catalog feels native whether it's being viewed on a large desktop monitor or a small smartphone screen during a coffee meeting.

![View Mode Toggle](/projects/pastel-and-pencils/view-mode.png)

### 3. Theme & Accessibility
The brand's aesthetic is soft and approachable, but clarity was paramount. I included a theme toggle to support user preference and ensure the designs pop against the right background, enhancing accessibility and visual comfort.

![Theme Toggle Interaction](/projects/pastel-and-pencils/theme-toggle.png)

---

## Outcome

The final web app perfectly serves Pastel & Pencils' unique business model. It provides a professional, polished digital presence that empowers their word-of-mouth strategy, turning every conversation into a potential showcase without the overhead of managing an online store.

<div class="my-12 not-prose">
  <div class="relative p-8 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
    <svg class="w-6 h-6 text-gray-300 dark:text-white/20 mb-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
    </svg>
    <blockquote class="relative z-10">
      <p class="text-xl md:text-2xl font-medium leading-relaxed text-gray-900 dark:text-white mb-6">
        "This literally doubled my orders received within the first month of launch. It's a vital tool that's the core of my interactions!"
      </p>
      <footer class="flex items-center gap-4">
        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-sm">
          A
        </div>
        <div>
          <div class="font-semibold text-gray-900 dark:text-white">Amber</div>
          <div class="text-sm text-gray-500 dark:text-white/60">Founder, Pastel & Pencils</div>
        </div>
      </footer>
    </blockquote>
  </div>
</div>
