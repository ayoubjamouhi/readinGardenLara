const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/website/pages/Home/Home.js', 'public/js')
   .react('resources/js/website/pages/Article/Article.js', 'public/js')
   .react('resources/js/website/pages/Blog/Blog.js', 'public/js')
   .react('resources/js/website/pages/Contact/Contact.js', 'public/js')
   .react('resources/js/website/pages/Privacy/Privacy.js', 'public/js')
   .react('resources/js/website/pages/About/About.js', 'public/js')
   .webpackConfig({
      module: {
            rules: [
               {
                  test: /\.styl$/,
                  loader: 'style-loader!css-loader!stylus-loader'
               }
            ]
      }
      //devtool: "inline-source-map"
      })
      .sourceMaps();