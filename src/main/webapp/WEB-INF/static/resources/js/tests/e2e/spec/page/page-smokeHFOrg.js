(function () {
	var QHHomepage = function () {
		
		//Footer
            var privacyNotices = element(by.linkText('Privacy Notices'));
            var sitemap = element(by.linkText('Sitemap'));
            var contactus = element(by.linkText('Contact Us'));
            var aboutus = element(by.linkText('About Us'));
            var careers = element(by.linkText('Careers'));
            var glossary = element(by.linkText('Glossary'));
			
        browser.ignoreSynchronization = true;
        browser.get('https://healthfirst.org/about/');
        //browser.driver.manage().window().maximize();

        this.gotToHome = function() {
        	browser.waitForAngular();
        	browser.driver.sleep(7000);
        };

        this.gotToGlossary = function() {
            glossary.click();
            browser.driver.sleep(1000);
        };

        this.gotToPrivacyNotices = function() {
            privacyNotices.click();
        	browser.driver.sleep(1000);
        };

        this.goToSitemap = function () {
            sitemap.click();
        	browser.driver.sleep(1000);
		};

		this.goToContactUs = function () {
			contactus.click();            
        	browser.driver.sleep(1000);
		};

		this.goToAboutus = function () {
			aboutus.click();
        	browser.driver.sleep(1000);			
		};

        this.goToCareers = function () {
            careers.click();
            browser.driver.sleep(1000);         
        };
        
    };
    module.exports = function () {
        return new QHHomepage();
    };
}());
