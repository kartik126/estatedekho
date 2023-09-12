const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

module.exports = {
  // prettify only commited TypeScript, JavaScript, CSS, SCSS, JSON and .md files
  './src/**/*.{js,jsx,ts,tsx,css,scss,md,json}': 'prettier --write',

  // Lint and fix commited TypeScript and JavaScript files
  './src/**/*.{js,jsx,ts,tsx}': [buildEslintCommand],

  // Type check all TypeScript files in the project src folder
  './src/**/*.(ts|tsx)': () => 'bash -c \'tsc -p tsconfig.json --pretty\'',
}
