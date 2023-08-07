const { test, expect } = require("@playwright/test");

test("Input Assertions", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Register.html");

  //   single checkbox select

  await page.locator("//input[@type='checkbox' and @id='checkbox1']").check();

  await expect(
    await page.locator("//input[@type='checkbox' and @id='checkbox1']")
  ).toBeChecked();

  await expect(
    await page
      .locator("//input[@type='checkbox' and @id='checkbox1']")
      .isChecked()
  ).toBeTruthy();
  await await page.waitForTimeout(5000);

  //Multiple checkbox select

  const multiple_checkboxes_locators = [
    "//input[@type='checkbox' and @id='checkbox1']",
    "//input[@type='checkbox' and @id='checkbox2']",
    "//input[@type='checkbox' and @id='checkbox3']",
  ];

  for (let locator of multiple_checkboxes_locators) {
    await page.locator(locator).check();
  }

  for (let locator of multiple_checkboxes_locators) {
    if (await page.locator(locator).isChecked()) {
      await page.locator(locator).uncheck();
    }
  }

  await page.waitForTimeout(5000);
});
