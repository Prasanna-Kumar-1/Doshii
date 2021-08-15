import { Selector, t } from "testcafe";

class signInPage {
  async acceptCookies() {
    await t.click("#hs-eu-confirmation-button");
  }
  async clickSignInPageLink() {
    const signInLink = Selector("header a").withText("Sign In");
    await t.click("#hs-eu-confirmation-button");
    await t.wait(3000);
    await t.click(signInLink);
    await t.wait(3000);
  }

  async validateSignInPageTitle() {
    await t
      .expect(Selector("title").innerText)
      .eql("Doshii : Dashboard")
      .wait(2000);
    console.log("Validated SignIn Page Title");
  }
}

export default new signInPage();
