import { Selector, t } from "testcafe";

class pricingPage {
  async acceptCookies() {
    await t.click("#hs-eu-confirmation-button");
  }
  async clickPricingPageLink() {
    const pricingPageLink = Selector("header a").withText("Pricing");
    await t.click("#hs-eu-confirmation-button");
    await t.click(pricingPageLink);
  }

  async validatePricingPageTitle() {
    await t.expect(Selector("#pricing").innerText).eql("Pricing").wait(2000);
    console.log("Validated Pricing Page Title");
  }
}

export default new pricingPage();
