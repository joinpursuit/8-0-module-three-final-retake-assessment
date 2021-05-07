describe("has a functioning Locations page", () => {
  it("can visit the locations page", () => {
    cy.visit("http://localhost:3000/locations");

    cy.contains("List of Locations");
    cy.get("button").contains("Show Locations");
  });

  it("can navigate to the locations page from the home page", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("Welcome to My Pokemon App!");

    cy.get("a").contains("Locations").click();
    cy.url().should("eq", "http://localhost:3000/locations");
    cy.contains("List of Locations");

    cy.get("button").contains("Show Locations");
  });

  it("has a NavBar", () => {
    cy.hasNavBar();
  });

  it("shows all locations when Show Locations is clcked", () => {
    cy.get("button").contains("Show Locations").click();

    cy.get("ul").children().should("have.length", 20);

    cy.findAllByRole("listitem").contains("canalave-city");
    cy.findAllByRole("listitem").contains("pastoria-city");
    cy.findAllByRole("listitem").contains("eterna-forest");
    cy.findAllByRole("listitem").contains("great-marsh");
    cy.findAllByRole("listitem").contains("wayward-cave");
  });

  it("changes the button to Hide Locations", () => {
    cy.get("button").contains("Hide Locations");
  });

  it("hides all locations when Hide Locations is clicked", () => {
    cy.get("button").contains("Hide Locations").click();
    cy.get("ul").children().should("have.length", 0);
  });

  it("changes the button to Show Locations", () => {
    cy.get("button").contains("Show Locations");
  });
});
