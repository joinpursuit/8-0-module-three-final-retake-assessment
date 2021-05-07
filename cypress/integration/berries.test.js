describe("has a functioning Berries page", () => {
  it("can vist the berries page", () => {
    cy.visit("http://localhost:3000/berries");

    cy.contains("Select a Type");
    cy.get("select");
  });

  it("can navigate to the berries page from the home page", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("Welcome to My Pokemon App!");
    cy.get("a").contains("Berries").click();
    cy.url().should("eq", "http://localhost:3000/berries");

    cy.contains("Select a Type");
    cy.get("select");
  });

  it("has a NavBar", () => {
    cy.hasNavBar();
  });

  it("selects a berry type and displays name and firmness", () => {
    cy.intercept("https://pokeapi.co/api/v2/berry/*").as("getBerry");
    cy.get("select").select("leppa");
    cy.wait("@getBerry");

    cy.findAllByRole("heading").contains("leppa");
    cy.contains("very-hard");
  });

  it("selects the blank option and displays nothing", () => {
    cy.get("select").select("");
    cy.findAllByRole("heading").contains("razz").should("not.exist");
    cy.contains("very-hard").should("not.exist");
  });
});
