var Application = require('./page/page-smoke-RBC.js');

describe('IHG application', function() {
	var application = new Application();
   beforeEach(function() {

   });

   it('should display HOME Page', function() {
         application.gotToHome();
         expect(browser.getTitle()).toContain('IHG');
   });

   it('should display Select a Hotel Page', function() {
         application.gotToSearch();
         expect(browser.getTitle()).toContain('Select a Hotel');
   });
});
