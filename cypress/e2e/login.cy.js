import LoginPage from '../pages/LoginPage';

describe('Login Tests', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('Positive login', () => {
    LoginPage.fillUsername(Cypress.env('username'));
    LoginPage.fillPassword(Cypress.env('password'));
    LoginPage.submit();
    cy.url().should('include', '/inventory.html');
  });

  it('Negative login - wrong password', () => {
    LoginPage.fillUsername(Cypress.env('username'));
    LoginPage.fillPassword('wrong_pass');
    LoginPage.submit();
    LoginPage.getErrorMessage().should('be.visible');
  });

  it('Negative login - empty fields', () => {
    LoginPage.submit();
    LoginPage.getErrorMessage().should('be.visible');
  });
});
