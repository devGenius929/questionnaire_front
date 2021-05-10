context('Login', () => {
  it('should successfully log into the app and be able to access /en-us', () => {
    cy.login().then((resp) => {
      cy.visit('/en-US');
      cy.get('button.btn-start-declaration').should('have.text', 'Start my declaration');
      cy.get('button.btn-start-declaration').click();
      cy.url().should('eq', `${Cypress.config().baseUrl}/en-US/2021/nucleo`);
    });
  });
});
