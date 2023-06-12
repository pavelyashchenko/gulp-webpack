import stylus from 'gulp-stylus';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css'; // Сжатие CSS файла
import autoprefixer from 'gulp-autoprefixer'; // Добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // Групировка медиа запросов
import nib from 'nib';

export const styles = () => {
  return app.gulp
    .src(app.path.src.styles, { sourcemaps: app.isDev })
    .pipe(app.plugins.changed(app.path.build.styles, { extension: '.css' }))
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'STYLE',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(stylus({ use: nib(), compress: !app.isDev }))
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(
      app.plugins.if(
        app.isBuild,
        groupCssMediaQueries()
      )
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        autoprefixer({
          grid: true,
          overrideBrowserslist: ['last 3 versions'],
          cascade: true,
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.styles))
    .pipe(
      app.plugins.if(
        app.isBuild,
        cleanCss()
      )
    )
    .pipe(rename({
      extname: '.css'
    }))
    .pipe(app.gulp.dest(app.path.build.styles))
    .pipe(app.plugins.browsersync.stream());
};
