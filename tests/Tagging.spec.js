const { test } = require("@playwright/test");

test("test 1@sanity", async ({ page }) => {
  console.log("this is the test 1");
});

test("test 2@sanity", async ({ page }) => {
  console.log("this is the test 2");
});
test("test 3@reg", async ({ page }) => {
  console.log("this is the test 3");
});
test("test 4@sanity@reg", async ({ page }) => {
  console.log("this is the test 4");
});
