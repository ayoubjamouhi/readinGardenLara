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

mix
   .react('resources/js/website/pages/Contact/Contact.js', 'public/js')
   .react('resources/js/website/pages/Privacy/Privacy.js', 'public/js')
   .react('resources/js/website/pages/About/About.js', 'public/js')
   //.react('resources/js/dashboard/index.js', 'public/js/indexDash.js')
   .sass('resources/sass/article.scss', 'public/css/article.css')
   .sass('resources/sass/header.scss', 'public/css/header.css')
   .sass('resources/sass/footer.scss', 'public/css/footer.css')
   .sass('resources/sass/home/featured.scss', 'public/css/featured.css')
   .sass('resources/sass/home/welcome.scss', 'public/css/welcome.css')
   .sass('resources/sass/home/featured-members.scss', 'public/css/featured-members.css')
   .sass('resources/sass/blog.scss', 'public/css/blog.css')
   .js('resources/js/app.js', 'public/js')
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