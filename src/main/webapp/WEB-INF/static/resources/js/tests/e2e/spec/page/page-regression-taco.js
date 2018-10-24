(function () {
	var QHHomepage = function () {
		var tacologin = element(by.css('a.greeting'));
		var tacouser = element(by.id('sign-in-email'));
		var tacopassword = element(by.id('sign-in-password'));
		var tacosubmit = element(by.id('js-sign-in-profile'));


		var tacoregister = element(by.css('.btn-create-account'));
		var tacofirst = element(by.name('firstName'));
		var tacolast = element(by.name('lastName'));
		var tacoemail = element(by.name('register_email'));
		var tacophone = element(by.id('guestRegisterForm_mobileNumber'));
		var tacopassword = element(by.id('password'));
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
				tacoregister.click();
				tacofirst.sendKeys("John");
				tacolast.sendKeys("Frowe");
				tacophone.sendKeys("1234567890");
				tacoemail.sendKeys("testfrowe@gmail.com");
				// tacopassword.sendKeys("abcdef");
				tacosignup.click();
				browser.driver.sleep(1000);
		};

	}; //end of QHHomepage
  module.exports = function () {
      return new QHHomepage();
  };
}());
