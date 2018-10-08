var Application = require('./page/page-smoke-bbh.js');

describe('BBH application', function() {
	var application = new Application();
   beforeEach(function() {

   });

   it('should display HOME Page', function() {
         application.gotToHome();
         expect(browser.getTitle()).toContain('Brown Brothers Harriman');
   });

	 it('should display Private Banking Page', function() {
	 			application.goTopb();
	 			expect(browser.getTitle()).toContain('Private Banking');
	 });

	 it('should display Privacy Policy Page', function() {
				 application.goTopp();
				 expect(browser.getTitle()).toContain('Privacy Policy');
	 });

	 it('should display Site Map Page', function() {
         application.goTosm();
         expect(browser.getTitle()).toContain('Site Map');
   });

});
