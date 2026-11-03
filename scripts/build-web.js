// Copies the static site into www/ for Capacitor.
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..'), out = path.join(root, 'www');
const skip = new Set(['node_modules', 'www', 'ios', 'android', 'scripts', 'supabase', '.github', '.git']);
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out);
for (const name of fs.readdirSync(root)) {
  if (skip.has(name)) continue;
  if (/^(package(-lock)?\.json|capacitor\.config\.json|README\.md|SETUP\.md|\.nojekyll|\.gitignore)$/.test(name)) continue;
  fs.cpSync(path.join(root, name), path.join(out, name), { recursive: true });
}
console.log('www ready:', fs.readdirSync(out).length, 'entries');
