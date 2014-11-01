'use strict';

var SERVER_URL = 'http://localhost:9000';

exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

//  capabilities: {
//    'browserName': 'chrome',
//    'chromeOptions': {'args': ['--disable-extensions']}
//  },

//    seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.40.0.jar',

//    rootElement: 'body',

//    chromeOnly: true,

    capabilities: {
         browserName: 'chrome',
        'version': '',
        'platform': 'ANY',
        "firefox_binary": "./dependences/firefox/MacOS/firefox",//dependences/firefox/MacOS/firefox
        "binary_": "./dependences/firefox/MacOS/firefox",
        "binary" : "./dependences/chrome/MacOS/Google Chrome",///Applications/GoogleChrome.app/Contents/MacOS/Google Chromes
        'chromeOptions': {'args': ['--disable-extensions']},
        'phantomjs.binary.path': './node_modules/phantomjs/bin/phantomjs',  //./dependences/phantomjs-1.9.8-macosx/bin/phantomjs
        'phantomjs.cli.args': ['--ignore-ssl-errors=true',  '--web-security=false']
    },

  // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be prepended with this.
  baseUrl: SERVER_URL, //+ ':'+ (process.env.HTTP_PORT || '9000')

    // ----- What tests to run -----
    //
    // Spec patterns are relative to the location of this config.
  specs: [
        //'test/e2e/**/*_spec.js'
        //'test/e2e/features/**/*.feature'
        'e2e/features/**/*.feature'
  ],

  cucumberOpts: {
        require: ['./e2e/features/step_definitions/stepDefinitions.js', './e2e/features/support/world.js']
        //'test/e2e/**/*_spec.js'
//        format: 'progress'
//        format: 'pretty'
  },

  framework: 'cucumber',

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: true,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 10000
  }
};
