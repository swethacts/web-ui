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
				expect(foo.getText()).toEqual("Uh-oh. You've tried to log in too many times. Please reset your password and try again.");
	 });

	 it('should display user prompt for Incomplete Account Form', function() {
			 application.goToAccountCreation();
			 var foo = element(by.css('.validation-tooltip span'));
			 expect(foo.getText()).toContain("Login error. Please try again");
	});

});
