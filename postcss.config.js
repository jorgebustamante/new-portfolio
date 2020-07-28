  
module.exports = {
    plugins: [
      require("tailwindcss")('./tailwindcss-config.js'),
      require("postcss-nesting"),
      require("autoprefixer"),
    ],
  };