var Application = require('./page/page-signUpMobileHealthFirst.js');

describe('HealthFirst app', function() {
	var application = new Application();
   beforeEach(function() {
	   
   });
   
   it('lands on the home page successfully', function() { 
         application.gotToHome();    
         expect(browser.getTitle()).toContain('HealthFirst');
   });


   it('goes to the forgot password page using the menu link', function() {
         application.goToForgotPassword();       
         expect(browser.getTitle()).toEqual('Login');
   });

   it('shows a confirmation message when user does forgot password ', function() {
         application.doForgotPassword();
         var foo = element(by.css('h2.md-title'));
         expect(foo.getText()).toEqual('Please check your email');
         element(by.buttonText('OK')).click();       
   }); 

   it('lands on the sign in page using the menu link ', function() {
         application.gotosignInPage();
         expect(browser.getTitle()).toEqual('Login');
   });


   it('shows error pop up when user enter invalid sign in password ', function() {
         application.signInUserInvalidPassword();
         var msg = element(by.css('h2.md-title'));
         expect(msg.getText()).toEqual('Login failed');
         element(by.buttonText('Try again')).click();
   });
   
   it('successfully sign in when valid email and password are supplied', function() {
         application.signInUser();
         expect(browser.getTitle()).toContain('HealthFirst');
   });
   
        
});