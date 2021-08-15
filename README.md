# Brief Description:
This repository contains basic implementation of UI automation of Doshii Web Portal using TestCafe.

# Detailed Description:
Navigating through different UI pages of Doshii Web Portal and doing basic validation using Page Object Model(POM) Design Pattern and Test Cafe

# Setup:
(1) Clone this repository
(2) Navigate to the cloned folder
(3) Install node and npm using `npm install`
(4) Install the dependencies with respect to this project by npm install
(5) Install TestCafe using `npm install --save-dev testcafe`

# To Run the tests:
To make the command line run options easier, added common run options as scripts in `package.json` file.

For a simple run of basic E2E Testing
```
npm run doshiitest
```

NOTE: Only configured to run in Chrome Browser as of now. 

# Built With:
* [TestCafe](https://testcafe.io/) - Web-based functional testing framework
* Page Object Model(POM) Design Pattern
