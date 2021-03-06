exports.config = {
  
    //seleniumServerJar: 'node_modules/protractor/selenium/selenium-server-standalone-2.40.0.jar',
    //chromeDriver: 'node_modules/protractor/selenium/chromedriver',  IEDriverServer3.4.0.zip		
    seleniumAddress: 'http://localhost:4444/wd/hub',
  
    //Location of E2E test specs
    specs: [
     '../src/main/webapp/WEB-INF/static/resources/js/tests/e2e/spec/signUpPageSpec.js'    
    ],
	
	//Communicates directly Chrome Driver or Firefox Driver, bypassing any Selenium Server. If this is true, settings for seleniumAddress and seleniumServerJar will be ignored
	//directConnect: true,
	
	//Sauce Labs - While using sauce, comment the seleniumAddress
  	//sauceUser: 'connectns99',
    //sauceKey: 'a95eb41e-5c8e-4b9a-b64f-fae65d621834',

    // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome',
    //version: '63',
	//platform: 'Windows 7',
	//'time-zone': 'Detroit',
	// maxSessions: 2,
	//shardTestFiles: true,
    //maxInstances: 2
	
	chromeOptions: {
		//args: ['no-sandbox', '--start-fullscreen']
		args: ['no-sandbox','headless']
		

	}
	
	//proxy: {
      //proxyType: "MANUAL"
    //}	
  },
  
  jasmineNodeOpts: {
	  defaultTimeoutInterval: 30000,
	  isVerbose: true,
	  showColors: true
  },
  
  //baseUrl: 'https://www.homedepot.com/',

  // testing framework, jasmine is the default
  framework: 'jasmine2',
  
  onPrepare: function() {
	    var jasmineReporters = require('jasmine-reporters');
	    
	    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
	        consolidateAll: true,
	        savePath: '../src/main/webapp/WEB-INF/static/resources/js/tests/e2e/testresults',
	        filePrefix: 'xmloutput'
	    }));
  }
};