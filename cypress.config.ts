// import { defineConfig } from "cypress";

// export default defineConfig({
//   e2e: {
//     baseUrl: "https://opensource-demo.orangehrmlive.com",
//   },
// });

import { defineConfig } from 'cypress'

export default defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com",
  },
})