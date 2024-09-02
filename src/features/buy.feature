Feature: Buy 

  Scenario: See products
    Given the user visit page "https://www.saucedemo.com/" and the user logs in
    When the user can see the products
    Then the user selects the product he likes


   Scenario: See product details

    Given the user visit page "https://www.saucedemo.com/inventory-item.html?id=4"
    When the user see the detail of product
    And the user see the name
    And the user see the description
    And the user see the price
    And the user see the photo
    Then the user click button "Add to cart"

    Scenario: Add to cart 

    Given the user visit page "https://www.saucedemo.com/inventory-item.html?id=4"
    When the user click button "Add to cart"
    Then the user add the product to cart and the button change to "Remove"

    Scenario: See cart

    Given the user click button cart
    When the user see the list of products
    Then the user can see the button "Checkout" and "Continue Shopping"





