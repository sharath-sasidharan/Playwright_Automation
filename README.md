# Playwright_Automation Scripts 🎭

<h2> npx playwright test</h2>

<b>Execute all the tests on all the browsers in the `headless mode`</b>

<h2>Runs a specific test file : myTest.spec.js</h2>

<b>`npx playwright test HomePage.spec.js --headed`</b>

<h2>Execute this test case only on chrome by using --project=chromium</h2>

<b>`npx playwright test HomePage.spec.js --project=chromium`</b> 

<h2> Execute the test case in the headed mode</h2>

<b>`npx playwright test HomePage.spec.js --headed`</b>

<h2>Execute test cases in debug mode by this it will open `playwright inspector` along with `browser`</h2>

<b>`npx playwright test HomePage.spec.js --project=chromium --headed --debug`</b>

<h2>Locating Elements in playwright</h2>

<h3>3 Ways : </h3>

<ol>
  <li>Property</li>
   <li>CSS</li>
   <li>Xpath</li>
</ol>


<h2>Links/buttons use click() method </h2>
  
<b>`page.click("locator")`<b>

<h2>For Inputs and to pass the value to input field use fill() method</h2> 

<b>`page.fill("locator",value)`<b>

<h2>Locate multiple web elements</h2> 

<b>const elements = `await page.$$("locator")`</b>


<h2>Built-In locators </h2> 

1. page.getByAltText() - to locate an element, usually image, by its text alternative
2. page.getByPlaceholder()- to locate an input by placeholder
3. page.getByRole()- to locate by explicit and implicit accessibility attributes.
4. page.getByText() - to locate by text content
5. page.getByLabel() - to locate a form control by associated label's text
6. page.getByTitle() - to locate an element by its title attribute
7. page.getByTestId()- to locate an element based on its data-testid attribute


<h2> Record scripts using Test Runner with <b>codegen</b> </h2>
<b>`npx playwright codgen`</b> : this script will open the playwright inspector along with browser

<h2> saves the generated script to a file</h2>

<b> `npx playwright codegen -o tests/myTest.spec.js` </b> : saves the generated script to a file

<h2>Execute test scripts in specific device</h2>

`npx playwright codegen --device 'Iphone SE'`

<h2>Execute test scripts in certain viewport dimensions</h2>

`npx playwright codegen --viewport-size "1280,720" `

<h1>Assertions has 2 types : Hard Assertions V/s Soft Assertions</h1>
<h2>Hard Assertions : if fails it terminates the script won't execute further scripts</h2>

1. `expect(page).toHaveURL()`             : Page has URL
2. `expect(page).toHaveTitleL()`          : Page has title
3. `expect(locator).toBeVisible()`        : Element is Visible
4. `expect(locator).toBeEnabled()`        : Emenent is enabled
5. `expect(locator).toBeDisabled()`       : Element is disabled
6. `expect(locator).toBeChecked()`        : Radio/Checkbox is checked
7. `expect(locator).toHaveAttribute()`    : Element has attribute
8. `expect(locator).toHaveText()`         : Element matched text
9. `expect(locator).toContainText()`      : Element contains text
10. `expect(locator).toHaveValue(value)`   : Input has a value
11. `expect(locator).toHaveCount()`        : List of elements has given length

<h2> Soft Assertions </h2>

<b>`await expect.soft(page)`</b> 


<h2>Multiple ways to select the options from the dropdown</h2>

** 1.  await page.locator('#country_1665629257').selectOption({label: 'Afghanistan'})**            : //label/  visible text
**  2.  await page.locator('#country_1665629257').selectOption('India')                           : //visible text
**  3.  await page.locator('#country_1665629257').selectOption({value:"india"})                   : // by using value
**  4. await page.locator('#country_1665629257').selectOption({index:2})                          : // by using index 


<h2>1. check number of options in dropdown </h2>

<b>`await expect(await page.locator("#country_1665629257 option")).toHaveCount(249)`</b> 

<h2>Check number of options in dropdown/ validate the length of the options in the dropdown</h2>
<b>const options = await page.$$('#country_1665629257 option')</b>

<b>`await expect(options.length).toBe('number')`</b>



<h2>check presence of value/options in the dropdown [For eg. India is present in the dropdown or not]</h2>
<b>const options__present = await page.locator('#country_1665629257').textContent()</b>

//Assertions - <b>`await expect(options__present.includes('India')).toBeTruthy()`</b>




<h2>Dialogs :</h2>

<p>Basically there are 3 types of Alerts  : Playwright can interact with the web page dialogs such as alert, confirm, prompt confirmation. </p>
<p>dialogs are auto-dismissed by Playwright, so you don't have to handle them. However, you can register a dialog handler before the action that triggers the dialog to either dialog.accept() or dialog.dismiss() it</p>


<p>Before clicking the event, we need to register the dialog </p>

For alert()

**Enabling Dialog window handler**

     page.on("dialog", async dialog =>{
        await expect(dialog.type()).toContain("alert")
        await expect (dialog.message()).toContain("I am an alert box!")
        await dialog.accept() // close by using OK button

    })




