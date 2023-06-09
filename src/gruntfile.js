module.exports = function (grunt) {
    grunt.initConfig({
        uncss: {
            dist: {
                files: [
                    { src: "./components/LandingSection.js", dest: './tidy.css' }
                ]
            }
        },
        cssmin: {
            dist: {
                files: [
                    { src: './tidy.css', dest: './tidy.css' }
                ]
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default tasks
    grunt.registerTask('default', ['uncss', 'cssmin']);
};