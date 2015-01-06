/*jshint expr: true*/
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;
var loginPage = require( '../../Pages/login.page' );
var homePage = require( '../../Pages/main.page' );

var loginDefinitionsWrapper = function () {


  this.Given(/^I am visiting the website$/, function(next) {

      browser.driver.manage().window().maximize();

      loginPage.go("/#/");

      expect(loginPage.loginTitle).to.be.ok;

      next();
  });


  this.When(/^I input in username "(.*)" and password "(.*)" then click login button$/, function(username, pwd, next) {

      loginPage.usernameInput.sendKeys(username);

      loginPage.pwdInput.sendKeys(pwd);

      loginPage.button.click();

      next();
  });

  this.Then(/^I should see the main page that title is "(.*)"$/, function(title, next) {

      var pageTitle = homePage.homeTitle;

      expect(pageTitle.getText()).to.eventually.equal(title);

      next();

  });
};

module.exports = loginDefinitionsWrapper;
