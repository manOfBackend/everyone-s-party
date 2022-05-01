const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");
const postcssNormalize = require('postcss-normalize');
module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    postcssNormalize,
  ],
};
