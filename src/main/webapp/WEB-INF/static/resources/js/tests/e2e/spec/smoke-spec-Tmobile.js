var Application = require('./page/page-smoke-Tmobile.js');

describe('NBCUniversal application', function() {
	var application = new Application();
   beforeEach(function() {

   });

   it('should display HOME Page', function() {
         application.gotToHome();
         expect(browser.getTitle()).toContain('T-Mobile');
   });

   it('should display DEALS Page', function() {
         application.gotToDeals();
         expect(browser.getTitle()).toContain('Deals & Promotions');
   });

   it('should display PHONES Page', function() {
         application.gotToPhones();
         expect(browser.getTitle()).toContain('Smartphones');
   });

   it('should display PLANS Page', function() {
         application.goToPlans();
         expect(browser.getTitle()).toContain('Cell Phone Plans');
   });

   it('should display MY T-MOBILE Page', function() {
         application.goToMyTmobile();
         expect(browser.getTitle()).toContain('My T-Mobile');
   });

   it('should display FORGOT PASSWORD Page', function() {
         application.goToForgotPassword();
         expect(browser.getTitle()).toContain('Forgot Password');
   });

});
