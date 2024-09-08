Feature: Buy 

  Scenario: See products
    Given the user visit page "https://www.saucedemo.com/inventory.html"
    When the user fill username with "standard_user"
    And the user fill password with "secret_sauce"
    And the user press login button
    And the user can see the products
    Then the user selects the product he likes


   Scenario: See product details

    Given the user visit page "https://www.saucedemo.com/inventory-item.html?id=4"
    When the user fill username with "standard_user"
    And the user fill password with "secret_sauce"
    And the user press login button
    And the user see the detail of product
    Then the user click button "Add to cart"

    Scenario: Add to cart 

    Given the user visit page "https://www.saucedemo.com"
    When the user fill username with "standard_user"
    And the user fill password with "secret_sauce"
    And the user press login button
    And the user can see the products
    And the user selects the product he likes
    And the user see the detail of product
    And the user click button "Add to cart"
    Then the user add the product to cart and the button change to "Remove"

    Scenario: See cart

    Given the user visit page "https://www.saucedemo.com"
    When the user fill username with "standard_user"
    And the user fill password with "secret_sauce"
    And the user press login button
    And the user can see the products
    And the user selects the product he likes
    And the user see the detail of product
    And the user click button "Add to cart"
    And the user add the product to cart and the button change to "Remove"
    And the user click button cart
    And the user see the list of products
    Then the user can see the button "Checkout" and "Continue Shopping"





