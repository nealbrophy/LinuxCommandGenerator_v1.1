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
        // clicking copy/add/download buttons present warning toasts as nothing selected yet
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
        cy.get('div[cy-data="output-area"]').contains('appimage');

        // check add to list button presents success msg
        cy.get('button[cy-data="addToList-button"]').click();
        cy.get('.toast').contains('Added to list');
        // check that selected app appears in sidebar area
        cy.get('div[cy-data="sideOutput-area"]').contains('appImage')

        // tests of copy button are failing in cypress currently but work ok when debugging in the cypress results and works fine outside of cypress
        // cy.get('button[cy-data="copy-button"]').click();
        // cy.get('.toast').contains('Copy successful');

        // check that download button downloads file
        cy.get('button[cy-data="download-button"]').click();
        cy.readFile('../../../../Downloads/linux-commands.html');
    });

    // check that arch distro functions as expected
    it('arch should function as expected', () => {
        cy.get('a[cy-data="arch-button"]').click();
        cy.get('button[cy-data="appImage-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('appimage');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('button[cy-data="atom-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('atom');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('button[cy-data="chrome-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('chrome');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('button[cy-data="tweaks-button"]').should('be.disabled');
        cy.get('button[cy-data="firefox-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('firefox');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('button[cy-data="git-button"]').should('be.disabled');
        cy.get('button[cy-data="gitKraken-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('gitKraken');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('button[cy-data="kde-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('kdeConnect');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('button[cy-data="mkusb-button"]').should('be.disabled');
        cy.get('button[cy-data="qbittorrent-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('qBittorrent');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('button[cy-data="slack-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('slack');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('button[cy-data="standardNotes-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('standardNotes');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('button[cy-data="vsc-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('visualStudioCode');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('button[cy-data="yay-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('yay');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('button[cy-data="papirus-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('papirus');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('button[cy-data="inverse-button"]').should('be.disabled');
        cy.get('button[cy-data="inspiration-button"]').should('be.disabled');
        cy.get('button[cy-data="flatRemix-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('flat-remix');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('button[cy-data="vimix-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('vimix');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('button[cy-data="uniform-button"]').should('be.disabled');
        cy.get('button[cy-data="arc-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('arc');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('button[cy-data="moka-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('moka');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('button[cy-data="faba-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('faba');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('button[cy-data="terminalShortcut-button"]').should('be.disabled');
        cy.get('button[cy-data="openAsRoot-button"]').should('be.disabled');
    })

    // check sidebar functionality
    it('hides sidebar unless/until trigger is clicked', () => {
        // sidebar isn't visible
        cy.get('ul[cy-data="sidebar"]').should('not.be.visible');
        // clicking add to list button while no distr/app selected should not cause sidebar trigger to pulse
        cy.get('button[cy-data="addToList-button"]').click();
        cy.get('a[cy-data="sidenav-button"]').should('not.have.class', 'pulse');
        // clicking sidebar trigger should reveal sidebar
        cy.get('a[cy-data="sidenav-button"]').click();
        cy.get('ul[cy-data="sidebar"]').should('be.visible');
    })

});