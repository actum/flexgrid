'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		documentRoot: 'www',
		lessRoot: '<%= documentRoot %>/less',
		lessRootFile: '<%= lessRoot %>/main.less',
		css: '<%= documentRoot %>/css',
		cssFile: '<%= css %>/style.css',
		//Task conf
		less: {
            options: {
                paths: [
                    '<%= lessRoot %>'
                ],
                relativeUrls: true
            },
            dev: {
                options: {
                    sourceMap: true,
                    sourceMapFilename: '<%= css %>/style.css.map',
                    sourceMapURL: 'style.css.map',
                    sourceMapBasepath: '<%= documentRoot %>',
                    outputSourceFiles: true
                },
                files: {
                    '<%= cssFile %>': '<%= lessRootFile %>'
                }
            }
        },
        watch: {
        	css: {
                files: [
                    '<%= lessRoot %>/**/*.less'
                ],
                tasks: ['cssdev']
            },
        }
    });
    
    require('jit-grunt')(grunt);
    
    grunt.registerTask('default', ['cssdev', 'watch']);
    grunt.registerTask('cssdev', ['less:dev']);
};