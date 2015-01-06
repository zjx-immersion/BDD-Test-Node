/**
 * Created by jxzhong on 12/31/14.
 */
'use strict';

var Page = require('astrolabe').Page;

module.exports = Page.create({
    url:	{ value: 'http://127.0.0.1:9000/home' },

    button: { get: function () { return element( this.by.className('btn-primary') ); } },
    todoItemInput: { get: function () { return this.findElement( this.by.name('todoText') ); } },
    homeTitle: { get: function () { return this.findElement( this.by.name('homeTitle') ); } },
    todoList :{ get: function () { return element.all( this.by.name('delete') ); } }


});