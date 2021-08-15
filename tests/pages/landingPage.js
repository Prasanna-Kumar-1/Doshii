import { Selector, t } from "testcafe";

class landingPage {
  async acceptCookies() {
    await t.click("#hs-eu-confirmation-button");
  }
  async validateLandingPage() {
    await t
      .expect(Selector("title").innerText)
      .eql("Doshii - Simplify your connected world - Doshii")
      .wait(2000);
    console.log("Landing Page title verified");
  }
}

export default new landingPage();
