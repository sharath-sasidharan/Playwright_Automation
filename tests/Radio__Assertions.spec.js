const { test, expect } = require("@playwright/test");

test("Input Assertions", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Register.html");

  await page.locator("//label[normalize-space()='Male']").check();

  await expect(
    await page.locator("//label[normalize-space()='Male']").isChecked()
  ).toBeTruthy();

  await page.locator("//label[normalize-space()='FeMale']");
  await expect(
    await page.locator("//label[normalize-space()='FeMale']").isChecked()
  ).toBeFalsy();

  await await page.waitForTimeout(5000);
});
