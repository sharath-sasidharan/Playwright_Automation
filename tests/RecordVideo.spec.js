const { test, expect } = require("@playwright/test");

test("Locators", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");

  await page.click("id=login2");
  await page.fill("#loginusername", "test");
  await page.fill("#loginpassword", "test");
  await page.click("//button[normalize-space()='Log in']");

  await expect(await page.locator("#logout2")).toBeVisible();
});
