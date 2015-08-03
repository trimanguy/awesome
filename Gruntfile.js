module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		requirejs: {
			mainJS: {
				options: {
					baseUrl: "public/js/",
					paths: {
						"app": "app/config/Init"
					},
					wrap: true,
					name: "libs/almond",
					preserveLicenseComments: false,
					optimize: "uglify",
					mainConfigFile: "public/js/app/config/Init.js",
					include: ["app"],
					out: "public/js/app/config/Init.min.js"
				}
			},
			mainCSS: {
				options: {
					optimizeCss: "standard",
					cssIn: "./public/css/app.css",
					out: "./public/css/app.min.css"
				}
			}
		},
		jshint: {
			files: ['Gruntfile.js', 'public/js/app/**/*.js', '!public/js/app/**/*.min.js'],
			options: {
				globals: {
					jQuery: true,
				}
			}
		},
		watch: {
			files: "public/less/*",
			tasks: ["less"]
		},
		less: {
			development: {
				options: {
					paths: ["public/less"]
				},
				files: {
					"public/css/app.css": "public/less/app.less"
					//TODO: write task for 3rd party css
				}
			},
			//TODO later
			// production: {
			// 	options: {
			// 		paths: ["assets/css"],
			// 		plugins: [
			// 			new require('less-plugin-autoprefix')({browsers: ["last 2 versions"]}),
			// 			new require('less-plugin-clean-css')(cleanCssOptions)
			// 		],
			// 		modifyVars: {
			// 			imgPath: '"http://mycdn.com/path/to/images"',
			// 			bgColor: 'red'
			// 		}
			// 	},
			// 	files: {
			// 		"path/to/result.css": "path/to/source.less"
			// 	}
			// }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('test', ['jshint']);
	grunt.registerTask('build', ['requirejs:mainJS', 'requirejs:mainCSS']);
	grunt.registerTask('default', ['test', 'build']);

};