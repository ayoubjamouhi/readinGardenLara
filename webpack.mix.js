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
   //.react('resources/js/website/pages/Contact/Contact.js', 'public/js')
   //.react('resources/js/website/pages/Privacy/Privacy.js', 'public/js')
   //.react('resources/js/website/pages/About/About.js', 'public/js')
   //.react('resources/js/dashboard/index.js', 'public/js/indexDash.js')
   //.sass('resources/sass/header.scss', 'public/css')
   //.sass('resources/sass/footer.scss', 'public/css')
   //.sass('resources/sass/home/featured.scss', 'public/css')
   //.sass('resources/sass/home/welcome.scss', 'public/css')
   //.sass('resources/sass/home/featured-members.scss', 'public/css')
   //.sass('resources/sass/blog.scss', 'public/css')
   //.sass('resources/sass/singlepost.scss', 'public/css')
   .sass('resources/sass/home.scss', 'public/css')
   //.js('resources/js/app.js', 'public/js')
   .sourceMaps();