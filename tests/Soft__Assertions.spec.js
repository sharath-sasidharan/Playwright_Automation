const { test, expect } = require("@playwright/test");

/*
test("Hard Assertions", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Register.html");
  await expect(page).toHaveTitle("Register123");
  await expect(page).toHaveURL(
    "https://demo.automationtesting.in/Register.html"
  );
  await page.waitForTimeout(5000);
});
*/

test("Soft Assertions", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Register.html");
  await expect.soft(page).toHaveTitle("Register123");
  await expect
    .soft(page)
    .toHaveURL("https://demo.automationtesting.in/Register.html");
  await page.waitForTimeout(5000);
});
