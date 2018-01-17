var Application = require('./page/page-signUpMobileHealthFirst.js');

describe('HealthFirst Login', function() {
	var application = new Application();
   beforeEach(function() {
	   
   });
   
   it('should display HealthFirst home page', function() {		  
	      expect(browser.getTitle()).toContain('HealthFirst');
   });

   it('should successfully send email when user does forgot password', function() {
       application.doForgotPassword();
         var foo = element(by.css('h2.md-title'));
         expect(foo.getText()).toEqual('Please check your email');
         element(by.buttonText('OK')).click();       
   }); 
   
   it('should sign in successfully with email and password', function() {
		  application.signInUser();
	     expect(browser.getTitle()).toContain('HealthFirst');
   });
   
   it('should sign in successfully log off user on signoff', function() {
        application.signOutUser();
        expect(browser.getTitle()).toContain('HealthFirst');
   });
     
});