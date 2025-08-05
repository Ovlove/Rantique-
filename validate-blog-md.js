import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = './src/content/blog';
const requiredFields = ['title', 'pubDate'];

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const errors = [];

walkDir(contentDir, filePath => {
  if (!filePath.endsWith('.md') && !filePath.endsWith('.mdx')) return;

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);

  requiredFields.forEach(field => {
    if (!data[field]) {
      errors.push(`❌ Missing "${field}" in: ${filePath}`);
    }
  });
});

if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exit(1); // ❌ Fail build if errors found
} else {
  console.log('✅ All blog frontmatter fields are valid.');
}
