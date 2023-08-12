# Cypress Page Object Circle Ci Example
Example of project with UI tests created using Cypress with Page Object model and integration with Circle Ci using the orb https://circleci.com/developer/orbs/orb/cypress-io/cypress with ability to run tests using multiple parallel jobs

## :gear: Prerequisites:

- [nodejs](https://nodejs.org/en/)
- [npm](https://docs.npmjs.com/about-npm)
- [Cypress](https://www.cypress.io/)

## :gear: Setup

1. `git clone git@github.com:maksr13/api-testing-cypress.git`
2. cd to `cypress-api-testing-circleci` folder and run `npm install`


## :heavy_check_mark: Run tests

- cypress test runner (cypress __open__):
    - **`./node_modules/.bin/cypress open --config-file cypress/config/prod.config.js`**
- cypress __headless mode__ (cypress run):
    - `./node_modules/.bin/cypress run --spec cypress/e2e/pet/pet_post.cy.js --config-file cypress/config/prod.config.js` (change cypress/e2e/pet/pet_post.cy.js)
- **running tests on CircleCi**:
    - Running certain spec file:
        - Click 'Trigger Pipeline' button
        - Add following parameters and submit a form:
            - ENV = prod (type - String)
            - SPEC = cypress/e2e/pet/pet_post.cy.js (type - String) (change cypress/e2e/pet/pet_post.cy.js  to needed spec)
    - Running regression (it will run all tests)
        - Click 'Trigger Pipeline' button
        - Add following parameters and submit a form
            - ENV = prod (type - String)
            - SPEC = regression (type - String)

## :bulb: Information
:file_folder: Tests are located in `cypress/e2e` folder.
It has a structure like this - each folder corresponds to the specific API endpoint

:file_folder: `helpers/api` folder - here we have some classes that help to make requests and get some data for them.

:file_folder: `helpers/api/Api.js` file - class that contains wrappers for all requests

:file_folder: `helpers/api/ApiBodyRequests.js` file - class that contains bodies for corresponding requests

:file_folder: `helpers/api/ApiHeadersResponses.js` file - class that contains headers that we expect to see in the response after making corresponding requests

:file_folder: `.circleci`  - folder that contains config file that allows us the ability to run tests on CricleCi

📝 Reporter
    - We use `cypress-mochawesome-reporter`. [Read more](https://www.npmjs.com/package/cypress-mochawesome-reporter). Example of report:
![image](https://github.com/maksr13/cypress-page-object-circleci/assets/22858879/5b881025-097e-4d81-be6e-3d8a4b6c681e)

✅ Circle Ci integration is implemented with following abilities:
- running certain spec / specs on CircleCI
- running all available specs with tag `regression` on CircleCI using multiple parallel jobs

#### :hammer_and_wrench: Configuration
Config files:
1. `configs/prod.config.js` - Main config file where default behavior of Cypress can be modified. [More info](https://docs.cypress.io/guides/references/configuration).
2. `plugins/index.js` - Plugins file is where we can programmatically alter the resolved configuration [More info](https://docs.cypress.io/guides/tooling/plugins-guide#Use-Cases)
