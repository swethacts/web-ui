(function () {
	var QHHomepage = function () {
		var zip = element(by.name('dest-input'));
		var searchButton = element(by.className('htl-search'));

    browser.ignoreSynchronization = true;
    browser.get('https://www.ihg.com');
    //browser.driver.manage().window().maximize();

    this.gotToHome = function() {
    	browser.waitForAngular();
    	browser.driver.sleep(4000);
    };

		this.gotToSearch = function() {
				zip.sendKeys("30339");
				searchButton.click();
				browser.driver.sleep(1000);
		};
	};
  module.exports = function () {
      return new QHHomepage();
  };
}());
