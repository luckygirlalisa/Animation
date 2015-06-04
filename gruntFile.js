module.exports = function(grunt) {
	grunt.initConfig({
		less: {
		  development: {
		    options: {
		      paths: ["assets/css"]
		    },
		    files: {
		      "app/animation.css": "app/animation.less"
		    }
		  }
		},
		watch: {
			files: ['app/animation.less'],
			tasks: ['less'],
	 		options: {
      	reload: true
    	}	
		}		
	});

	grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less']);
}