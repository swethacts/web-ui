(function () {
	var QHHomepage = function () {
		
		//Footer
            var accounts = element(by.linkText('ACCOUNTS'));
            var creditcards = element(by.linkText('CREDIT CARDS'));
            var mortgages = element(by.linkText('MORTGAGES'));
            var loans = element(by.linkText('LOANS'));
            var waystobank = element(by.linkText('WAYS TO BANK'));
            var aboutrbc = element(by.linkText('About RBC'));
			
        browser.ignoreSynchronization = true;
        browser.get('https://www.rbcroyalbank.com');
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

        this.goToMortgages = function () {
            mortgages.click();
        	browser.driver.sleep(1000);
		};

		this.goToLoans = function () {
			loans.click();            
        	browser.driver.sleep(1000);
		};

		this.goToWaysToBank = function () {
			waystobank.click();
        	browser.driver.sleep(1000);			
		};

        this.goToAboutRBC = function () {
            aboutrbc.click();
            browser.driver.sleep(1000);         
        };
        
    };
    module.exports = function () {
        return new QHHomepage();
    };
}());
