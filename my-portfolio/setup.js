const fs = require('fs');
const path = require('path');

const directories = [
  'app/wordpress',
  'app/industrial-design',
  'app/api/contact'
];

directories.forEach(dir => {
  const fullPath = path.join(__dirname, dir);
  fs.mkdirSync(fullPath, { recursive: true });
  console.log(`Created: ${dir}`);
});

console.log('All directories created successfully!');
