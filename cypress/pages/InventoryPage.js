class InventoryPage {
    elementsVisible() {
      cy.get('.inventory_item').should('have.length.gt', 0);
    }
  
    addFirstItemToCart() {
      cy.get('.inventory_item').first().find('button').click();
    }
  
    addAllItemsToCart() {
      cy.get('.inventory_item button').each(($btn) => {
        cy.wrap($btn).click();
      });
    }
  
    goToCart() {
      cy.get('.shopping_cart_link').click();
    }
  
    checkItemsInCart(expectedCount) {
      cy.get('.cart_item').should('have.length', expectedCount);
    }
  }
  
  export default new InventoryPage();
  