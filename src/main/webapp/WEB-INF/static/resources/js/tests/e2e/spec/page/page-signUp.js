(function () {
	var QHHomepage = function () {
		
		var myAccountLink = element(by.id('headerMyAccount'));
		var signInButton = element(by.id('authSignIn'));
        var emailInput = element(by.id('email_id'));
        var passwordInput = element(by.id('password'));
		var submitButton = element(by.id('accountSignIn'));
		
        browser.ignoreSynchronization = true;
        browser.get('https://www.homedepot.com');
        //browser.driver.manage().window().maximize();		
        
        this.signInUser = function () {
			myAccountLink.click();
			browser.driver.sleep(3000);
			signInButton.click();
			browser.driver.sleep(3000);
			emailInput.sendKeys('jatin_jogi@homedepot.com');
			passwordInput.sendKeys('windows@12');
			submitButton.click();
		}  
        
    };
    module.exports = function () {
        return new QHHomepage();
    };
}());
