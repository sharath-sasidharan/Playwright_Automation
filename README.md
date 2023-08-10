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

For `alert`

**Enabling Dialog window handler**
```
     page.on("dialog", async dialog =>{
        await expect(dialog.type()).toContain("alert")
        await expect (dialog.message()).toContain("I am an alert box!")
        await dialog.accept() // close by using OK button
    })

//Click the event
await page.click("//button[normalize-space()='Alert']")


For `Confirm`


page.on("dialog", async dialog =>{
        await expect(dialog.type()).toContain("confirm")
        await expect (dialog.message()).toContain("Press a button!")
        // await dialog.accept() // close by using OK button
        await dialog.dismiss() // close by using Cancel button
    })

//Click the event
    await page.locator("//button[normalize-space()='Confirm Box']").click()


For `Prompt`


 page.on("dialog", async dialog =>{
        await expect(dialog.type()).toContain("prompt")
        await expect (dialog.message()).toContain("Please enter your name:")
        await expect(dialog.defaultValue()).toContain("Harry Potter")
        await dialog.accept('Sarath') // close by using OK button
    })

//Click the event
   await page.locator("//button[normalize-space()='Prompt']").click()

```
    
<h2>Page Object MODEL</h2>

```1. <p>Page object model is a pattern or framework in which we will maintain all the page elements and methods in one class a separate class</p>```

```2. So if we have multiple pages in our application we will create multiple page object classes also we have created a separate folder <b>Pages</b>  in that we will create multiple pages```

### Pages 


```
exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.login_menu_link = "//a[@id='login2']";
    this.usernameInput = "//input[@id='loginusername']";
    this.passwordInput = "//input[@id='loginpassword']";
    this.loginBtn = "//button[normalize-space()='Log in']";
  }

  // Method to launch the application

  async goToLoginPage() {
    await this.page.goto("https://demoblaze.com/index.html");
  }

  //Method to Click on the Login link
  async login() {
    await this.page.locator(this.login_menu_link).click();
  }

  //Method to input the username and password

  async addLoginDetails(username, password) {
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
  }

  // Method to click on the login button
  async clickLoginButton() {
    await this.page.locator(this.loginBtn).click();
  }
};

```

### pom.spec.js

```
import { LoginPage } from "../pages/LoginPage";

test("Page Object Model", async ({ page }) => {

  //Login Page
  const login = new LoginPage(page);
  await login.goToLoginPage();
  await login.login();
  await login.addLoginDetails("test", "test");
  await login.clickLoginButton();
  await page.waitForTimeout(3000);

```




<h2>Grouping Test : Describe block</h2>
<p>Execute two test by grouping into one block using describe</p>

```
test.describe("Group 1", () => {
  test("test 1", async ({ page }) => {
    console.log("this is the test 1");
  });

  test("test 2", async ({ page }) => {
    console.log("this is the test 2");
  });
})

```

<h2>Record Videos of execution of test scripts</h2>
<p>For this changes need to be done in config file, it will create directory named test-results based on value set to video key in config file, there are mainly 3 options - on/ off/ retain-on-failure  </p>

```
  use: {
    video: "retain-on-failure",
  },
```

<h2>Tagging</h2>

<p>Sometimes you want to tag your tests as @fast or @slow and only run the tests that have the certain tag. We recommend that you use the --grep and --grep-invert command line flags for that:</p>

```
test("test 1@sanity", async ({ page }) => {
  console.log("this is the test 1");
});

test("test 2@sanity", async ({ page }) => {
  console.log("this is the test 2");
});
test("test 3@reg", async ({ page }) => {
  console.log("this is the test 3");
});
test("test 4@sanity@reg", async ({ page }) => {
  console.log("this is the test 4");
});


- npx playwright test --grep @sanity : will execute only sanity tags
- npx playwright test --grep @sanity : will execute only reg tags
- npx playwright test --grep @sanity@reg : will execute only sanity & reg tags
 - npx playwright test --grep @sanity --grep-invert @reg : will execute only sanity tags and ignore @reg tags
```


<h1>Hooks</h1>
<p>playwright provides 4 types of Hooks : beforeEach()/ afterEach()/ beforeAll/ afterAll()</p>

```
1. beforeEach() - it will execute multiple times before each individual test
2. afterEach()  -  it will execute multiple times after each individual test
3. beforeAll()  -  it will execute once before starting all test
4. afterAll()   -    it will execute once after completion all test
```
<p> It won't accept page fixture but if you want to create page instance we have to get first browser fixture from that browser we have to create a page fixture</p>

<h1>Reporters</h1>

```
<p>Playwright provides some built-in reporters </p>

1. Line
2. dot
3. html
4. json
5. junit

<p> 2 options can use this above options to be seen</p>
In playwright config.js file

reporter : 'dot/html/line' --anyone
reporter : [["json",outputFile:"results.json"]]

// multiple reporters to be generate
reporter:[["html"],["dot"],["line"],["json",outputFile:"results.json"],["junit",outputFile:"results.xml"]]

OR

// Using command line Interface

--reporter='html'
```



