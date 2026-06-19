class home {
  elements = {
    logo: () => cy.get("#topPanel > a:nth-child(2) > img"),
    logoText: () => cy.get("#topPanel > p"),
    headerPanel: () => cy.get("#headerPanel"),
    solutionsLink: () => cy.get("#headerPanel > ul.leftmenu > li.Solutions"),
    aboutUsLink: () =>
      cy.get("#headerPanel > ul.leftmenu > li:nth-child(2) > a"),
    servicesLink: () =>
      cy.get("#headerPanel > ul.leftmenu > li:nth-child(3) > a"),
    productsLink: () =>
      cy.get("#headerPanel > ul.leftmenu > li:nth-child(4) > a"),
    locationsLink: () =>
      cy.get("#headerPanel > ul.leftmenu > li:nth-child(5) > a"),
    adminPageLink: () =>
      cy.get("#headerPanel > ul.leftmenu > li:nth-child(6) > a"),
    usernameLabel: () =>
      cy.get("#loginPanel > form > div:nth-child(2) > label"),
    username: () => cy.get("#loginPanel > form > div:nth-child(2) > input"),
    passwordLabel: () => cy.get("#loginPanel > form > p:nth-child(3) > b"),
    password: () => cy.get("#loginPanel > form > div:nth-child(4) > input"),
    loginButton: () => cy.get("#loginPanel > form > div:nth-child(5) > input"),
    homeBottom: () => cy.get("#headerPanel > ul.button > li.home > a"),
    aboutUsBottom: () => cy.get("#headerPanel > ul.button > li.aboutus > a"),
    contactBottom: () => cy.get("#headerPanel > ul.button > li.contact > a"),
    ATMServiceLabel: () => cy.get("#rightPanel > ul.services > li.captionone"),
    withdrawFundsLabel: () =>
      cy.get("#rightPanel > ul.services > li:nth-child(2) > a"),
    transferFundsLabel: () =>
      cy.get("#rightPanel > ul.services > li:nth-child(3) > a"),
    checkBalanceLabel: () =>
      cy.get("#rightPanel > ul.services > li:nth-child(4) > a"),
    makeDepositLabel: () =>
      cy.get("#rightPanel > ul.services > li:nth-child(5) > a"),
    billPayLabel: () =>
      cy.get("#rightPanel > ul.servicestwo > li:nth-child(2) > a"),
    accountHistoryLabel: () =>
      cy.get("#rightPanel > ul.servicestwo > li:nth-child(3) > a"),
    transferFundsLink: () =>
      cy.get("#rightPanel > ul.servicestwo > li:nth-child(4) > a"),
    readMoreLink: () => cy.get("#rightPanel > p:nth-child(4) > a"),
  };

  navigate() {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  }
}

export default home;
