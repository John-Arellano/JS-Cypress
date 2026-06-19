import homePage from "../pages/home_Page";

describe("Home Page", () => {
  const home = new homePage();

  beforeEach(() => {
    home.navigate();
  });

  it("TC_Home_001 - Should display the logo, logo text, and header panel", () => {
    home.elements.logo().should("be.visible");
    home.elements.logoText().should("be.visible");
    home.elements.headerPanel().should("be.visible");
  });

  it("TC_Home_002 - Should have working navigation links", () => {
    home.elements.solutionsLink().should("be.visible");
    home.elements.aboutUsLink().should("be.visible");
    home.elements.servicesLink().should("be.visible");
    home.elements.productsLink().should("be.visible");
    home.elements.locationsLink().should("be.visible");
    home.elements.adminPageLink().should("be.visible");
  });

  it("TC_Home_003 - Should have a functional login form", () => {
    home.elements.username().should("be.visible");
    home.elements.password().should("be.visible");
    home.elements.loginButton().should("be.visible");
  });

  it("TC_Home_004 - Should display the home, about us, and contact information", () => {
    home.elements.homeBottom().should("be.visible");
    home.elements.aboutUsBottom().should("be.visible");
    home.elements.contactBottom().should("be.visible");
  });

  it("TC_Home_005 - Should display the services offered", () => {
    home.elements.ATMServiceLabel().should("be.visible");
    home.elements.withdrawFundsLabel().should("be.visible");
    home.elements.transferFundsLabel().should("be.visible");
    home.elements.checkBalanceLabel().should("be.visible");
    home.elements.makeDepositLabel().should("be.visible");
    home.elements.billPayLabel().should("be.visible");
    home.elements.accountHistoryLabel().should("be.visible");
    home.elements.transferFundsLink().should("be.visible");
    home.elements.readMoreLink().should("be.visible");
  });

  it("TC_Home_006 - Should allow users to log in with valid credentials", () => {
    cy.fixture("home").then((homeData) => {
      home.elements.username().type(homeData.username);
      home.elements.password().type(homeData.password);
      home.elements.loginButton().click();
    });
  });
});
