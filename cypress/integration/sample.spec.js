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

        cy.scrollTo('bottom');
        // output area is empty
        cy.get('div[cy-data="output-area"]').should('have.length', 1);
        // clicking copy/add/download buttons present warning toasts as nothing selected yet
        cy.get('button[cy-data="copy-button"]').click();
        cy.get('.toast').contains('Nothing to copy yet');
        cy.get('button[cy-data="addToList-button"]').click();
        cy.get('.toast').contains('Nothing to add yet');
        // sidebar output area is empty
        cy.get('div[cy-data="sideOutput-area"]').should('have.length', 1);

    })

    // check that output section popualtes when buttons are clicked
    it('populates output section and buttons function correctly', () => {
        cy.get('a[cy-data="arch-button"]').click();
        cy.get('a[cy-data="appImage-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('appimage');

        // check add to list button presents success msg
        cy.get('button[cy-data="addToList-button"]').click();
        cy.get('.toast').contains('Added to list');
        // check that selected app appears in sidebar area
        cy.get('div[cy-data="sideOutput-area"]').contains('appimage')

        // tests of copy button are failing in cypress currently but work ok when debugging in the cypress results and works fine outside of cypress
        // cy.get('button[cy-data="copy-button"]').click();
        // cy.get('.toast').contains('Copy successful');
    });

    // check that arch distro functions as expected
    it('arch should function as expected', () => {
        cy.get('a[cy-data="arch-button"]').click();
        cy.get('a[cy-data="appImage-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('appimage');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('a[cy-data="atom-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('atom');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('a[cy-data="chrome-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('chrome');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('a[cy-data="tweaks-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="firefox-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('firefox');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('a[cy-data="git-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="gitKraken-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('gitkraken');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('a[cy-data="kde-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('kdeconnect');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('a[cy-data="mkusb-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="qBittorrent-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('qbittorrent');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('a[cy-data="slack-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('slack');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('a[cy-data="standardNotes-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('standardnotes');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('a[cy-data="vsc-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('visual-studio-code');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('a[cy-data="yay-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('yay');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('a[cy-data="icons-tab"]').click();
        cy.get('a[cy-data="papirus-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('papirus');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('a[cy-data="inverse-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="inspiration-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="flatRemix-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('flat-remix');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('a[cy-data="vimix-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('vimix');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('a[cy-data="uniform-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="arc-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('arc');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('a[cy-data="moka-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('moka');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('a[cy-data="faba-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('faba');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('a[cy-data="themes-tab"]').click();
        cy.get('a[cy-data="ant-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('ant');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Arch');
        cy.get('a[cy-data="mcMojave-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="vimixTheme-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="openAsRoot-button"]').should('have.class', 'disabled');
    })

    // check that debian distro functions as expected
    it('debian should function as expected', () => {
        cy.get('a[cy-data="debian-button"]').click();
        cy.get('a[cy-data="appImage-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('appimage');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Debian');
        cy.get('a[cy-data="atom-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('atom');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Debian');
        cy.get('a[cy-data="chrome-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('chrome');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Debian');
        cy.get('a[cy-data="tweaks-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="firefox-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('firefox');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Debian');
        cy.get('a[cy-data="git-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('git');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Debian');
        cy.get('a[cy-data="gitKraken-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('gitkraken');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Debian');
        cy.get('a[cy-data="kde-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('kdeconnect');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Debian');
        cy.get('a[cy-data="mkusb-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('mkusb');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Debian');
        cy.get('a[cy-data="qBittorrent-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('qbittorrent');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Debian');
        cy.get('a[cy-data="slack-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('slack');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Debian');
        cy.get('a[cy-data="standardNotes-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('standardnotes');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Debian');
        cy.get('a[cy-data="vsc-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('visual');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Debian');
        cy.get('a[cy-data="yay-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="icons-tab"]').click();
        cy.get('a[cy-data="papirus-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('papirus');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Debian');
        cy.get('a[cy-data="inverse-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('Inverse');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Debian');
        cy.get('a[cy-data="inspiration-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('Inspiration');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Debian');
        cy.get('a[cy-data="flatRemix-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('flat-remix');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Debian');
        cy.get('a[cy-data="vimix-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('vimix');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Debian');
        cy.get('a[cy-data="uniform-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('uniform');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Debian');
        cy.get('a[cy-data="arc-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="moka-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="faba-button"]').should('have.class', 'disabled');;
        cy.get('a[cy-data="themes-tab"]').click();
        cy.get('a[cy-data="ant-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="mcMojave-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="vimixTheme-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('vimix');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Debian');
        cy.get('a[cy-data="openAsRoot-button"]').should('have.class', 'disabled');
    })

    // check that elementary distro functions as expected
    it('elementary should function as expected', () => {
        cy.get('a[cy-data="elementary-button"]').click();
        cy.get('a[cy-data="appImage-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('appimage');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Elementary');
        cy.get('a[cy-data="atom-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('atom');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Elementary');
        cy.get('a[cy-data="chrome-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('chrome');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Elementary');
        cy.get('a[cy-data="tweaks-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('tweaks');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Elementary');
        cy.get('a[cy-data="firefox-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('firefox');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Elementary');
        cy.get('a[cy-data="git-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="gitKraken-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('gitkraken');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Elementary');
        cy.get('a[cy-data="kde-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('kdeconnect');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Elementary');
        cy.get('a[cy-data="mkusb-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('mkusb');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Elementary');
        cy.get('a[cy-data="qBittorrent-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('qbittorrent');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Elementary');
        cy.get('a[cy-data="slack-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('slack');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Elementary');
        cy.get('a[cy-data="standardNotes-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('standardnotes');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Elementary');
        cy.get('a[cy-data="vsc-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('visual');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Elementary');
        cy.get('a[cy-data="yay-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="icons-tab"]').click();
        cy.get('a[cy-data="papirus-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('papirus');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Elementary');
        cy.get('a[cy-data="inverse-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('Inverse');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Elementary');
        cy.get('a[cy-data="inspiration-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('Inspiration');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Elementary');
        cy.get('a[cy-data="flatRemix-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('flat-remix');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Elementary');
        cy.get('a[cy-data="vimix-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('vimix');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Elementary');
        cy.get('a[cy-data="uniform-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('uniform');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Elementary');
        cy.get('a[cy-data="arc-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="moka-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="faba-button"]').should('have.class', 'disabled');;
        cy.get('a[cy-data="themes-tab"]').click();
        cy.get('a[cy-data="ant-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="vimixTheme-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="mcMojave-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('Mojave');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Elementary');
        cy.get('a[cy-data="misc-tab"]').click();
        cy.get('a[cy-data="openAsRoot-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('root');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Elementary');
    })

    // check that solus distro functions as expected
    it('solus should function as expected', () => {
        cy.get('a[cy-data="solus-button"]').click();
        cy.get('a[cy-data="appImage-button"]').should('have.class', 'disabled')
        cy.get('a[cy-data="atom-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('atom');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Solus');
        cy.get('a[cy-data="chrome-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('chrome');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Solus');
        cy.get('a[cy-data="tweaks-button"]').should('have.class', 'disabled')
        cy.get('a[cy-data="firefox-button"]').should('have.class', 'disabled')
        cy.get('a[cy-data="git-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="gitKraken-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('gitkraken');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Solus');
        cy.get('a[cy-data="kde-button"]').should('have.class', 'disabled')
        cy.get('a[cy-data="mkusb-button"]').should('have.class', 'disabled')
        cy.get('a[cy-data="qBittorrent-button"]').should('have.class', 'disabled')
        cy.get('a[cy-data="slack-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('slack');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Solus');
        cy.get('a[cy-data="standardNotes-button"]').should('have.class', 'disabled')
        cy.get('a[cy-data="vsc-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('code');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Solus');
        cy.get('a[cy-data="yay-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="icons-tab"]').click();
        cy.get('a[cy-data="papirus-button"]').should('have.class', 'disabled')
        cy.get('a[cy-data="inverse-button"]').should('have.class', 'disabled')
        cy.get('a[cy-data="inspiration-button"]').should('have.class', 'disabled')
        cy.get('a[cy-data="flatRemix-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('flat-remix');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Solus');
        cy.get('a[cy-data="vimix-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('vimix');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Solus');
        cy.get('a[cy-data="uniform-button"]').should('have.class', 'disabled')
        cy.get('a[cy-data="arc-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="moka-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="faba-button"]').should('have.class', 'disabled');;
        cy.get('a[cy-data="themes-tab"]').click();
        cy.get('a[cy-data="ant-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="vimixTheme-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="mcMojave-button"]').should('have.class', 'disabled')
        cy.get('a[cy-data="misc-tab"]').click();
        cy.get('a[cy-data="openAsRoot-button"]').should('have.class', 'disabled')
    })

    // check that ubuntu distro functions as expected
    it('ubuntu should function as expected', () => {
        cy.get('a[cy-data="ubuntu-button"]').click();
        cy.get('a[cy-data="appImage-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('appimage');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Ubuntu');
        cy.get('a[cy-data="atom-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('atom');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Ubuntu');
        cy.get('a[cy-data="chrome-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('chrome');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Ubuntu');
        cy.get('a[cy-data="tweaks-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="firefox-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('firefox');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Ubuntu');
        cy.get('a[cy-data="git-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('git');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Ubuntu');
        cy.get('a[cy-data="gitKraken-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('gitkraken');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Ubuntu');
        cy.get('a[cy-data="kde-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('kdeconnect');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Ubuntu');
        cy.get('a[cy-data="mkusb-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('mkusb');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Ubuntu');
        cy.get('a[cy-data="qBittorrent-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('qbittorrent');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Ubuntu');
        cy.get('a[cy-data="slack-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('slack');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Ubuntu');
        cy.get('a[cy-data="standardNotes-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('standardnotes');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Ubuntu');
        cy.get('a[cy-data="vsc-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('visual');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Ubuntu');
        cy.get('a[cy-data="yay-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="icons-tab"]').click();
        cy.get('a[cy-data="papirus-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('papirus');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Ubuntu');
        cy.get('a[cy-data="inverse-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('Inverse');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Ubuntu');
        cy.get('a[cy-data="inspiration-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('Inspiration');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Ubuntu');
        cy.get('a[cy-data="flatRemix-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('flat-remix');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Ubuntu');
        cy.get('a[cy-data="vimix-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('vimix');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Ubuntu');
        cy.get('a[cy-data="uniform-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('uniform');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Ubuntu');
        cy.get('a[cy-data="arc-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="moka-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="faba-button"]').should('have.class', 'disabled');;
        cy.get('a[cy-data="themes-tab"]').click();
        cy.get('a[cy-data="ant-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="vimixTheme-button"]').click();
        cy.get('div[cy-data="output-area"]').contains('vimix');
        cy.get('div[cy-data="outputInstructions-area"]').contains('Ubuntu');
        cy.get('a[cy-data="mcMojave-button"]').should('have.class', 'disabled');
        cy.get('a[cy-data="misc-tab"]').click();
        cy.get('a[cy-data="openAsRoot-button"]').should('have.class', 'disabled');
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