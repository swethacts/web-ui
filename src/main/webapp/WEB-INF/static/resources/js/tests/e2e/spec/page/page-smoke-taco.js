(function () {
	var QHHomepage = function () {
		var Food = element(by.linkText('Food'));
		var Favorites = element(by.linkText('Favorites'));
		var Locations = element(by.linkText('Locations'));

    browser.ignoreSynchronization = true;
    browser.get('https://www.tacobell.com');
    //browser.driver.manage().window().maximize();

    this.gotToHome = function() {
    	browser.waitForAngular();
    	browser.driver.sleep(4000);
    };

		this.goToFood= function() {
				Food.click();
				browser.driver.sleep(1000);
		};

		this.goToFavorites= function() {
				Favorites.click();
				browser.driver.sleep(1000);
		};

		this.goToLocations= function() {
				Locations.click();
				browser.driver.sleep(1000);
		};

	}; //end of QHHomepage
  module.exports = function () {
      return new QHHomepage();
  };
}());
