import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://demoblaze.com/");
  await page.getByRole("link", { name: "Log in" }).click();
  await page.locator("#loginusername").click();
  await page.locator("#loginusername").fill("test");
  await page.locator("#loginpassword").click();
  await page.locator("#loginpassword").fill("test");
  await page.getByRole("button", { name: "Log in" }).click();
  await page.getByRole("link", { name: "Welcome test" }).click();
  await page.getByRole("link", { name: "Log out" }).click();
});
