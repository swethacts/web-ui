(function () {
	var QHHomepage = function () {
				//HEADER
        var deals = element(by.linkText('DEALS'));
        var phones = element(by.linkText('PHONES'));
        var plans = element(by.linkText('PLANS'));
        var mytmobile = element(by.linkText('MY T-MOBILE'));
        var forgotpassword = element(by.linkText('Forgot password?'));

        browser.ignoreSynchronization = true;
        browser.get('https://www.t-mobile.com/');
        //browser.driver.manage().window().maximize();

        this.gotToHome = function() {
        	browser.waitForAngular();
        	browser.driver.sleep(4000);
        };

        this.gotToDeals = function() {
            deals.click();
            browser.driver.sleep(1000);
        };

        this.gotToPhones = function() {
            phones.click();
        		browser.driver.sleep(1000);
        };

        this.goToPlans = function () {
            plans.click();
        		browser.driver.sleep(1000);
				};

			this.goToMyTmobile = function () {
						mytmobile.click();
	        	browser.driver.sleep(1000);
			};

			this.goToForgotPassword = function () {
						forgotpassword.click();
	        	browser.driver.sleep(1000);
			};

  };
  module.exports = function () {
      return new QHHomepage();
  };
}());
