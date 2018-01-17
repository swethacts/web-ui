var Application = require('./page/page-smokeMobileHealthFirst.js');

describe('HealthFirst app', function() {
	var application = new Application();
   beforeEach(function() {
	   
   });
   
   it('should display HOME Page', function() {
         application.gotToHome();
         expect(browser.getTitle()).toContain('HealthFirst');
   });

   it('should display ON TRAQ Page', function() {
         application.gotToOnTraq();       
         expect(browser.getTitle()).toContain('OnTraq');
   });

   it('should display ON Automatic Replenishment Program Page', function() {
         application.goToAutomatic();       
         expect(browser.getTitle()).toContain('Automatic Replenishment Program');
   });

   it('should display ADA Page', function() {
         application.goToADA();       
         expect(browser.getTitle()).toContain('ADA');
   });

   it('should display Contact Us Page', function() {
         application.goToContactUs();       
         expect(browser.getTitle()).toContain('Contact Us');
   });

   it('should display Login Page', function() {
         application.gotToLogin();       
         expect(browser.getTitle()).toContain('Sign In');
   });
     
});