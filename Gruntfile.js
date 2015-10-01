module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean: {
			dist: {
				src: [ 'dist' ]
			}
		},

		copy: {
			main: {
				files: [
					{expand: true, cwd: 'src/', src: ['sections/**/*.js'], dest: 'dist/'},
					{expand: true, cwd: 'src/', src: ['services/**/*.js'], dest: 'dist/'},
					{expand: true, cwd: 'src/', src: ['sections/**/*.html'], dest: 'dist/'},
					{expand: true, cwd: 'src/', src: ['*.*', '!styles.scss'], dest: 'dist/'},
					{expand: true, cwd: 'src/', src: ['assets/css/*.css'], dest: 'dist/'}
				]
			}
		}

	}); // initConfig

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask("default", ['clean:dist', 'copy' ]);
};