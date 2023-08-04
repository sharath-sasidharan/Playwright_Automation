const { test, expect } = require("@playwright/test");

test("Locators", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");

  // Click on the login button

  await page.click("id=login2");
  // provide value for username && password
  await page.fill("#loginusername", "test");
  await page.fill("#loginpassword", "test");
  //click on login button
  await page.click("//button[normalize-space()='Log in']");

  // After login success log out button is visible or not on the UI

  let logoutVisible = await page.locator("#logout2");
  await expect(logoutVisible).toBeVisible("Log out");
  await page.close();
});
