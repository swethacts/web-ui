var Application = require('./page/page-signUpMobileHealthFirst.js');

describe('HealthFirst app', function() {
	var application = new Application();
   beforeEach(function() {
	   
   });
   
   it('should display HealthFirst home page', function() {
		 application.gotToHome();       
         expect(browser.getTitle()).toContain('HealthFirst');
   });


   it('should display HealthFirst Forgot Password', function() {
         application.goToForgotPassword();       
         expect(browser.getTitle()).toEqual('Login');
   });

   it('should successfully send email when user does forgot password', function() {
         application.doForgotPassword();
         var foo = element(by.css('h2.md-title'));
         expect(foo.getText()).toEqual('Please check your email');
         element(by.buttonText('OK')).click();       
   }); 

   it('should display Sign In Page ', function() {
         application.gotosignInPage();
         expect(browser.getTitle()).toEqual('Login');
   });


   it('should not error out on sign in with invalid email or password ', function() {
         application.signInUserInvalidPassword();
         var msg = element(by.css('h2.md-title'));
         expect(msg.getText()).toEqual('Login failed');
         element(by.buttonText('Try again')).click();
   });
   
   it('should sign in successfully with email and password', function() {
         application.signInUser();
         expect(browser.getTitle()).toContain('HealthFirst');
   });
   
   it('should sign in successfully log off user on signoff', function() {
         application.signOutUser();
         expect(browser.getTitle()).toContain('HealthFirst');
   });

    it('should go to Contact Us page', function() {
         application.gotocontactus();
         expect(browser.getTitle()).toContain('Contact Us');       
   });

   it('should provide a confirmation on contact us form submission', function() {
         application.contactus();
         //expect(browser.getCurrentUrl()).toEqual('https://www.healthfirst.com/thank-you/'); 
         expect(browser.getCurrentUrl()).toEqual('https://www.healthfirst.com/thank-you-user');        
   });
     
});