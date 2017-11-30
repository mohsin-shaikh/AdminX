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
   .sass('build/scss/adminx.scss', `${path}/css`, { outputStyle: 'compressed', comments: false })
   .copyDirectory('build/media', `${path}/media`);

mix.browserSync('127.0.0.1:8080');