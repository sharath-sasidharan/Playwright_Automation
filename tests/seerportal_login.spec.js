const { test, expect } = require("@playwright/test");

test("Seerportal", async ({ page }) => {
  await page.goto("https://dev.dataseers.in/");

  //! Validating the error pop-up message after when we input invalid username
  await page.locator("#email").fill("ssasidhaaran@dataseers.in");
  await page.click('button[type = "submit"]');
  const messageError = await page.locator(
    "//div[@class='ant-message-custom-content ant-message-error']"
  );
  await expect(messageError).toHaveText("You have entered an invalid username");
  await page.waitForTimeout(5000);
});
