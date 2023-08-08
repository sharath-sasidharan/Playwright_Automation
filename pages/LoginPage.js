exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.login_menu_link = "//a[@id='login2']";
    this.usernameInput = "//input[@id='loginusername']";
    this.passwordInput = "//input[@id='loginpassword']";
    this.loginBtn = "//button[normalize-space()='Log in']";
  }

  // Method to launch the application

  async goToLoginPage() {
    await this.page.goto("https://demoblaze.com/index.html");
  }

  //Method to Click on the Login link
  async login() {
    await this.page.locator(this.login_menu_link).click();
  }

  //Method to input the username and password

  async addLoginDetails(username, password) {
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
  }

  // Method to click on the login button
  async clickLoginButton() {
    await this.page.locator(this.loginBtn).click();
  }
};
