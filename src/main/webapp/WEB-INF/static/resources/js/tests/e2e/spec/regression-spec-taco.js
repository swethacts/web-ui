var Application = require('./page/page-regression-taco.js');

describe('Taco application', function() {
	var application = new Application();
   beforeEach(function() {

   });

   it('should display HOME Page', function() {
         application.gotToHome();
         expect(browser.getTitle()).toContain('Taco Bell');
   });

	 it('should display Error Page', function() {
	 			application.goToLogin();
				// var foo = element(by.css('#loginForm > p.g-color-red'));
				// expect(foo.getText()).toEqual('valid user ID and/or password');
	 });



});
