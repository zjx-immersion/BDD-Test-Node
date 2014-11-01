// Generated on 2014-01-24 using generator-angular 0.7.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      gruntfile: {
        files: ['Gruntfile.js']
      },
      e2eTest: {
        files: ['e2e/{,*/}*.js'],
        tasks: ['newer:jshint:test','test']
      }
    },


    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js'
      ],
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['2e2/{,*/}*.js']
      }
    },


    // Run some tasks in parallel to speed up the build process
    concurrent: {
      protractor_test: ['pro-p', 'pro-c', 'pro-s', 'pro-f']
    },

    protractor: {
        options: {
              configFile: "protractor-config.js",
              keepAlive: true, // If false, the grunt process stops when the test fails.
              noColor: false, // If true, protractor will not use colors in its output.
              args: {
                  // Arguments passed to the command
              }
          },
        chrome: {
            options: {
                  args: {
                      browser: "chrome"
                  }
              }
        },
        safari: {
            options: {
                args: {
                    browser: "safari"
                }
            }
        },
        firefox: {
            options: {
                args: {
                    browser: "firefox"
                }
            }
        },
        phantomjs: {
            options: {
                args: {
                    browser: "phantomjs"
                }
            }
        }
    },

      protractor_webdriver: {
          your_target: {
              options: {
                  path: './node_modules/protractor/bin/',
                  command: 'webdriver-manager  start'
              }
          }
      }

  });


  grunt.registerTask('test', [

    'pro-p'
  ]);

  grunt.registerTask('testall', [

        'protractor_webdriver',
        'protractor-e2e'
  ]);


  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);

  grunt.loadNpmTasks('grunt-protractor-webdriver');

  grunt.loadNpmTasks('grunt-protractor-runner');

  grunt.registerTask('pro-c', ['protractor_webdriver','protractor:chrome']);
  grunt.registerTask('pro-s', ['protractor_webdriver','protractor:safari']);
  grunt.registerTask('pro-f', ['protractor_webdriver','protractor:firefox']);
  grunt.registerTask('pro-p', ['protractor_webdriver','protractor:phantomjs']);

  grunt.registerTask('protractor-e2e', ['concurrent:protractor_test']);
};
