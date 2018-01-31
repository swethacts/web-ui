var Application = require('./page/page-regression-RBC.js');

describe('RBC Royal Bank application', function() {
	var application = new Application();
   beforeEach(function() {
	   
   });
   
   
   it('should display HOME Page', function() {
         application.gotToHome();
         expect(browser.getTitle()).toContain('Business Banking - RBC Royal Bank');
   });

   it('should display Bank Accounts Page', function() {
         application.gotToAccounts();       
         expect(browser.getTitle()).toContain('Business Accounts');
   });

   it('should display Credit Cards Page', function() {
         application.gotToCreditCards();       
         expect(browser.getTitle()).toContain('Business Credit Cards');
   });

   it('should display Loans Page', function() {
         application.goToLoans();       
         expect(browser.getTitle()).toContain('Business Loans and Lines of Credit');
   });

   it('should display Paying & Receiving Page', function() {
         application.goToPayingReceiving();       
         expect(browser.getTitle()).toContain('Paying and Receiving');
   });

   it('should display Business Advice Page', function() {
         application.goToBusinessAdvice();       
         expect(browser.getTitle()).toContain('Business Advice');
   });

    it('should display error for Invalid Sign in', function() {
         application.goToSignIn();
         var memberLoginErrMsg = element(by.css('div.redMessage'));
         expect(memberLoginErrMsg.getText()).toContain("Something doesn't seem right");
         
   });
     
});