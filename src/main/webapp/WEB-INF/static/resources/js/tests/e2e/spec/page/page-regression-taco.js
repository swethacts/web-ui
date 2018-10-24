(function () {
	var QHHomepage = function () {
		var tacologin = element(by.css('a.greeting'));
		var tacouser = element(by.id('sign-in-email'));
		var tacopassword = element(by.id('sign-in-password'));
		var tacosubmit = element(by.id('js-sign-in-profile'));

		var tacofirst = element(by.id('register.firstName'));
		var tacolast = element(by.id('register.lastName'));
		var tacoemail = element(by.id('register.email'));
		var tacophone = element(by.id('guestRegisterForm_mobileNumber'));
		var tacosignup = element(by.id('js-register-with-fb'));

    browser.ignoreSynchronization = true;
    browser.get('https://www.tacobell.com');
    //browser.driver.manage().window().maximize();

    this.gotToHome = function() {
    	browser.waitForAngular();
    	browser.driver.sleep(4000);
    };

		this.goToLogin = function() {
				tacologin.click();
				tacouser.sendKeys("test@gmail.com");
				tacopassword.sendKeys("test");
				tacosubmit.click();
				browser.driver.sleep(1000);
		};

		this.goToAccountCreation = function() {
				tacofirst.sendKeys("Matt");
				tacolast.sendKeys("Frowse");
				tacoemail.sendKeys("testingmatt@gmail.com");
				tacophone.sendKeys("1234567890");
				tacosignup.click();
				browser.driver.sleep(1000);
		};

	}; //end of QHHomepage
  module.exports = function () {
      return new QHHomepage();
  };
}());
