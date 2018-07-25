(function () {
	var QHHomepage = function () {
				//HEADER
        var locations = element(by.linkText('Locations'));
				var stay = element(by.linkText('Stay'));
				var offers = element(by.linkText('Offers'));
				var brands = element(by.linkText('Our Brands'));

        browser.ignoreSynchronization = true;
        browser.get('https://www.ihg.com');
        //browser.driver.manage().window().maximize();

        this.gotToHome = function() {
        	browser.waitForAngular();
        	browser.driver.sleep(4000);
        };

				this.goToLocations = function () {
					locations.click();
	      	browser.driver.sleep(1000);
				};

				this.goToStay= function () {
					stay.click();
	      	browser.driver.sleep(1000);
				};

				this.goToOffers = function () {
					offers.click();
					browser.driver.sleep(1000);
				};

				this.goToOurBrands = function () {
					brands.click();
					browser.driver.sleep(1000);
				};

  };
  module.exports = function () {
      return new QHHomepage();
  };
}());
