(function () {
	var QHHomepage = function () {
		
		        
		//Sign in
		var signInContinue = element(by.css('a.md-lightBrandTheme-theme'));
		var signInOnceMore = element(by.css('a#Header1_LoginStatusControl1_lnkStatus'));

		var emailInput = element(by.id('input_1'));
        var passwordInput = element(by.id('input_2'));
		//var submitButton = element(by.css('button.md-button.md-ink-ripple.sf-button.stroke-to-fill'));
		var loginButton = element(by.buttonText('LOGIN'));

		//Forgot Password
		var signInLink = element(by.css('a#Header1_LoginStatusControl1_lnkStatus'));
		var forgotPwdLink = element(by.css('a.md-no-ink.md-button.md-ink-ripple'));
		var email= element(by.model('user.email'));
		var submit = element(by.buttonText('RESET'));
		
        browser.ignoreSynchronization = true;
        browser.get('https://www.healthfirst.com/');
        //browser.driver.manage().window().maximize();		
        
        this.doForgotPassword = function () {
			signInLink.click();
			browser.driver.sleep(1000);
			forgotPwdLink.click();
			email.sendKeys('connectns99@gmail.com');
			submit.click();
			browser.driver.sleep(3000);
		};   

		this.signInUser = function () {
			browser.driver.sleep(3000);
			signInContinue.click();
			signInOnceMore.click();
			browser.driver.sleep(1000);
			emailInput.sendKeys('connectns99@gmail.com');
			passwordInput.sendKeys('windows@12');
			loginButton.click();
			browser.driver.sleep(4000);	
		};
        
    };
    module.exports = function () {
        return new QHHomepage();
    };
}());
