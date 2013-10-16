module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    coffee: {
      glob_to_multiple: {
        expand: true,
        flatten: true,
        cwd: 'theme/js/src',
        src: ['*.js.coffee'],
        dest: 'theme/js/src',
        ext: '.js'
      }
    },
    uglify: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'theme/js/src',
            src: ['*.js'],
            dest: 'theme/js',
            ext: '.min.js'
          }
        ]
      }
    },
    sass: {
      dev: {
        options: {
          includePaths: ['theme/sass/includes']
        },
        files: [
          {
            expand: true,
            cwd: 'theme/sass',
            src: ['*.scss'],
            dest: 'theme',
            ext: '.css'
          }
        ]
      }
    },
    watch: {
      scripts: {
        files: ['theme/js/src/*.js.coffee'],
        tasks: ['coffee', 'uglify']
      },
      styles: {
        files: ['theme/sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['coffee', 'uglify', 'sass']);

};
