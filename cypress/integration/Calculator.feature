Feature: Calculator

  As an user
  I want to use the calculator
  So that I can check my accounts


Scenario: Find the sum between values
  Given that I acess the calculator
  And I want to do the 'addition'
  When I inform the values "2" and "2"
  And finish the operation
  Then I must obtain the result "4"

Scenario: Find the difference between values
  Given that I acess the calculator
  And I want to do the 'subtraction'
  When I inform the values "8" and "8"
  And finish the operation
  Then I must obtain the result "0"

Scenario: Find the product between values
  Given that I acess the calculator
  And I want to do the 'multiplication'
  When I inform the values "9" and "9"
  And finish the operation
  Then I must obtain the result "81"
  