var Application = require('./page/page-smoke-bbh.js');

describe('BBH application', function() {
	var application = new Application();
   beforeEach(function() {

   });

   it('should display HOME Page', function() {
         application.gotToHome();
         expect(browser.getTitle()).toContain('Brown Brothers Harriman');
   });

	 it('should display Insights Page', function() {
				 application.gotToIM();
				 expect(browser.getTitle()).toContain('Insights');
	 });

	 it('should display Investor Services Page', function() {
         application.goToIS();
         expect(browser.getTitle()).toContain('Investor Services');
   });

   it('should display Private Banking Page', function() {
         application.gotToPB();
         expect(browser.getTitle()).toContain('Private Banking');
   });


});
