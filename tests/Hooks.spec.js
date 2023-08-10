const { test, expect } = require("@playwright/test");

let page;
test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();

  //Login
  await page.goto("https://demoblaze.com/index.html");
  await page.click("#login2");
  await page.locator("#loginusername").type("test");
  await page.locator("#loginpassword").type("test");
  await page.locator("//button[normalize-space()='Log in']").click();
});

//Logout
test.afterEach(async () => {
  await page.click("//button[normalize-space()='Log in']");
});

test("Home", async () => {
  await expect(await page.locator("#logout2")).toContainText("Log out");
});

test.beforeAll(async () => {});

test.afterAll(async () => {});
