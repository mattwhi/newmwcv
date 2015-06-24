'use strict';
module.exports = function(grunt) {

    // load all grunt tasks matching the `grunt-*` pattern
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        // watch for changes and trigger sass, jshint, uglify and livereload
        watch: {
            sass: {
                files: ['assets/sass/**/*.{scss,sass}'],
                tasks: ['sass', 'autoprefixer', 'cssmin']
            },
            js: {
                files: '<%= jshint.all %>',
                tasks: ['jshint', 'uglify']
            },
            images: {
                files: ['assets/images/**/*.{png,jpg,gif}'],
                tasks: ['imagemin']
            }
        },

        // sass
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                },
                files: {
                    'assets/css/build/style.css': 'assets/sass/style.scss'
                }
            }
        },

        // autoprefixer
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 9', 'ios 6', 'android 4'],
                map: true
            },
            files: {
                expand: true,
                flatten: true,
                src: 'assets/css/build/*.css',
                dest: 'assets/css/build'
            },
        },

        // css minify
        cssmin: {
            options: {
                keepSpecialComments: 1
            },
            minify: {
                expand: true,
                cwd: 'assets/css/build',
                src: ['*.css', '!*.min.css'],
                dest: 'assets/css',
                ext: '.min.css'
            }
        },

        // javascript linting with jshint
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                "force": true
            },
            all: [
                'Gruntfile.js',
                'assets/js/source/**/*.js'
            ]
        },

        // uglify to concat, minify, and make source maps
        uglify: {
            main: {
                options: {
                    sourceMap: 'assets/js/main.js.map',
                    sourceMappingURL: 'main.js.map',
                    sourceMapPrefix: 2
                },
                files: {
                    'assets/js/main.min.js': [
                        'assets/js/source/main.js'
                    ]
                }
            }
        },

        // image optimization
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 7,
                    progressive: true,
                    interlaced: true
                },
                files: [{
                    expand: true,
                    cwd: 'assets/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'assets/images/'
                }]
            }
        },

        //Clean distribution replace with ne files
        clean: {
            build: {
                files:[{
                    dot:true,
                    src: [
                        'dist/*',
                        '!dist/.git*'
                        ]
                    }]
                }
            },

            //copy files to distribution folder
            copy: {
                dist: {
                    files:[{
                        expand:true,
                        dot: true,
                        cwd: '',
                        dest: '../myTestTheme',
                        src: [
                            'assets/images{,*/}*.{png,jpg,gif}',
                            'assets/js{,*/}*.min.js',
                            'assets/fonts/bootstrap{,*/}*.*',
                            'languages{,*/}*.*',
                            'option-tree/**',
                            'template-parts{,*/}*.html',
                            'inc{,*/}*.html',
                            'layouts{,*/}*.html',
                            '{,*/}*.{html,html,html,css}'
                            ]
                        }]
                    }
                }

    });

    // register task
    grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin', 'uglify', 'imagemin', 'watch']);


    grunt.registerTask('orbit', ['clean', 'copy']);

};
