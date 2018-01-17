(function () {
	var QHHomepage = function () {
		
		//Forgot Password
			var hamburger = element(by.css('a.mobile-menu-link.menu-bars-link'));
			var loginLink = element(by.linkText('LOGIN'));
			var signInLink = element(by.css('a#Header1_LoginStatusControl1_lnkStatus'));
			var forgotPwdLink = element(by.css('a.md-no-ink.md-button.md-ink-ripple'));
			var email= element(by.model('user.email'));
			var submit = element(by.buttonText('RESET'));
		        
		//Sign in
			var signInContinue = element(by.css('a.md-lightBrandTheme-theme'));
			var signInOnceMore = element(by.css('a#Header1_LoginStatusControl1_lnkStatus'));
			var signInEmail = element(by.id('input_1'));
	        var signInPassword = element(by.id('input_2'));
			var signInButton = element(by.css('button.md-button.md-ink-ripple.sf-button.stroke-to-fill'));

		//Sign Out
			var signOut = element(by.css('a#Header1_LoginStatusControl1_lnkStatus'));
		
        browser.ignoreSynchronization = true;
        browser.get('https://www.healthfirst.com/');
        //browser.driver.manage().window().maximize();		
        
        this.doForgotPassword = function () {
        	browser.driver.sleep(9000);
        	hamburger.click();
			loginLink.click();
			browser.driver.sleep(1000);
			forgotPwdLink.click();
			email.sendKeys('connectns99@gmail.com');
			submit.click();
			browser.driver.sleep(1000);
		};   

		this.signInUser = function () {
			browser.driver.sleep(3000);
			signInContinue.click();

			hamburger.click();
			loginLink.click();
			browser.driver.sleep(3000);
			signInEmail.sendKeys('connectns99@gmail.com');
			signInPassword.sendKeys('windows@12');
			
			browser.driver.sleep(3000);	
			signInButton.click();
			
			browser.driver.sleep(3000);	
		};

		this.signOutUser = function () {
			browser.driver.sleep(2000);
			hamburger.click();
			loginLink.click();
			browser.driver.sleep(3000);	
			signOut.click();				
		};
        
    };
    module.exports = function () {
        return new QHHomepage();
    };
}());
