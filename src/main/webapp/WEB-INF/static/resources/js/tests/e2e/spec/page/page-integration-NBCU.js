(function () {
	var QHHomepage = function () {
				//Footer
        var whoweare = element(by.linkText('WHO WE ARE'));
        var ourhistory = element(by.linkText('OUR HISTORY'));
        var newsroom = element(by.linkText('NEWSROOM'));
        var values = element(by.linkText('VALUES'));
        var careers = element(by.linkText('CAREERS'));
        var businesses = element(by.linkText('BUSINESSES'));

        browser.ignoreSynchronization = true;
        browser.get('http://www.nbcuniversal.com');
        //browser.driver.manage().window().maximize();

        this.gotToHome = function() {
        	browser.waitForAngular();
        	browser.driver.sleep(4000);
        };

        this.gotToWhoWeAre = function() {
            whoweare.click();
            browser.driver.sleep(1000);
        };

        this.gotToOurHistory = function() {
            ourhistory.click();
        		browser.driver.sleep(1000);
        };

        this.goToNewsroom = function () {
            newsroom.click();
        		browser.driver.sleep(1000);
				};

			this.goToValues = function () {
						values.click();
	        	browser.driver.sleep(1000);
			};

			this.goToCareers = function () {
						careers.click();
	        	browser.driver.sleep(1000);
			};

    this.goToBusinesses = function () {
        businesses.click();
        browser.driver.sleep(1000);
    };

  };
  module.exports = function () {
      return new QHHomepage();
  };
}());
