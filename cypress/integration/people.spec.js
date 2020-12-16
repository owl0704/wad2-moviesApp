let people;

describe('people page', () => {

    before(() => {
        cy.request(`https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
            "TMDB_KEY"
        )}&language=en-US&page=1`).then((res) => {
            people = res.body.results
            console.log(people)
        })
    })

    beforeEach(() => {
        cy.visit("/");
        cy.get("nav").find("li").eq(4).find("a").click();
    });

    describe('render test', () => {
        it('should render properly', () => {
            cy.url().should("include", `/people`);
            cy.get("h2").contains("Popular People");
        })

        it('should request api properly', () => {
            cy.get(".card").should("have.length", people.length);
        })
    })

    describe('people detail page', () => {
        beforeEach(() => {
            cy.get(".card").eq(0).find("img").click();
        });
        it('should render people detail page', () => {
            cy.get('h2').contains(people[0].name)
        })
        it('should render the poster successfully', () => {
            cy.get('img').should('have.attr', 'src').should('include', people[0].profile_path)
        })
    })

})
