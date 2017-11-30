let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */
const path = process.env.NODE_ENV === 'production' ? 'dist' : 'dev';

mix.options({
  cleanCss: {
    level: {
      1: {
        specialComments: 'none'
      }
    }
  }
});


mix.js('build/js/adminx.js', `${path}/js`)
   .js('build/js/demo.js', `${path}/js`)

   // Compile scss
   .sass('build/scss/adminx.scss', `${path}/css`, { outputStyle: 'compressed', comments: false })
   .options({
      processCssUrls: false
   })
   // Copy Notification Sound
   .copyDirectory('build/media', `${path}/media`)

   // Copy Icon Font
   .copyDirectory('./node_modules/open-iconic/font/fonts', `${path}/fonts/iconic`);

mix.sass('build/scss/demo.scss', 'demo', { outputStyle: 'compressed', comments: false });

mix.browserSync('127.0.0.1:8080');