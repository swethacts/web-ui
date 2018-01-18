var Application = require('./page/page-integrationHFOrg.js');

describe('HealthFirst Org app', function() {
	var application = new Application();
   beforeEach(function() {
	   
   });
   
   it('should load HOME Page', function() {
         application.gotToHome();
         expect(browser.getTitle()).toContain('Healthfirst');
   });

  
  it('should load Member Login Page', function() {
         application.gotToMemberLogin();
         expect(browser.getTitle()).toContain('Healthfirst Member');
   });

   it('shows error message for Member Login with invalid username or password', function() {
         application.gotToInvalidMemberLogin();
         var memberLoginErrMsg = element(by.css('div.loginMessage.errorMessage'));
         expect(memberLoginErrMsg.getText()).toEqual('Login Failed.');                 
   });

    it('should load Provider Login Page', function() {
         application.gotToProviderLogin();
         expect(browser.getTitle()).toContain('Healthfirst Provider');
   });

   it('shows error message for Provider Login with invalid username or password', function() {
         application.gotToInvalidProviderLogin();
         var providerLoginErrMsg = element(by.id('ctl00_MainContent_uxMessageLabel'));
         expect(providerLoginErrMsg.getText()).toEqual('Login Failed.');                 
   });
   
   it('should search successfully with keyword entered', function() {
         application.goToSearch();
         expect(browser.getTitle()).toContain('Search');                
   });

    it('should load Pay my Bill Page', function() {
         application.gotToBillPayPage();
         expect(browser.getTitle()).toContain('ePaybill');
   });

   it('shows error message for Pay my Bill Login with invalid username or password', function() {
         application.gotToInvalidBillPayLogin();
         var providerLoginErrMsg = element(by.css('p.alert'));
         expect(providerLoginErrMsg.getText()).toEqual('Sorry, but this login and password can not be located in the system. Please try again. (VL1)');                 
   });   
     
});