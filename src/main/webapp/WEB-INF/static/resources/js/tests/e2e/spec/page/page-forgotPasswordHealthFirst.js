(function () {
	var Forgotpwd = function () {
		   

		var signInLink = element(by.css('a#Header1_LoginStatusControl1_lnkStatus'));
		var forgotPwdLink = element(by.css('a.md-no-ink.md-button.md-ink-ripple'));
		var emailInput = element(by.model('user.email'));
		var submitButton = element(by.buttonText('RESET'));

		
        browser.ignoreSynchronization = true;
        browser.get('https://www.healthfirst.com/');
        //browser.driver.manage().window().maximize();		
        
        this.doForgotPassword = function () {
			signInLink.click();
			browser.driver.sleep(1000);
			forgotPwdLink.click();
			emailInput.sendKeys('connectns99@gmail.com');
			submitButton.click();
			browser.driver.sleep(5000);
		}  
        
    };
    module.exports = function () {
        return new Forgotpwd();
    };
}());
