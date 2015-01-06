/**
 * Created by jxzhong on 12/31/14.
 */
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

//var assert = chai.assert;
var expect = chai.expect;
var aboutPage = require( '../../Pages/about.page' );

var homeDefinitionsWrapper = function () {

//  this.beforeEach(function() {
//    return browser.ignoreSynchronization = false;
//  });

    this.Given(/^I am visiting the about page that title is "(.*)"$/, function(title, next) {

        expect(aboutPage.aboutMenuButton).to.exist;
//
//        console.log('-------------------------------------------');
//
//        aboutPage.aboutMenuButton.getOuterHtml().then(function(text) {
//            console.log(text);
//            console.log('-------------------------------------------');
//        });


        aboutPage.aboutMenuButton.click();

        expect(aboutPage.aboutTitle.getText()).to.eventually.equal(title);

        next();
    });


    this.When(/^I click the add item button:$/, function(table, next) {

        for(var i = 0; i < table.rows().length; i++){
            var row = table.rows()[i];
            console.log('name:'+ row[0] + "----age:" + row[1]  +  "----sex:" + row[2]);
        }

          aboutPage.addButton.click();

          expect(aboutPage.addItemModelTitle).to.be.ok;

        next();
    });

    this.When(/^input the name (.*), age (\d+)$/, function(name, age, next){

        console.log(name +'----------'+ age);

        aboutPage.userNameInput.sendKeys(name);
        aboutPage.ageInput.sendKeys(age);

        next();

    });

    this.When(/^choose the sex (.*)$/, function(sex, next){

        console.log(sex +'----------');

        aboutPage.sexInput.sendKeys(sex);

        next();

    });


    this.When(/^click the ok button$/, function(next){

        aboutPage.okButton.click();
        setTimeout(next,100);

    });




    this.Then(/^I should see the table view's count is ([\d\.]+)$/, function(count, next) {

        try {
            expect(aboutPage.clientList.count()).to.eventually.equal(parseInt(count));
        }catch(e){
            console.log('client list s\' count isn\'t 6');
        }

//        browser.close();
        next();

    });
};

module.exports = homeDefinitionsWrapper;
