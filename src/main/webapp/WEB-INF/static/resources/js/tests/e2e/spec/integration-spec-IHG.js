var Application = require('./page/page-integration-IHG.js');

describe('IHG.com application', function() {
	var application = new Application();
   beforeEach(function() {

   });

   it('should display HOME Page', function() {
	   application.gotToHome();
	   expect(browser.getTitle()).toContain('IHG');
   });

   it('should display Locations Page', function() {
	   application.goToLocations();
	   expect(browser.getTitle()).toContain('Hotel Deals');
   });

   it('should display Stay Page', function() {
		 	application.goToStay();
    	expect(browser.getTitle()).toContain('Planning & Reservations');
   });

	 it('should display Offers Page', function() {
		 application.goToOffers();
		 expect(browser.getTitle()).toContain('IHG Offers');
   });

	 it('should display Brands Page', function() {
		 application.goToOurBrands();
		 expect(browser.getTitle()).toContain('IHG Brands');
   });
});
