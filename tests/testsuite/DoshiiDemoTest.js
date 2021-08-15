import landingPage from "../pages/landingPage";
import venueOwnersPage from "../pages/venueOwnersPage";
import appMarketPlacePage from "../pages/appMarketPlacePage";
import pricingPage from "../pages/pricingPage";
import signInPage from "../pages/signInPage";

// (1) Use of fixtures to Launch Doshii Website
fixture("Doshii Test").page("https://doshii.io/");

// (2) Maximize the Doshii Website window
test("Doshii Website Launching Test", async (t) => {
  await t.maximizeWindow();
  console.log("Doshii Website is Launched");
});

// (3) Validate whether it is launched correctly on Doshii Home Page
test("Validate Landing Page Title Test", async (t) => {
  landingPage.acceptCookies();
  landingPage.validateLandingPage();
});

//(4) Venue Owner Page: Click on Venue Owner Page link and navigate to Venue Owner Page
test("Navigate to Venue Owners Page & Validate Title of Venue Owner Page Test", async (t) => {
  venueOwnersPage.acceptCookies();
  venueOwnersPage.clickVenueOwnerPageLink();
  venueOwnersPage.validateVenueOwnerPageTitle();
});

//(5) App Market Place Page: Click on App Market Place Page link and navigate to App Market Place Page
test("Navigate to App Market Place Page & Validate Title of App Market Place Page Test", async (t) => {
  appMarketPlacePage.acceptCookies();
  appMarketPlacePage.clickAppMarketPlaceLink();
  appMarketPlacePage.validateAppMarketPlacePageTitle();
});

//(6) Pricing Page: Click on Pricing Page link and navigate to Pricing Page
test("Navigate to Pricing Page & Validate Title of Pricing Page Test", async (t) => {
  pricingPage.acceptCookies();
  pricingPage.clickPricingPageLink();
  pricingPage.validatePricingPageTitle();
});

//(7) Sign In Page: Click on Sign In Page link and navigate to sign Page
test("Navigate to Sign In Page & Validate Title of Sign In Page Test", async (t) => {
  signInPage.acceptCookies();
  signInPage.clickSignInPageLink();
  signInPage.validateSignInPageTitle();
});
