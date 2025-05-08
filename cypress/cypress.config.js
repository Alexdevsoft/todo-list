const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://frontend',
    supportFile: false,
    specPattern: "e2e/**/*.cy.js"
  },
});