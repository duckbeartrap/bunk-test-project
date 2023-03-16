/// <reference types="cypress" />

import Chance from 'chance';
const chance = new Chance();
const API_URL = 'http://localhost:3000';

describe('settle expenses app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/')
    })

    it('should display the title', () => {
        cy.contains("Expense Splitter")
    })

    it('should display form', () => {
        cy.get('app-add-expense-form').should('exist')
    })

    it('should display payouts list', () => {
        cy.get('app-settle-expenses').should('exist')
    })

    it('displays expenses table', () => {
        cy.get('[data-cy=expenses-table]').should('exist')
    })

    it('shoud add rows to the table', () => {
        for(let i = 0; i < 5; i++){
            cy.get("[data-cy=name-input]").should('exist')
            cy.get("[data-cy=name-input]").type(chance.name())
            cy.get("[data-cy=amount-input]").type(chance.dollar())
            cy.get("[data-cy=submit-expense-button]").click()
        }

        cy.get('[data-cy=expenses-table]')
            .find('tbody > tr')
            .should('have.length', 5)
    })

    it('shoud settle expenses and display in a list when settle up button is clicked', () => {
        cy.intercept('POST', `${API_URL}/payouts`).as('payouts')
        
        for(let i = 0; i < 5; i++){
            cy.get("[data-cy=name-input]").should('exist')
            cy.get("[data-cy=name-input]").type(chance.name())
            cy.get("[data-cy=amount-input]").type(chance.dollar())
            cy.get("[data-cy=submit-expense-button]").click()
        }

        cy.get("[data-cy=settle-expenses-button]").click();
        cy.wait('@payouts')
        cy.get('[data-cy=payouts-list]').should('have.length.gt', 0)
    })
})