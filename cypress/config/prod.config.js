const { defineConfig } = require('cypress');

module.exports = defineConfig({
    env: {
        env: 'prod',
    },
    e2e: {
        baseUrl: 'https://petstore.swagger.io/v2',
        chromeWebSecurity: false,
        viewportWidth: 1920,
        viewportHeight: 1080,
        reporter: 'cypress-mochawesome-reporter',
        watchForFileChanges: false,

        // We've imported your old cypress plugins here.
        // You may want to clean this up later by importing these.
        setupNodeEvents(on, config) {
            return require('../plugins/index.js')(on, config);
        }
    }
});
