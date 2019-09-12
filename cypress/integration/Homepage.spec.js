const autoRecord = require('cypress-autorecord'); // Require the autorecord function

describe('Home Page', function() {
  autoRecord();

  it('should show posts from users I am following', function() {
    cy.visit('http://localhost:4200/login');
    cy.get('[data-cy=email-input]').type('nancy.du@rangle.io');
    cy.get('[data-cy=password-input]').type('12345678');
    cy.get('[data-cy=auth-submit]').click();

    cy.get('[data-cy=post]');
    cy.get('[data-cy=post-title]').contains('Hello Assert(JS)!');
  });
});
