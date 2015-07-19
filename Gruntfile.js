module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        jshint: {
            all: [
                'index.js'
            ]
        },
        reactify: {
          'public/jsx': 'components/*.jsx'
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-reactify');

    // Register tasks
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('default', ['reactify']);
};
