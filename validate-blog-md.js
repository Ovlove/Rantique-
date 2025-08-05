// validate-blog-md.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = './src/content/blog';

function checkFrontmatter(filePath) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(raw);

  if (!data.title) {
    console.warn(`❌ Missing "title" in: ${filePath}`);
  }

  if (!data.pubDate) {
    console.warn(`❌ Missing "pubDate" in: ${filePath}`);
  }
}

function validateBlogPosts() {
  const files = fs.readdirSync(BLOG_DIR);

  console.log(`🔍 Checking ${files.length} markdown files...\n`);

  files.forEach((file) => {
    if (file.endsWith('.md') || file.endsWith('.mdx')) {
      const fullPath = path.join(BLOG_DIR, file);
      checkFrontmatter(fullPath);
    }
  });

  console.log('\n✅ Validation complete.');
}

validateBlogPosts();
