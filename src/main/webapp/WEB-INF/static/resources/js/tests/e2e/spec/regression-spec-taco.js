var Application = require('./page/page-regression-taco.js');

describe('Taco application', function() {
	var application = new Application();
   beforeEach(function() {

   });

   it('should display HOME Page', function() {
         application.gotToHome();
         expect(browser.getTitle()).toContain('Taco Bell');
   });

	 it('should display Error Mesasge for Incorrect Creds', function() {
	 			application.goToLogin();
				var foo = element(by.css('.validation-tooltip span'));
				expect(foo.getText()).toContain("Please reset your password and try again");
	 });

	 it('should display Error Message for Email ID already in use', function() {
			 application.goToAccountCreation();
			 var foo1 = element(by.css('.has-error .validation-msg-container'));
			 expect(foo1.getText()).toContain("This email address can't be used");
	});

});
