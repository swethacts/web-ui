(function () {
	var QHHomepage = function () {
		var tacologin = element(by.css('.login-link'));
		var tacouser = element(by.id('sign-in-email'));
		var tacopassword = element(by.id('sign-in-password'));
		var tacosubmit = element(by.id('js-sign-in-profile'));

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

	}; //end of QHHomepage
  module.exports = function () {
      return new QHHomepage();
  };
}());
