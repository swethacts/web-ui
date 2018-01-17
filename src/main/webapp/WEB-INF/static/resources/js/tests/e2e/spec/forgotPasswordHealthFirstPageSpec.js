var ApplicationFP = require('./page/page-forgotPasswordHealthFirst.js');

describe('HealthFirst Forgot password', function() {
	var applicationfp = new ApplicationFP();
   beforeEach(function() {
	   
   });
   
   it('should display HealthFirst home page', function() {		  
	      expect(browser.getTitle()).toContain('HealthFirst');
   });
   
   it('should successfully send email for forgot password', function() {
		 applicationfp.doForgotPassword();
         var foo = element(by.css('h2.md-title'));
         expect(foo.getText()).toEqual('Please check your email');
         element(by.buttonText('OK')).click();	     
   });    
});