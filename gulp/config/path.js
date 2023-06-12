// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // Также можно использовать rootFolder
const sourceFolder = `./source`;

export const path = {
	// Конечная папка с результатом проекта Gulp, все файлы скомпилированы. Ее можно отдавать заказчику.
	build: {
		pages: `${buildFolder}/`,
		styles: `${buildFolder}/css/`,
		scripts: `${buildFolder}/scripts/`,
		images: `${buildFolder}/images/`,
		fonts: `${buildFolder}/fonts/`,
	},
	// Объект путей к исходным файлам. Тут ведется вся разработка.
	src: {
		pages: `${sourceFolder}/pages/*.{pug,html}`,
		styles: `${sourceFolder}/styles/*.styl`,
		scripts: `${sourceFolder}/scripts/*.js`,
		images: `${sourceFolder}/assets/images/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${sourceFolder}/assets/images/**/*.svg`,
		svgicons: `${sourceFolder}/assets/svgicons/*.svg`,
	},
	// Объект путей к файлам, за которыми должен следить Gulp и при изменениях выполнять действия.
	watch: {
		pages: `${sourceFolder}/pages/**/*.{pug,html}`,
		styles: `${sourceFolder}/styles/**/*.styl`,
		scripts: `${sourceFolder}/scripts/**/*.js`,
		images: `${sourceFolder}/assets/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	sourceFolder: sourceFolder,
	rootFolder: rootFolder
}