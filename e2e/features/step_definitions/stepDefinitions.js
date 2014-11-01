/*jshint expr: true*/
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;
var searchPage = require( '../../Pages/main.page' );

var stepDefinitionsWrapper = function () {

//  this.beforeEach(function() {
//    return browser.ignoreSynchronization = false;
//  });

  this.Given(/^I am visiting the homepage$/, function(next) {
//    browser.get('http://127.0.0.1:9001/#/');
//          browser.ignoreSynchronization = true;
//          searchPage.go("/#/");

//      browser.ignoreSynchronization = true;
      searchPage.go("/#/");

      expect(searchPage.button).to.be.ok;
//      browser.ignoreSynchronization = false;

//      browser.get('http://127.0.0.1:9000/#/')
//          .then( function(){
//              console.log('Browsing');
//              next()
//          }  );

//      browser.sleep(5000);

//          browser.get("http://localhost:9000/#/");
//          browser.ignoreSynchronization = false;
      next();
  });


  this.When(/^I click that green button$/, function(next) {
//    element( global.By.className('btn-success') ).click()
//      .then(next);
      expect(protractor).to.exist;
      expect(browser).to.exist;
      expect(by).to.exist;
      expect(element).to.exist;
      expect($).to.exist;
      searchPage.button.click();
      setTimeout(next,1000);
  });

  this.Then(/^I should see "(.*)" as the page title$/, function(title, next) {

//      searchPage.tittle.then(function(tittle) {
//          if (pageTitle === tittle) {
//              next();
//            } else {
//              next.fail(new Error("Expected to be on page with title " + title + " but instead got: " + pageTitle));
//            }
//
//      });

    var pageTitle = searchPage.tittle;

    expect(pageTitle).to.eventually.equal(title);

//    if (pageTitle === title) {
//      next();
//    } else {
//      next.fail(new Error("Expected to be on page with title " + title + " but instead got: " + pageTitle));
//    }
//      browser.exit();
      browser.ignoreSynchronization = false;
      next();

  });
};

module.exports = stepDefinitionsWrapper;
