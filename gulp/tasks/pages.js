import pug from 'gulp-pug';
import rename from 'gulp-rename';
import versionNumber from 'gulp-version-number';

export const pages = () => {
	return app.gulp.src(app.path.src.pages)
		.pipe(app.plugins.changed(app.path.build.pages, {	extension: '.html' }))
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'PUG/HTML',
					message: 'Error: <%= error.message %>',
				})
			)
		)
		.pipe(
			pug({
				// Cжатие HTML файла
				pretty: true,
				// Показывать в терминале какой файл обработан
				verbose: true,
			})
		)
		.pipe(app.plugins.replace(/@img\//g, 'img/'))
		.pipe(
			app.plugins.if(
				app.isBuild,
				versionNumber({
					value: '%DT%',
					append: {
						key: '_v',
						cover: 0,
						to: ['css', 'js'],
					},
					output: {
						file: 'gulp/version.json',
					},
				})
			)
		)
		.pipe(
			rename(path => {
				path.dirname = '/';
				path.extname = '.html';
			})
		)
		.pipe(app.gulp.dest(app.path.build.pages))
		.pipe(app.plugins.browsersync.stream());
};
