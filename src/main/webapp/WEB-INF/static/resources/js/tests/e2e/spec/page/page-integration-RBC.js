(function () {
	var QHHomepage = function () {
		
		//Header
            var accounts = element(by.linkText('ACCOUNTS'));
            var creditcards = element(by.linkText('CREDIT CARDS'));
            var loans = element(by.linkText('LOANS'));
            var waystobank = element(by.linkText('PAYING & RECEIVING'));
            var aboutrbc = element(by.linkText('BUSINESS ADVICE'));
			
            var signin = element(by.linkText('Sign In'));
            var username = element(by.id('K1'));
            var password = element(by.id('Q1'));
            var submitbutton = element(by.css('button.yellowBtnLarge'));

            
        browser.ignoreSynchronization = true;
        browser.get('https://www.rbcroyalbank.com/business/index.html');
        //browser.driver.manage().window().maximize();

        this.gotToHome = function() {
        	browser.waitForAngular();
        	browser.driver.sleep(4000);
        };

        this.gotToAccounts = function() {
            accounts.click();
            browser.driver.sleep(1000);
        };

        this.gotToCreditCards = function() {
            creditcards.click();
        	browser.driver.sleep(1000);
        };

       this.goToLoans = function () {
			loans.click();            
        	browser.driver.sleep(1000);
		};

		this.goToPayingReceiving = function () {
			waystobank.click();
        	browser.driver.sleep(1000);			
		};

        this.goToBusinessAdvice = function () {
            aboutrbc.click();
            browser.driver.sleep(1000);         
        };

        this.goToSignIn = function () {
            signin.click();
            username.sendKeys('fkdsjafs');
            password.sendKeys('fkdsjafs');
            submitbutton.click();

            browser.driver.sleep(1000);         
        };
        
    };
    module.exports = function () {
        return new QHHomepage();
    };
}());
