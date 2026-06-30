const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://web',
    supportFile: false,
    video: false,
    specPattern: 'cypress/e2e/**/*.cy.js',
  },
})
