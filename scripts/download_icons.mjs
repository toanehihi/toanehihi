import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, '../public/icons/tech');

const ICONS = [
  // Languages
  { name: "java", source: "iconify", slug: "logos:java" },
  { name: "go", source: "iconify", slug: "logos:go" },
  { name: "python", source: "iconify", slug: "logos:python" },
  { name: "typescript-icon", source: "iconify", slug: "logos:typescript-icon" },
  { name: "c-plusplus", source: "iconify", slug: "logos:c-plusplus" },
  // Backend
  { name: "spring-icon", source: "iconify", slug: "logos:spring-icon" },
  { name: "flask", source: "iconify", slug: "logos:flask" },
  { name: "nextjs-icon", source: "iconify", slug: "logos:nextjs-icon" },
  { name: "nodejs-icon", source: "iconify", slug: "logos:nodejs-icon" },
  // Data & ML
  { name: "postgresql", source: "iconify", slug: "logos:postgresql" },
  { name: "mysql", source: "iconify", slug: "logos:mysql" },
  { name: "redis", source: "iconify", slug: "logos:redis" },
  { name: "milvus", source: "simpleicons", slug: "milvus", color: "00A1EA" },
  { name: "tensorflow", source: "iconify", slug: "logos:tensorflow" },
  { name: "huggingface", source: "simpleicons", slug: "huggingface", color: "FFD21E" },
  { name: "onnx", source: "simpleicons", slug: "onnx", color: "005CED" },
  // Infrastructure
  { name: "docker-icon", source: "iconify", slug: "logos:docker-icon" },
  { name: "kafka", source: "iconify", slug: "logos:kafka" },
  { name: "cloudflare", source: "iconify", slug: "logos:cloudflare" },
  { name: "aws", source: "iconify", slug: "logos:aws" },
  { name: "nginx", source: "iconify", slug: "logos:nginx" },
  { name: "git-icon", source: "iconify", slug: "logos:git-icon" },
];

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
        return;
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', reject);
  });
}

async function main() {
  
  for (const icon of ICONS) {
    let url;
    if (icon.source === 'iconify') {
      url = `https://api.iconify.design/${icon.slug}.svg`;
    } else if (icon.source === 'simpleicons') {
      url = `https://cdn.simpleicons.org/${icon.slug}/${icon.color}`;
    }

    const dest = path.join(OUTPUT_DIR, `${icon.name}.svg`);
    try {
      await download(url, dest);
    } catch (err) {
      console.error(`❌ Error downloading ${icon.name}:`, err.message);
    }
  }

}

main();
