import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';

describe('Inventory Tests', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.fillUsername(Cypress.env('username'));
    LoginPage.fillPassword(Cypress.env('password'));
    LoginPage.submit();
    cy.url().should('include', '/inventory.html');
  });

  it('Verify all elements are visible', () => {
    InventoryPage.elementsVisible();
  });

  it('Add first item to cart and check', () => {
    InventoryPage.addFirstItemToCart();
    InventoryPage.goToCart();
    InventoryPage.checkItemsInCart(1);
  });

  it('Add all items to cart and check', () => {
    InventoryPage.addAllItemsToCart();
    InventoryPage.goToCart();
    cy.get('.cart_item').should('have.length.gt', 1);
  });
});
