/**
 * Created by jxzhong on 10/27/14.
 */
'use strict';
var awsomeThing = require('../Modules/main.module');

var Page = require('astrolabe').Page;

module.exports = Page.create({
    url:	{ value: 'http://127.0.0.1:9000' },

    button: { get: function () { return this.findElement( this.by.className('btn-success') ); } },

    awsomeThings: { get: function() { return this.findElements( this.by.css('.thing.ng-scope') ); } },
    awsomeThing: { value: function(index) { return awsomeThing( this.findElement( this.by.css('.thing.ng-scope:nth-child('+index+')' ))); } },
    tittle: { get: function() { return browser.getTitle(); } }

});