(function () {
	var QHHomepage = function () {
		var pb = element(by.linkText('Private Banking'));
		var pp = element(by.linkText('Privacy Policy'));
		var sm = element(by.linkText('Site Map'));

    browser.ignoreSynchronization = true;
    browser.get('https://www.bbh.com/en-us');
    //browser.driver.manage().window().maximize();

    this.gotToHome = function() {
    	browser.waitForAngular();
    	browser.driver.sleep(4000);
    };

		this.gotTopb = function() {
				pb.click();
				browser.driver.sleep(1000);
		};

		this.gotTopp = function() {
				pp.click();
				browser.driver.sleep(1000);
		};

		this.gotTosm = function() {
				sm.click();
				browser.driver.sleep(1000);
		};

	}; //end of QHHomepage
  module.exports = function () {
      return new QHHomepage();
  };
}());
