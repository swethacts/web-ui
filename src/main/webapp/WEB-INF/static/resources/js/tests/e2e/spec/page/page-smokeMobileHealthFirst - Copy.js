(function () {
	var QHHomepage = function () {
		
		//Hamburger Links
			var hamburger = element(by.css('a.mobile-menu-link.menu-bars-link'));
			var ontraq = element(by.linkText('ONTRAQ'));
			var automatic = element(by.linkText('AUTOMATIC REPLENISHMENT'));
			var ada = element(by.linkText('ADA MEMBER DISCOUNTS'));
			var contactus = element(by.linkText('CONTACT US'));
			var loginLink = element(by.linkText('LOGIN'));
			var myaccount = element(by.linkText('MY ACCOUNT'));
			
        browser.ignoreSynchronization = true;
        browser.get('https://www.healthfirst.com/');
        //browser.driver.manage().window().maximize();

        this.gotToHome = function() {
        	browser.waitForAngular();
        	browser.driver.sleep(10000);
        };

        this.gotToOnTraq = function() {        	
        	browser.driver.sleep(5000);
        	hamburger.click();
        	ontraq.click();
        	browser.driver.sleep(2000);
        };

        this.goToAutomatic = function () {
			hamburger.click();
        	automatic.click();
        	browser.driver.sleep(2000);
		};

		this.goToADA = function () {						
			hamburger.click();
        	ada.click();
        	browser.driver.sleep(2000);
		};   

		this.goToContactUs = function () {
			hamburger.click();
        	contactus.click();
        	browser.driver.sleep(2000);
		};

		this.gotToLogin = function () {
			hamburger.click();
        	loginLink.click();
        	browser.driver.sleep(4000);			
		};
        
    };
    module.exports = function () {
        return new QHHomepage();
    };
}());
