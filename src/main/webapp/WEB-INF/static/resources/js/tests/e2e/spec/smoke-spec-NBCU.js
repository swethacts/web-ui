var Application = require('./page/page-smoke-NBCU.js');

describe('NBCUniversal application', function() {
	var application = new Application();
   beforeEach(function() {

   });

   it('should display HOME Page', function() {
         application.gotToHome();
         expect(browser.getTitle()).toContain('NBCUniversal');
   });

   it('should display WHO WE ARE Page', function() {
         application.gotToWhoWeAre();
         expect(browser.getTitle()).toContain('Who We Are');
   });

   it('should display OUR HISTORY Page', function() {
         application.gotToOurHistory();
         expect(browser.getTitle()).toContain('Our History');
   });

   it('should display NEWSROOM Page', function() {
         application.goToNewsroom();
         expect(browser.getTitle()).toContain('Newsroom');
   });

   it('should display VALUES Page', function() {
         application.goToValues();
         expect(browser.getTitle()).toContain('Values');
   });

   it('should display CAREERS Page', function() {
         application.goToCareers();
         expect(browser.getTitle()).toContain('Careers');
   });

   it('should display Businesses Page', function() {
         application.goToBusinesses();
         expect(browser.getTitle()).toContain('About Us'); //NBCUniversal
   });

});
