const { test, expect } = require("@playwright/test");

/*
expect(page).toHaveURL() : Page has URL
expect(page).toHaveTitleL() : Page has title
expect(locator).toBeVisible() : Element is Visible
expect(locator).toBeEnabled() : Emenent is enabled
expect(locator).toBeDisabled() : Element is disabled
expect(locator).toBeChecked() : Radio/Checkbox is checked
expect(locator).toHaveAttribute() : Element has attribute
expect(locator).toHaveText() : Element matched text
expect(locator).toContainText() : Element contains text
expect(locator).toHaveValue(value) : Input has a value
expect(locator).toHaveCount() : List of elements has given length
 */

test("Assertions Test", async ({ page }) => {
  // 1.  Launch the Application
  await page.goto(
    "https://demo.wpeverest.com/user-registration/guest-registration-form/"
  );

  //2. Valdate the URL
  await expect(page).toHaveURL(
    "https://demo.wpeverest.com/user-registration/guest-registration-form/"
  );

  //3. Valitdate the Title
  await expect(page).toHaveTitle("Guest Registration Form – User Registration");

  //4. Validate the logo is visible
  const heading__title = await page.locator(".tg-page-header__title");
  await expect(heading__title).toBeVisible("Guest Registration Form");

  //5.   Validate the element is enabled
  const first_name = await page.locator("#first_name");
  await first_name.fill("steven");
  await expect(first_name).toBeEnabled();

  //6. Validate the Element is checked
  const MaleRadioChecked = await page.locator("#radio_1665627729_Male");
  await MaleRadioChecked.click();
  await expect(MaleRadioChecked).toBeChecked();

  //7. Validate the Element has attribute
  const email__checker = await page.locator("#user_email");
  await expect(email__checker).toHaveAttribute("data-label", "User Email");

  //8 Validate the Text matches exact same
  const text__checker = await page.locator(
    "//h2[normalize-space()='User Registration All Demos']"
  );
  await expect(text__checker).toHaveText("User Registration All Demos");

  //8 Validate the Text contains partial match

  const text__partial_checker = await page.locator(
    "//h2[normalize-space()='User Registration All Demos']"
  );
  await expect(text__partial_checker).toContainText("User Registration");

  //9 Validate the dropdowns counts
  const dropdown__value_count = await page.locator(
    "#country_1665629257 option"
  );
  await expect(dropdown__value_count).toHaveCount(249);
});
