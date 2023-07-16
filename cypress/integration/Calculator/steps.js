Given(/^that I acess the calculator$/, () => {
	cy.visit('/')
});

And(/^I want to do the '([^"]*)'$/, (operation) => {
  let operator

  switch (operation) {
    case 'addition':
      operator = '+'       
      break
    case 'subtraction':
      operator = '−'
      break
    case 'multiplication':
      operator = '×'
      break
    case 'division':
      operation = '÷'
      break
    default:
      break
  }
	Cypress.env('operator', operator)
});

When(/^I inform the values "([^"]*)" and "([^"]*)"$/, (firstValue, secondValue) => {
	cy.get(`input.button.number[value="${firstValue}"]`).click()
  cy.get(`input.button.operator[value="${Cypress.env('operator')}"]`).click()
	cy.get(`input.button.number[value="${secondValue}"]`).click()
});

And(/^finish the operation$/, () => {
  cy.get('input.button.operator[value="="]').click()
});

Then(/^I must obtain the result "([^"]*)"$/, (expectedResult) => {
	cy.get('#display').should('have.value', expectedResult)
});
