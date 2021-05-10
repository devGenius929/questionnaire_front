// / <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.login()
        .then((resp) => {
          return resp.body;
        })
        .then((body) => {
          // eslint-disable-next-line camelcase
          const {access_token, expires_in, id_token} = body;
          const auth0State = {
            nonce: '',
            state: 'lala',
          };
          // eslint-disable-next-line camelcase
          const callbackUrl = `http://localhost:3000/api/callback#access_token=${access_token}&scope=openid&id_token=${id_token}&expires_in=${expires_in}&token_type=Bearer&state=${auth0State.state}`;
          cy.visit(callbackUrl, {});
        });
  });

  it('Start my declaration', () => {
    cy.get('.btn-start-declaration').should('have.value', 'Start my declaration');
  });
});
