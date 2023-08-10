const { test, expect } = require("@playwright/test");

let userId;
//Get
test("Get Request", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users?page=2");
  expect(response.status()).toBe(200);
});
//Post
test("Post Request", async ({ request }) => {
  const response = await request.post("https://reqres.in/api/users", {
    data: {
      name: "steven",
      role: "QA",
    },
    headers: {
      Accept: "application/json",
    },
  });
  let res = await response.json();
  userId = res.id;
  expect(response.status()).toBe(201);
});
//Put
test("Put Request", async ({ request }) => {
  const response = await request.post(`https://reqres.in/api/users/${userId}`, {
    data: {
      name: "steven",
      role: "Dev",
    },
    headers: {
      Accept: "application/json",
    },
  });

  expect(response.status()).toBe(201);
});
//Delete

test("Delete Request", async ({ request }) => {
  const response = await request.delete(
    `https://reqres.in/api/users/${userId}`
  );

  expect(response.status()).toBe(204);
});
