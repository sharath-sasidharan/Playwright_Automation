const {test,expect} = require('@playwright/test')


test.skip("Dialogs - Alert with Ok ",async({page})=>{
  
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Enabling Dialog window handler

     page.on("dialog", async dialog =>{
        await expect(dialog.type()).toContain("alert")
        await expect (dialog.message()).toContain("I am an alert box!")
        await dialog.accept() // close by using OK button

    })

    await page.click("//button[normalize-space()='Alert']")
    
    await page.waitForTimeout(5000)

})



test.skip("Confirmation Dialogs - Alert with Ok and cancel ",async({page})=>{
  
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Enabling Dialog window handler

    page.on("dialog", async dialog =>{
        await expect(dialog.type()).toContain("confirm")
        await expect (dialog.message()).toContain("Press a button!")
        // await dialog.accept() // close by using OK button
        await dialog.dismiss() // close by using Cancel button
    })

    await page.locator("//button[normalize-space()='Confirm Box']").click()
})

test.only("Prompt Dialogs ",async({page})=>{
  
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Enabling Dialog window handler

    page.on("dialog", async dialog =>{
        await expect(dialog.type()).toContain("prompt")
        await expect (dialog.message()).toContain("Please enter your name:")
        await expect(dialog.defaultValue()).toContain("Harry Potter")
        await dialog.accept('Sarath') // close by using OK button
    })

    await page.locator("//button[normalize-space()='Prompt']").click()


    await page.waitForTimeout(5000)
})
