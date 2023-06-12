import path from "path";
import glob from "glob";
import webpackStream from "webpack-stream";
import TerserPlugin from "terser-webpack-plugin";

export const scripts = () => {
	const files = glob.sync('./source/scripts/pages/*.js');
	const entries = files.reduce((acc, file) => {
		const name = file.replace('./source/scripts/', '').replace('.js', '');
		acc[name] = file;
		return acc;
	}, {});

	return app.gulp.src(app.path.src.scripts, { sourcemaps: app.isDev })
		.pipe(app.plugins.changed(app.path.build.scripts))
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "SCRIPTS",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(webpackStream({
			mode: app.isBuild ? 'production' : 'development',
			entry: entries,
			output: {
				filename: '[name].js',
				path: path.resolve(app.path.build.scripts),
			},
			optimization: {
				minimizer: [
					new TerserPlugin({
						terserOptions: {
							parse: {
								ecma: 8
							},
							compress: {
								ecma: 5,
								warnings: false,
								comparisons: false,
								inline: 2
							},
							mangle: {
								safari10: true
							},
							output: {
								ecma: 5,
								comments: false,
								ascii_only: true
							}
						},
						parallel: true
					})
				]
			}
		}))
		.pipe(app.gulp.dest(app.path.build.scripts))
		.pipe(app.plugins.browsersync.stream());
}