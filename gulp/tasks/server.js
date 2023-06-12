export const server = (done) => {
	app.plugins.browsersync.init({
		server: {
			baseDir: `${app.path.build.pages}`
		},
		notify: false,
		port: 1488,
	});
}