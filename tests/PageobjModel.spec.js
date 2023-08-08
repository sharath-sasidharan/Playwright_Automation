const { test, expect } = require("@playwright/test");
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";

test("Page Object Model", async ({ page }) => {
  //Login Page
  const login = new LoginPage(page);
  await login.goToLoginPage();
  await login.login();
  await login.addLoginDetails("test", "test");
  await login.clickLoginButton();
  await page.waitForTimeout(3000);

  // Home Page
  const home = new HomePage(page);
  await home.addProductToCart("Nokia lumia 1520");
  await page.waitForTimeout(3000);
  await home.goToCartLink();
  await page.waitForTimeout(3000);
});
