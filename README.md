# Playwright_Automation Scripts 🎭

# npx playwright test
<b>Execute all the tests on all the browsers in the headless mode</b>

# Runs a specific test file : myTest.spec.js
<b>npx playwright test HomePage.spec.js --headed</b>


# Execute this test case only on chrome by using --project=chromium
<b>npx playwright test HomePage.spec.js --project=chromium</b> 

# Execute the test case in the headed mode
<b>npx playwright test HomePage.spec.js --headed</b>

# Execute test cases in debug mode by this it will open `playwright inspector` along with `browser`
<b>npx playwright test HomePage.spec.js --project=chromium --headed --debug</b>


# Locating Elements in playwright

<h2>3 Ways : </h2>

<ol>
  <li>Property</li>
   <li>CSS</li>
   <li>Xpath</li>
</ol>


# Links/buttons use click() method
<b>page.click("locator")<b>

# For Inputs and to pass the value to input field use fill() method
<b>page.fill("locator",value)<b>

# Locate multiple web elements

<b>const elements = await page.$$("locator")</b>


# Built-In locators 

1. page.getByAltText() - to locate an element, usually image, by its text alternative
2. page.getByPlaceholder()- to locate an input by placeholder
3. page.getByRole()- to locate by explicit and implicit accessibility attributes.
4. page.getByText() - to locate by text content
5. page.getByLabel() - to locate a form control by associated label's text
6. page.getByTitle() - to locate an element by its title attribute
7. page.getByTestId()- to locate an element based on its data-testid attribute





