const { test, expect } = require("@playwright/test");

test("Locators Built-In Tests", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  const imageValidator = await page.getByAltText("company-branding");
  await expect(imageValidator).toBeVisible();

  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");

  await page.getByRole("button", { type: "submit" }).click();

  //! Dynamic name capture after login success
  const name = await page
    .locator("//p[@class='oxd-userdropdown-name']")
    .textContent();
  console.log(name, "name");
  await expect(await page.getByText(name)).toBeVisible();

  // await expect(await page.getByText("Paul Collings")).toBeVisible();
});
