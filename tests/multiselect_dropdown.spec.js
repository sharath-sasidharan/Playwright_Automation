const { test, expect } = require("@playwright/test");

test("Multi Select Dropdown", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Register.html");

  await page.selectOption("#Skills", ["Analytics", "APIs", "AutoCAD"]);

  //! Assertions
  //1. Check the Number of options in the dropdown
  const options = await page.locator("#Skills option");
  await expect(options).toHaveCount(78);

  //2. Check the Number of options in the dropdown using JS Array : Check the length of the options in the dropdown

  const options_length = await page.$$("#Skills option");
  await expect(options_length.length).toBe(78);

  //3 check the presence of the number of options in the dropdown
  const options_exist = await page.locator("#Skills").textContent();
  await expect(options_exist.includes("Adobe Photoshop")).toBeTruthy();

  await page.waitForTimeout(5000);
});
