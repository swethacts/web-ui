(function () {
	var QHHomepage = function () {
		var pb = element(by.linkText('Private Banking'));
		var im = element(by.linkText('Investment Management'));
		var is = element(by.linkText('Investor Services'));

    browser.ignoreSynchronization = true;
    browser.get('https://www.bbh.com/en-us');
    //browser.driver.manage().window().maximize();

    this.gotToHome = function() {
    	browser.waitForAngular();
    	browser.driver.sleep(4000);
    };

		this.gotToPB = function() {
				pb.click();
				browser.driver.sleep(1000);
		};

		this.gotToIM = function() {
				im.click();
				browser.driver.sleep(1000);
		};

		this.gotToIS = function() {
				is.click();
				browser.driver.sleep(1000);
		};

	}; //end of QHHomepage
  module.exports = function () {
      return new QHHomepage();
  };
}());
