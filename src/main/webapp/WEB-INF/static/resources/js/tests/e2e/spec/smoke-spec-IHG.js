var Application = require('./page/page-smoke-IHG.js');

describe('IHG application', function() {
	var application = new Application();
   beforeEach(function() {

   });

   it('should display HOME Page on Mobile Device', function() {
         application.gotToHome();
         expect(browser.getTitle()).toContain('IHG');
   });

   it('should display Select a Hotel Page on Mobile Device', function() {
         application.gotToSearch();
         expect(browser.getTitle()).toContain('Select a Hotel');
   });
});
