import { test, expect } from "@playwright/test";

//Grouping Tests : Describe Block

test.describe("Group 1", () => {
  test("test 1", async ({ page }) => {
    console.log("this is the test 1");
  });

  test("test 2", async ({ page }) => {
    console.log("this is the test 2");
  });
});

test.describe("Group 2", () => {
  test("test 3", async ({ page }) => {
    console.log("this is the test 3");
  });

  test("test 4", async ({ page }) => {
    console.log("this is the test 4");
  });
});
