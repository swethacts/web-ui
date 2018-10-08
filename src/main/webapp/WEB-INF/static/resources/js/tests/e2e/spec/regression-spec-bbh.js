var Application = require('./page/page-regression-bbh.js');

describe('BBH application', function() {
	var application = new Application();
   beforeEach(function() {

   });

   it('should display HOME Page', function() {
         application.gotToHome();
         expect(browser.getTitle()).toContain('Brown Brothers Harriman');
   });

	 it('should display Error Page', function() {
	 			application.goToLogin();
	 			expect(browser.getTitle()).toContain('Private Banking');
	 });



});
