/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    cssmin: {
      add_banner: {
        options: {
          banner: '<%= banner %>'
        },
        files: {
          'dist/css/form.min.css': ['dist/css/form.css']
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: [{
          src: ['src/**/*.scss'],
          dest: 'dist/css/form.css',
          ext: '.css'
        }]
      }
    },
    watch: {
      css: {
        files: 'src/**/*.css',
        tasks: ['min']
      },
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task.
  grunt.registerTask('default', ['sass']);
  grunt.registerTask('min', ['sass', 'cssmin']);

};
