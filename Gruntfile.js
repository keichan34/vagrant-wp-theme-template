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
    watch: {
      files: ['theme/js/src/*.js.coffee'],
      tasks: ['coffee', 'uglify']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['watch']);

};
