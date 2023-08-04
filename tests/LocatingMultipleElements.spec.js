const { test, expect } = require("@playwright/test");

test("Locator multiple elements", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");

  // capture all the links on the page

  const links = await page.$$("a");
  for (const link of links) {
    const linkText = await link.textContent();
  }
  await page.close();
});

test("List Products", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");
  // this method wait for selector to load first
  await page.waitForSelector("//div[@id='tbodyid']//h4//a");
  const products = await page.$$("//div[@id='tbodyid']//h4//a");
  for (const product of products) {
    let productNames = await product.textContent();
  }
});
