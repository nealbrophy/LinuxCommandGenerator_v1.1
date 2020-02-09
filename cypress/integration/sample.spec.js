/// <reference types="cypress" />

describe('Linux Command Generator Initial Tests', () => {
    // before each test, visit homepage
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/index.html');
    });

    // confirm that cypress finds & loads page ok
    it('has a title', () => {
        cy.contains('Linux Command Generator');
    })

    // check that page is in default blank state
    it('starts with a clean slate', () => {
        // output area is empty
        cy.get('div[cy-data="output-area"]').should('have.length', 1);
        // sidebar output area is empty
        cy.get('div[cy-data="sideOutput-area"]').should('have.length', 1);
        // copy/add/download buttons present warning toasts
        cy.get('button[cy-data="copy-button"]').click();
        cy.get('.toast').contains('Nothing to copy yet');
        cy.get('button[cy-data="addToList-button"]').click();
        cy.get('.toast').contains('Nothing to add yet');
        cy.get('button[cy-data="download-button"]').click();
        cy.get('.toast').contains('Nothing to download yet');
        
    })

    // check that output section popualtes when buttons are clicked
    it('populates output section and buttons function correctly', () => {
        cy.get('a[cy-data="arch-button"]').click();
        cy.get('button[cy-data="appImage-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('sudo');
        // check button functionality
        cy.get('button[cy-data="addToList-button"]').click();
        cy.get('.toast').contains('Added');
        // cy.get('button[cy-data="copy-button"]').click();
        // cy.get('.toast').contains('Copy successful');
        cy.get('button[cy-data="download-button"]').click();
        cy.readFile('../../../../Downloads/linux-commands.html');
    });

});