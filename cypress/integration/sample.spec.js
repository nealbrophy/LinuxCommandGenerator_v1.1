/// <reference types="cypress" />

describe('Linux Command Generator Initial Tests', () => {
    
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/index.html');
    });

    it('has a title', () => {
        cy.contains('Linux Command Generator');
    });


});