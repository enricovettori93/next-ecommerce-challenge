describe("homepage", () => {
    it("display the main categories", () => {
        cy.visit("http://localhost:3000/");

        cy.get("h2").should("have.text", "Categorie");
        cy.get("ul.MuiList-root").should("exist");
    })
})
