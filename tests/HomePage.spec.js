//! Verify the title and URL of the Home Page is accurate or not

//! Test is required to create our test
//! Expect is required to add validations for the test

const { test, expect } = require("@playwright/test");

//! test block > first parameter will be the title of the test & second parameter will be the anonymous function
//! whenver we create anonymous function  we have to pass a fixture called page
//! Fixture means which can contain so many functions and through them we can automate web application suppose with interaction with some element or if you want to click on element, get the text from the page
//! Async keyword will make the function written the promise and await keyword will make the function wait for the promise
test("Home Page", async ({ page }) => {
  //! open application/ url on browser
  await page.goto("https://demoblaze.com/index.html");
  let pageTitle = await page.title();
  console.log("==page title", pageTitle);
  //! Verifying the title of the page
  await expect(page).toHaveTitle("STORE");

  //! Capture into varaible
  let pageURL = await page.url();
  console.log(pageURL, "pageURL");

  //! Verifying the URL of the page.
  await expect(page).toHaveURL("https://demoblaze.com/index.html");
});
