const { test, expect } = require("@playwright/test");

test("Test1", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");

  await expect(page).toHaveTitle("STORE");
});

test("Test2", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await expect(page).toHaveTitle("OrangeHRM");
});

test("Test3", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(
    "Fast and reliable end-to-end testing for modern web apps | Playwright"
  );
});
