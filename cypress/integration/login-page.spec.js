describe("Login", () => {
    beforeEach(() => {

        cy.visit(`/`);
        cy.get("nav").find("li").eq(1).find("a").click();
    });
    describe("Login Component", () => {

        it("should display Log In", () => {
            cy.get("h2").contains("Log In");
        });
        it("should display Email ", () => {
            cy.get("label").contains("Email");
        });
        it("should display 'Sign up' ", () => {
            cy.get('a[href*="/movies/signup"]').contains("Sign Up");
        });
        it("should display Password ", () => {
            cy.get("label").contains("Password");
        });
        // it("should display a Log In button ", () => {
        //     cy.get("button").contains("Log In");
        // });
        // it("should display 'Forgot Password?' in the container", () => {
        //     cy.get('a[href*="/movies/forget-password"]').contains("Forgot Password?");
        // });
    });
    describe("Error situation", () => {
        it("should display 'Failed to log in' When you enter incorrect message", () => {
            cy.get("input").eq(0).clear().type("sjc@qq.com")
            cy.get("input").eq(1).clear().type("1111111")
            cy.get("button").contains("Log In").click()
            cy.get('.fade').contains("Failed to log in")
        });
        it("should display 'There should be a @ in email' after after entering 1", () => {
            cy.get("input").eq(0).clear().type("2")
            cy.get("button").contains("Log In").click()
            cy.get('p').contains("There should be a @ in email")
        });
        it("should display 'Email should not be empty'", () => {
            
            cy.get("input").eq(1).clear().type("1111111111")
            cy.get("button").contains("Log In").click()
            cy.get('p').contains("Email should not be empty")
        });
        it("should display 'Password should not be empty'", () => {
            cy.get("input").eq(0).clear().type("13@sjs")
            
            cy.get("button").contains("Log In").click()
            cy.get('p').contains("Password should not be empty")
        });
    })
    describe("Button", () => {
        it("should navigate to  home page ", () => {
            cy.get("input").eq(0).clear().type("111@11.com")
            cy.get("input").eq(1).clear().type("111111")
            cy.get("button").contains("Log In").click()
            cy.url().should("include", `/`);
            cy.get("#lzx")
        });
        
        
    });
})