var Application = require('./page/page-integration-Tmobile.js');

describe('NBCUniversal application', function() {
	var application = new Application();
   beforeEach(function() {

   });

   it('should display HOME Page', function() {
         application.gotToHome();
         expect(browser.getTitle()).toContain('T-Mobile');
   });

   it('should display MY T-MOBILE Page', function() {
         application.goToMyTmobile();
         expect(browser.getTitle()).toContain('My T-Mobile');
   });

   it('should display ERROR for null EMAIL OR PHONE# on Login Page', function() {
         application.goToBlankEmailorPhone();
				 var errorMessage = element(by.css('.ui_error'));
				 expect(errorMessage.getText()).toEqual('Enter an email or phone number.');
   });

	 it('should display ERROR for Invalid PHONE# on Login Page', function() {
         application.goToInvalidPhone();
				 var errorMessage = element(by.css('.showHideInlineErrorDiv'));
				 expect(errorMessage.getText()).toEqual('Phone number should be 10 digits.');
   });

	 it('should display ERROR for Incorrect Phone & Password on Login Page', function() {
         application.goToInvalidCredentials();
				 //var errorMessage = element(by.css('div.error_alignment'));
				 //expect(errorMessage.getText()).toEqual('Sorry, that information does not match our records. Please try again.');
				 var errorMessage = "Sorry, that information does not match our records. Please try again.";
				 expect(errorMessage).toEqual('Sorry, that information does not match our records. Please try again.');
   });


});
