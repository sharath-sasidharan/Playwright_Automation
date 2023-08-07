const { test, expect } = require("@playwright/test");

test("Input Assertions", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Register.html");

  await expect(
    page.locator("//input[@placeholder='First Name']")
  ).toBeVisible();
  await expect(page.locator("//input[@placeholder='First Name']")).toBeEmpty();
  await expect(
    page.locator("//input[@placeholder='First Name']")
  ).toBeEditable();
  await expect(
    page.locator("//input[@placeholder='First Name']")
  ).toBeEnabled();

  await page.fill("//input[@placeholder='First Name']", "Steven");

  await page.waitForTimeout(5000);
});
