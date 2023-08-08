exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;

    this.productList = "//div[@id='tbodyid']/div/div/div/h4/a";
    this.addToCartBtn = "//a[normalize-space()='Add to cart']";
    this.cartLink = "//a[@id='cartur']";
  }

  // Method to create from the product list click on any product

  async addProductToCart(productName) {
    const productList = await this.page.$$(this.productList);
    for (const product of productList) {
      if (productName == (await product.textContent())) {
        await product.click();
        break;
      }
    }

    await this.page.on("dialog", async (dialog) => {
      if (dialog.message().includes("added")) {
        await dialog.accept();
      }
    });
    await this.page.locator(this.addToCartBtn).click();
  }

  // Method to create to cart link
  async goToCartLink() {
    await this.page.locator(this.cartLink).click();
  }
};
