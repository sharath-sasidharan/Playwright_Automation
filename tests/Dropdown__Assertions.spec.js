const {test,expect} = require('@playwright/test');


test('Dropdown Assertions',async({page})=>{
    await page.goto(
        "https://demo.wpeverest.com/user-registration/guest-registration-form/"
      );

     //! Multiple ways to select the options from the dropdown
      await page.locator('#country_1665629257').selectOption({label: 'Afghanistan'}) //label/  visible text
      await page.locator('#country_1665629257').selectOption('India') //visible text
      await page.locator('#country_1665629257').selectOption({value:"india"}) // by using value
      await page.locator('#country_1665629257').selectOption({index:2}) // by using index 
     
     //Assertions
    //  1. check number of options in dropdown - Approach 1
     await expect(await page.locator("#country_1665629257 option")).toHaveCount(249)
     
      // 2. Check number of options in dropdown - Approach 2
     const options = await page.$$('#country_1665629257 option')
     await expect(options.length).toBe(249)


      // 3. check presence of value in the dropdown [For eg. India is present in the dropdown or not]
     const options__present = await page.locator('#country_1665629257').textContent();
      await expect(options__present.includes('Zimbabwe')).toBeTruthy()

     //4. Presence of value in the dropdown  - Approach 2  using looping

     const options__present_loop = await page.$$('#country_1665629257')
     let status = false;

     for(let option of options__present_loop) {
        let value = await option.textContent()
        if(value.includes('Morocco')){
              status= true;
              break;
        }

     }
 
     await expect(status).toBeTruthy()


     // Select options from dropdown using loop

     const options__present_loop1 = await page.$$('#country_1665629257 option')

     for(let option of options__present_loop1) {
        let value = await option.textContent()
        if(value.includes('Morocco')){
            await page.selectOption('#country_1665629257', value)
            break;
        }
     }

      await page.waitForTimeout(5000)

})