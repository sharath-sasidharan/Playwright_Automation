const { test, expect } = require("@playwright/test");

test("Hidden Dropdown", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await page.locator('[name="username"]').fill("Admin");
  await page.locator('[name="password"]').fill("admin123");
  await page.locator(`[type="submit"]`).click();

  await page.locator("//span[normalize-space()='PIM']").click();

  await page.locator("form i").nth(2).click();

  await page.waitForSelector('//div[@role="listbox"]/div/span');

  const elements = await page.$$('//div[@role="listbox"]/div/span');

  for (let element of elements) {
    let text = await element.textContent();
    if (text.includes("QA Engineer")) {
      await element.click();
    }
  }

  await page.waitForTimeout(5000);
});
