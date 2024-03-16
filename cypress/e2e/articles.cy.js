describe("Articles App", () => {
  it("renders the default elements on the screen", () => {
    cy.visit("http://localhost:3000/");
    cy.get("[data-testid=article-heading-container").should("exist");
    cy.get("[data-testid=article-heading-h1")
      .should("exist")
      .should("have.text", "Most Popular Articles");
  });

  it("renders the articles on the screen", () => {
    cy.visit("http://localhost:3000/");
    cy.get("[data-testid=article-item-0").should("exist");
  });

  it("navigates to article details page", () => {
    cy.visit("http://localhost:3000/"); // Assuming your articles page is the homepage
    // Click on the first article link
    cy.get('[data-testid="article-item-0"] a').first().click();
    // Assuming your article details page renders with a specific heading or content
    cy.get('[data-testid="article-detail-0"]').should("exist");
  });
});
