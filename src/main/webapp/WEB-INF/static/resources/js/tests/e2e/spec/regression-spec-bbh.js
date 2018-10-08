var Application = require('./page/page-regression-bbh.js');

describe('BBH application', function() {
	var application = new Application();
   beforeEach(function() {

   });

   it('should display HOME Page', function() {
         application.gotToHome();
         expect(browser.getTitle()).toContain('Brown Brothers Harriman');
   });

	 it('should display Search Page', function() {
	 		 application.goToSearch();
	 		 expect(browser.getTitle()).toContain('Search');
	 });

	 it('should display Error Page', function() {
	 			application.goToLogin();
				var foo = element(by.css('#loginForm > p.g-color-red'));
				expect(foo.getText()).toEqual('Invalid user ID and/or password');
	 });



});
