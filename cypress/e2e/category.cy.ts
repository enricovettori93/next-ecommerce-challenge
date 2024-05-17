describe("Product category", () => {
    it("change from homepage to smartphone category", () => {
        cy.visit("http://localhost:3000/");
        const smartphoneLink = cy.get("ul li:first-child a");

        smartphoneLink.should("have.text", "smartphones");
        smartphoneLink.click();

        // wait for next to build the page
        cy.wait(1000);

        cy.url().should("equal", "http://localhost:3000/smartphones?page=1");
    })

    it("show the smartphone category", () => {
        cy.visit("http://localhost:3000/smartphones?page=1");

        cy.wait(1000);

        cy.get(".MuiGrid-item:first-of-type .swiper + div div:first-child span.MuiTypography-root").should("contain", "iPhone 9");
    })
})
