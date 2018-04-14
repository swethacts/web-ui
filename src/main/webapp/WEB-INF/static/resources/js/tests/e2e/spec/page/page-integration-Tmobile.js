(function () {
	var QHHomepage = function () {
				//HEADER
        var mytmobile = element(by.linkText('MY T-MOBILE'));
				var login = element(by.css('.login-btn'));
				var loginfield = element(by.css('.login-field'));
				var password = element(by.id('password'));


        var forgotpassword = element(by.linkText('Forgot password?'));

        browser.ignoreSynchronization = true;
        browser.get('https://www.t-mobile.com/');
        //browser.driver.manage().window().maximize();

        this.gotToHome = function() {
        	browser.waitForAngular();
        	browser.driver.sleep(4000);
        };

				this.goToMyTmobile = function () {
							mytmobile.click();
		        	browser.driver.sleep(1000);
				};

				this.goToBlankEmailorPhone = function () {
							login.click();
		        	browser.driver.sleep(1000);
				};

				this.goToInvalidPhone = function () {
							loginfield.sendKeys("77711155880");
							loginfield.sendKeys(protractor.Key.TAB);
							browser.driver.sleep(1000);
				};

				this.goToInvalidCredentials = function () {
							loginfield.clear();
							loginfield.sendKeys("7771115588");
							password.sendKeys("junkpassword");
							login.click();
							browser.driver.sleep(1000);
				};

  };
  module.exports = function () {
      return new QHHomepage();
  };
}());
