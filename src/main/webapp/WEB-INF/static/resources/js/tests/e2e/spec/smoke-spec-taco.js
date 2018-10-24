var Application = require('./page/page-smoke-taco.js');

describe('Taco Bell application', function() {
	var application = new Application();
   beforeEach(function() {

   });

   it('should display HOME Page', function() {
         application.gotToHome();
         expect(browser.getTitle()).toContain('Taco Bell');
   });

	 it('should display Private Banking Page', function() {
	 			application.goToFood();
	 			expect(browser.getTitle()).toContain('Taco Bell Menu');
	 });

	 it('should display Privacy Policy Page', function() {
				 application.goToFavorites();
				 expect(browser.getTitle()).toContain('Your Taco Bell Favorites');
	 });

	 it('should display Site Map Page', function() {
         application.goToLocations();
         expect(browser.getTitle()).toContain('Taco Bell Locations');
   });

});
