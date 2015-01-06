/**
 * Created by jxzhong on 12/31/14.
 */
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

//var assert = chai.assert;
var expect = chai.expect;
var homePage = require( '../../Pages/main.page' );

var homeDefinitionsWrapper = function () {

//  this.beforeEach(function() {
//    return browser.ignoreSynchronization = false;
//  });

    this.Given(/^I am visiting the home Page$/, function(next) {


        expect(homePage.todoItemInput).to.be.ok;
//

        next();
    });


    this.When(/^I input in todo item "(.*)"$/, function(todoItem, next) {

        var todoList = homePage.todoList;

        todoList.click();

        expect(todoList.count()).to.eventually.equal(parseInt(0));

        homePage.todoItemInput.sendKeys(todoItem);

        next();
    });

    this.Then(/^I click the add button$/, function(next){

        homePage.button.click();

        next();

    });

    this.Then(/^I should see the todo list count is ([\d\.]+)$/, function(count, next) {
       //console.log(count+" access last step !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        var count1 = homePage.todoList;

        expect(count1.count()).to.eventually.equal(parseInt(count));

        next();

    });


    this.Then(/^delete the new item so that the todo list count is ([\d\.]+)$/, function(count, next) {
        //console.log(count+" access last step !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

        var todoList = homePage.todoList;

        todoList.click();

        expect(todoList.count()).to.eventually.equal(parseInt(count));

        next();

    });
};

module.exports = homeDefinitionsWrapper;
