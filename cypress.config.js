require('dotenv').config();
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    html: true,
    json: true,
  },
  e2e: {
    baseUrl: process.env.BASE_URL,
    env: {
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
