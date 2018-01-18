var Application = require('./page/page-regressionHFOrg.js');

describe('HealthFirst Org app', function() {
	var application = new Application();
   beforeEach(function() {
	   
   });
   
   it('should display HOME Page', function() {
         application.gotToHome();
         expect(browser.getTitle()).toContain('Healthfirst');
   });

  
  it('should display Member Login Page', function() {
         application.gotToMemberLogin();
         expect(browser.getTitle()).toContain('Healthfirst Member');
   });

   it('should error for Member Login with invalid credentials', function() {
         application.gotToInvalidMemberLogin();
         var memberLoginErrMsg = element(by.css('div.loginMessage.errorMessage'));
         expect(memberLoginErrMsg.getText()).toEqual('Login Failed.');                 
   });

    it('should display Provider Login Page', function() {
         application.gotToProviderLogin();
         expect(browser.getTitle()).toContain('Healthfirst Provider');
   });

   it('should error for Provider Login with invalid credentials', function() {
         application.gotToInvalidProviderLogin();
         var providerLoginErrMsg = element(by.id('ctl00_MainContent_uxMessageLabel'));
         expect(providerLoginErrMsg.getText()).toEqual('Login Failed.');                 
   });
   
   it('should search with entered keyword', function() {
         application.goToSearch();
         expect(browser.getTitle()).toContain('Search');                
   });

    it('should display Pay my Bill Page', function() {
         application.gotToBillPayPage();
         expect(browser.getTitle()).toContain('ePaybill');
   });

   it('should error for Pay my Bill with invalid credentials', function() {
         application.gotToInvalidBillPayLogin();
         var providerLoginErrMsg = element(by.css('p.alert'));
         expect(providerLoginErrMsg.getText()).toEqual('Sorry, but this login and password can not be located in the system. Please try again. (VL00001)');                 
   });   
     
});