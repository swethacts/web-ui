var Application = require('./page/page-smoke-RBC.js');

describe('HealthFirst Org app', function() {
	var application = new Application();
   beforeEach(function() {
	   
   });
   
   it('should display HOME Page', function() {
         application.gotToHome();
         expect(browser.getTitle()).toContain('Personal Banking - RBC Royal Bank');
   });

   it('should display Bank Accounts Page', function() {
         application.gotToAccounts();       
         expect(browser.getTitle()).toContain('Bank Accounts');
   });

   it('should display Credit Cards Page', function() {
         application.gotToCreditCards();       
         expect(browser.getTitle()).toContain('Credit Cards');
   });

   it('should display Mortgages Page', function() {
         application.goToMortgages();       
         expect(browser.getTitle()).toContain('Mortgages');
   });   

   it('should display Loans Page', function() {
         application.goToLoans();       
         expect(browser.getTitle()).toContain('Lines of Credit and Loans');
   });

   it('should display Ways to Bank Page', function() {
         application.goToWaysToBank();       
         expect(browser.getTitle()).toContain('Ways to Bank');
   });

   it('should display About Us Page', function() {
         application.goToAboutRBC();       
         expect(browser.getTitle()).toContain('AboutUS');
   });
     
});