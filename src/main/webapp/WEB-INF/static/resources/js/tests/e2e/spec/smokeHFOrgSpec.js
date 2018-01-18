var Application = require('./page/page-smokeHFOrg.js');

describe('HealthFirst Org app', function() {
	var application = new Application();
   beforeEach(function() {
	   
   });
   
   it('should display HOME Page', function() {
         application.gotToHome();
         expect(browser.getTitle()).toContain('Healthfirst');
   });

   it('should display Privacy Notices Page', function() {
         application.gotToPrivacyNotices();       
         expect(browser.getTitle()).toContain('Privacy Notices');
   });

   it('should display Sitemap Page', function() {
         application.goToSitemap();       
         expect(browser.getTitle()).toContain('Sitemap');
   });

   it('should display Glossary Page', function() {
         application.gotToGlossary();       
         expect(browser.getTitle()).toContain('Glossary');
   });   

   it('should display Contact Us Page', function() {
         application.goToContactUs();       
         expect(browser.getTitle()).toContain('Contact Healthfirst');
   });

   it('should display About us Page', function() {
         application.goToAboutus();       
         expect(browser.getTitle()).toContain('About Healthfirst');
   });

   it('should display Careers Page', function() {
         application.goToCareers();       
         expect(browser.getTitle()).toContain('Healthfirst New Jobs');
   });
     
});