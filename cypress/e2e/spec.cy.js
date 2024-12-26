
before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Prevent Cypress from failing the test
        return false;
    });
});


it('My First Test',()=>{
    cy.visit('/contact/demo-request-next/')
    //cy.visit('https://cypress.io')

    /* ==== Generated with Cypress Studio ==== */
    cy.get('#onetrust-accept-btn-handler').click();
    cy.get('#FirstName').clear();
    cy.get('#FirstName').type('osman');
    /* ==== End Cypress Studio ==== */
})