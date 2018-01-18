(function () {
	var QHHomepage = function () {
		
		//Footer
            var privacyNotices = element(by.linkText('Privacy Notices'));
            var sitemap = element(by.linkText('Sitemap'));
            var contactus = element(by.linkText('Contact Us'));
            var aboutus = element(by.linkText('About Us'));
            var careers = element(by.linkText('Careers'));
            var glossary = element(by.linkText('Glossary'));

        //Member Login
        var memberLogin = element.all(by.css('span.icon_login')).first();
        var username = element(by.id('username'));
        var password = element(by.id('password'));
        var memberLoginButton = element(by.id('loginButton'));
           
        //Provider Login
        var providerLogin = element.all(by.css('span.icon_login')).last();
        var usernameP = element(by.id('ctl00_MainContent_uxLoginForm_ctl00_uxUserNameText_textbox'));
        var passwordP = element(by.id('ctl00_MainContent_uxLoginForm_ctl00_uxPasswordText_textbox'));
        var providerLoginButton = element(by.id('ctl00_MainContent_uxLoginForm_ctl01_uxLoginButton'));
			
        //Search
        var searchText = element(by.css('input.display.search_box_upd'));
        var goButton = element(by.css('input.bnt_search'));

        //Pay my Bill
        var billPayLink = element(by.linkText('Pay My Bill'));
        var billEmail = element(by.name('login'))
        var billPassword = element(by.name('password'))
        var billSubmitButton = element(by.name('continue'))

        
        browser.ignoreSynchronization = true;
        browser.get('https://healthfirst.org/about/');
        //browser.driver.manage().window().maximize();

        this.gotToHome = function() {
        	browser.waitForAngular();
        	browser.driver.sleep(7000);
        };

        this.gotToMemberLogin = function() {
            memberLogin.click();
            browser.driver.sleep(1000);
        };

        this.gotToInvalidMemberLogin = function() {
            username.sendKeys('johnsmith1212@gmail.com');
            memberLoginButton.click();
            browser.driver.sleep(1000);
        };

        this.gotToProviderLogin = function() {
            browser.navigate().back();
            browser.waitForAngular(); 
            browser.navigate().back(); 
            providerLogin.click();
            browser.driver.sleep(1000);            
        };   

        this.gotToInvalidProviderLogin = function() {
            usernameP.sendKeys('johnsmith1212@gmail.com');
            passwordP.sendKeys('testing');
            providerLoginButton.click();
            browser.driver.sleep(1000);
        };    

        this.goToSearch = function() {
            browser.navigate().back();
            browser.waitForAngular(); 
            browser.navigate().back(); 
            searchText.sendKeys('Medicare');
            goButton.click();
            browser.driver.sleep(1000);
        };

        this.gotToBillPayPage = function() {
            billPayLink.click();
            billEmail.sendKeys('johnsmith1212@gmail.com');
            billPassword.sendKeys('testing');
            billSubmitButton.click();
            browser.driver.sleep(1000);

        };

        this.gotToInvalidBillPayLogin = function() {

        };
        
    };
    module.exports = function () {
        return new QHHomepage();
    };
}());
