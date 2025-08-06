import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const directories = ['src/content/blog', 'src/content/fiction'];

directories.forEach((dirPath) => {
  fs.readdirSync(dirPath).forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (!fullPath.endsWith('.md') && !fullPath.endsWith('.mdx')) return;

    const content = fs.readFileSync(fullPath, 'utf-8');
    const { data, content: body } = matter(content);

    let updated = false;

    if (!data.pubDate) {
      console.warn(`Missing pubDate in ${file}`);
      // Optional: set default pubDate
      data.pubDate = new Date().toISOString().split('T')[0];
      updated = true;
    } else if (typeof data.pubDate === 'object') {
      // If someone used new Date(...) manually
      data.pubDate = new Date(data.pubDate).toISOString().split('T')[0];
      updated = true;
    }

    if (updated) {
      const newFile = matter.stringify(body, data);
      fs.writeFileSync(fullPath, newFile, 'utf-8');
      console.log(`✅ Fixed pubDate in ${file}`);
    }
  });
});
