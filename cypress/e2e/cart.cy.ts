describe("cart flow", () => {
    const openMiniCart = () => {
        cy.get("header button").click({force: true});
        cy.wait(1000);
    }

    it("add product in cart", () => {
        cy.visit("http://localhost:3000/smartphones?page=1");
        cy.wait(1000);

        cy.get(".MuiGrid-item:first-of-type button").click();

        openMiniCart();

        cy.get(".slide-cart__products > div").should("have.length", 1);
    })

    it("remove product from the slide cart", () => {
        cy.visit("http://localhost:3000/smartphones?page=1");
        cy.wait(1000);

        cy.get(".MuiGrid-item:first-of-type button").click({force: true});

        openMiniCart();

        cy.get(".slide-cart__products-product:first-of-type button").click({force: true});
        cy.get(".slide-cart__products > div").should("have.length", 0);
    })

    it("show the cart page with one item", () => {
        cy.visit("http://localhost:3000/smartphones?page=1");
        cy.wait(1000);

        cy.get(".MuiGrid-item:first-of-type button").click();

        openMiniCart();

        cy.get(".slide-cart a").click({force: true});
        cy.wait(1000);

        cy.url().should("equal", "http://localhost:3000/cart");
        cy.get(".cart-item").should("have.length", 1);
    })

    it("remove one item from the cart", () => {
        cy.visit("http://localhost:3000/smartphones?page=1");
        cy.wait(1000);

        cy.get(".MuiGrid-item:first-of-type button").click();

        openMiniCart();

        cy.get(".slide-cart a").click({force: true});
        cy.wait(1000);

        cy.url().should("equal", "http://localhost:3000/cart");
        cy.get(".cart-item:first-of-type button").click();
        cy.get(".cart-item").should("have.length", 0);
    })
})
