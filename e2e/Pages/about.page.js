/**
 * Created by jxzhong on 12/31/14.
 */
'use strict';

var Page = require('astrolabe').Page;

module.exports = Page.create({
    url:	{ value: 'http://127.0.0.1:9000/home' },

    addButton: { get: function () { return this.findElement( this.by.name('additembutton') ); } },
    aboutMenuButton: { get: function () { return element( this.by.linkText('AboutMenu') ); } },
    okButton: { get: function () { return this.findElement( this.by.name('addok') ); } },
    userNameInput: { get: function () { return element( this.by.name('username') ); } },
    ageInput: { get: function () { return element( this.by.name('age') ); } },
    sexInput: { get: function () { return element( this.by.name('sex') ); } },
    aboutTitle: { get: function () { return this.findElement( this.by.name('aboutTittle') ); } },
    clientList :{ get: function () { return element.all( this.by.name('clientrow') ); } },
    addItemModelTitle : {get : function() { return this.findElement( this.by.className('modal-title')) }}

});