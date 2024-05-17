describe("search", () => {
    const getSearchInput = () => {
        return  cy.get('input[name="search"]');
    }

    it("search some products", () => {
        cy.visit("http://localhost:3000/");
        getSearchInput().type("iphone").type("{enter}");

        cy.wait(1000);
        cy.url().should("equal", "http://localhost:3000/search?page=1&q=iphone");
    })

    it("searchbox should have a value using a url with the querystring populated", () => {
        cy.visit("http://localhost:3000/search?page=1&q=test");
        cy.wait(1000);

        getSearchInput().should("have.value", "test");
    })
})
