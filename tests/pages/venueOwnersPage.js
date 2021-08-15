import { Selector, t } from "testcafe";

class venueOwnersPage {
  async acceptCookies() {
    await t.click("#hs-eu-confirmation-button");
  }
  async clickVenueOwnerPageLink() {
    const venueOwners = Selector("header a").withText("Venue Owners");
    await t.click("#hs-eu-confirmation-button");
    await t.click(venueOwners);
  }

  async validateVenueOwnerPageTitle() {
    await t.expect(Selector("title").innerText).eql("Venue Owners - Doshii");
    console.log("Validated Venue Owner Page Title");
  }
}

export default new venueOwnersPage();
