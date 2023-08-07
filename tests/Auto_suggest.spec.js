const { test, expect } = require("@playwright/test");

test("Auto Suggest", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.locator("#APjFqb").fill("playwright automation");
  await page.waitForSelector(
    "//li[contains(@class,'sbct')]/div/div/div/div/span"
  );
  const elements = await page.$$(
    "//li[contains(@class,'sbct')]/div/div/div/div/span"
  );

  for (const element of elements) {
    const text = await element.textContent();
    if (text.includes("salary")) {
      await element.click();
      break;
    }
  }

  await page.waitForTimeout(5000);
});

// //! Redbus 🚌

test("Auto Suggest - 2", async ({ page }) => {
  await page.goto("https://www.redbus.in/");
  await page.locator("#src").fill("thane");
  await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");
  const elements = await page.$$(
    "//li[contains(@class,'sc-iwsKbI')]/div/text[1]"
  );

  for (const element of elements) {
    const text = await element.textContent();
    if (text.includes("Ghodbandar (Thane)")) {
      await element.click();
      break;
    }
  }

  await page.waitForTimeout(5000);
});
