(function () {
	var QHHomepage = function () {

		var search = element(by.id('searchterm'));
		var searchButton = element(by.css('#previewSearchForm > input[value="Search"]'));

		var login = element(by.css('li.client-login.worldviewClick > span.WorldViewLogin'));
		var user = element(by.id('userid'));
		var password = element(by.id('password'));
		var submit = element(by.css('#dWorldViewAvailable > button'));

    browser.ignoreSynchronization = true;
    browser.get('https://www.bbh.com/en-us');
    //browser.driver.manage().window().maximize();

    this.gotToHome = function() {
    	browser.waitForAngular();
    	browser.driver.sleep(4000);
    };

		this.goToSearch = function() {
				search.sendKeys("high net worth individual");
				searchButton.click();
				browser.driver.sleep(1000);
		};

		this.goToLogin = function() {
				login.click();
				user.sendKeys("test");
				password.sendKeys("test");
				submit.click();
				browser.driver.sleep(1000);
		};

	}; //end of QHHomepage
  module.exports = function () {
      return new QHHomepage();
  };
}());
