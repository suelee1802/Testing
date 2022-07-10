How to Execute

1. install node.js
https://nodejs.org/en/

2. clone repository
https://github.com/suelee1802/Testing.git

> git clone https://github.com/suelee1802/Testing.git

3. move to the 'Testing' directory
4. run 'npm init'
5. Cypress install
> at the same directory, run 'npm install cypress --save-dev'
6. test execution > 'npm run cypress:run --browser chrome'


Testing scripts
> /cypress/e2e/

support files
> /cypress/support/

If you want to see testing video
> open cypress.config.js
> change `video:false` to `video:true`
> execute test `npm run cypress:run --browser chrome`