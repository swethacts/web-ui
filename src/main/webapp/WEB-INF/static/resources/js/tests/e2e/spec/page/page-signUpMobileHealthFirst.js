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

		//Contact Us
			var contactus = element(by.linkText('CONTACT US'));
			var goToHome = element(by.id('LogoImage'));
			var firstname = element(by.css('input#input_1_3_3'));
			var lastname = element(by.id('input_1_3_6'));
			var company = element(by.id('input_1_6'));
			var emailid = element(by.id('input_1_1'));
			var phone = element(by.id('input_1_2'));
			var comments = element(by.id('input_1_4'));
			var submitContactUs = element(by.id('gform_submit_button_1'));		
		
        browser.ignoreSynchronization = true;
        browser.get('https://www.healthfirst.com/');
        //browser.driver.manage().window().maximize();

        this.goToForgotPassword = function () {
        	browser.driver.sleep(5000);
        	hamburger.click();
			loginLink.click();
			browser.driver.sleep(3000);
			forgotPwdLink.click();
        };	
        
        this.doForgotPassword = function () {        	
			browser.driver.sleep(1000);			
			email.sendKeys('connectns99@gmail.com');
			submit.click();
			browser.driver.sleep(1000);
		};

		this.gotosignInPage = function () {
			browser.driver.sleep(3000);
			signInContinue.click();
			hamburger.click();
			loginLink.click();
			browser.driver.sleep(4000);
		}


		this.signInUserInvalidPassword = function () {			
			browser.driver.sleep(3000);
			signInEmail.sendKeys('connectns99@gmail.com');
			signInPassword.sendKeys('windows@1');			
			browser.driver.sleep(3000);	
			signInButton.click();			
			browser.driver.sleep(4000);	
		};   

		this.signInUser = function () {
			browser.driver.sleep(3000);
			//signInContinue.click();
			//hamburger.click();
			//loginLink.click();
			//browser.driver.sleep(3000);
			
			signInEmail.clear();
			signInPassword.clear();			
			
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

		this.gotocontactus = function () {
			browser.driver.sleep(4000);
			//goToHome.click();
			//hamburger.click();
			contactus.click();
			browser.driver.sleep(3000);
		};

		this.contactus = function () {			
			firstname.sendKeys('John');
			lastname.sendKeys('Smith');
			company.sendKeys('CKS Corporation');
			emailid.sendKeys('johnsmith9988112@gmail.com');
			phone.sendKeys('8601110000');
			comments.sendKeys('Need more info');
			submitContactUs.click();
		};
        
    };
    module.exports = function () {
        return new QHHomepage();
    };
}());
