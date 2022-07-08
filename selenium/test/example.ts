import { assert } from 'chai';
const {Builder, By} = require('selenium-webdriver');



describe('first selenium test - navigate to google homepage', () => {
    it('should navigate to google homepage and get title', async () => {
        let driver = await new Builder().forBrowser('chrome').build();

        await driver.get('https://www.google.com');
    
        const title = await driver.getTitle();
        console.log(title);
    
        await driver.manage().setTimeouts({implicit: 1000})
    
        let searchBox = await driver.findElement(By.name('q'));
        let searchButton = await driver.findElement(By.name('btnK'));
    
        // await searchBox.sendKeys('Selenium');
        // await searchButton.click();
    
        //let value = await searchBox.getAttribute("value");
        assert.strictEqual(title, "Google");
        await driver.quit();
    })
})