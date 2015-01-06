/*jshint expr: true*/
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;
var loginPage = require( '../../Pages/login.page' );
var homePage = require( '../../Pages/main.page' );

var loginDefinitionsWrapper = function () {

//  this.beforeEach(function() {
//    return browser.ignoreSynchronization = false;
//  });

  this.Given(/^I am visiting the website$/, function(next) {
//    browser.get('http://127.0.0.1:9001/#/');
//          browser.ignoreSynchronization = true;
//          searchPage.go("/#/");

//      browser.ignoreSynchronization = true;
      browser.driver.manage().window().maximize();
      loginPage.go("/#/");

      expect(loginPage.loginTitle).to.be.ok;
//      browser.ignoreSynchronization = false;

//      browser.get('http://127.0.0.1:9000/#/')
//          .then( function(){
//              console.log('Browsing');
//              next()
//          }  );

//      browser.sleep(5000);

//      browser.get("http://localhost:9000/#/");
//      browser.ignoreSynchronization = false;
      next();
  });


  this.When(/^I input in username "(.*)" and password "(.*)" then click login button$/, function(username, pwd, next) {
//    element( global.By.className('btn-success') ).click()
//      .then(next);
//      expect(protractor).to.exist;
//      expect(browser).to.exist;
//      expect(by).to.exist;
//      expect(element).to.exist;
//      expect($).to.exist;
      loginPage.usernameInput.sendKeys(username);
      loginPage.pwdInput.sendKeys(pwd);
      loginPage.button.click();
      next();
//      setTimeout(next,100);
  });

  this.Then(/^I should see the main page that title is "(.*)"$/, function(title, next) {

//      searchPage.tittle.then(function(tittle) {
//          if (pageTitle === tittle) {
//              next();
//            } else {
//              next.fail(new Error("Expected to be on page with title " + title + " but instead got: " + pageTitle));
//            }
//
//      });

    var pageTitle = homePage.homeTitle;

//    expect(pageTitle).to.be.ok;

    expect(pageTitle.getText()).to.eventually.equal(title);

      next();

  });
};

module.exports = loginDefinitionsWrapper;
