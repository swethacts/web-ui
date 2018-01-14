var Application = require('./page/page-signUp.js');

describe('sqhub login page', function() {
	var application = new Application();
   beforeEach(function() {
	   
   });
   
   it('should load the home page', function() {		  
	      expect(browser.getTitle()).toEqual('The Home Depot');
   });
   
   it('should sign in successfully with email and password', function() {
		  application.signInUser();
	      expect(browser.getTitle()).toEqual('The Home Depot');
   });
   
   
});