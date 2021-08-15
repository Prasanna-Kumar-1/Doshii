import { Selector, t } from "testcafe";

class appMarketPlacePage {
  async acceptCookies() {
    await t.click("#hs-eu-confirmation-button");
  }
  async clickAppMarketPlaceLink() {
    const appMarketPlaceLink = Selector("header a").withText("App Marketplace");
    await t.click("#hs-eu-confirmation-button");
    await t.click(appMarketPlaceLink);
  }

  async validateAppMarketPlacePageTitle() {
    await t
      .expect(Selector("title").innerText)
      .eql("App Marketplace - Doshii")
      .wait(2000);
    console.log("Validated App Market Place Page Titile");
  }
}

export default new appMarketPlacePage();
