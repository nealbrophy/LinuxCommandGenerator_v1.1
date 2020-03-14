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
        cy.get('div[id="outputContent"]').should('have.length', 1);
        // clicking copy/add/download buttons present warning toasts as nothing selected yet
        cy.get('button[id="copyOutput"]').click();
        cy.get('.toast').contains('Nothing to copy yet');
        cy.get('button[id="saveOutput"]').click();
        cy.get('.toast').contains('Nothing to add yet');
        // sidebar output area is empty
        cy.get('div[id="sideOutput"]').should('have.length', 1);

    })

    // check that output section popualtes when buttons are clicked
    it('populates output section and buttons function correctly', () => {
        cy.get('a[id="arch"]').click();
        cy.get('a[id="appImageLauncher"]').click();
        cy.get('div[id="outputContent"]').contains('appimage');

        // check add to list button presents success msg
        cy.get('button[id="saveOutput"]').click();
        cy.get('.toast').contains('Added to list');
        // check that selected app appears in sidebar area
        cy.get('div[id="sideOutput"]').contains('appimage')

        // tests of copy button are failing in cypress currently but work ok when debugging in the cypress results and works fine outside of cypress
        // cy.get('button[id="copyOutput"]').click();
        // cy.get('.toast').contains('Copy successful');
    });

    // check that arch distro functions as expected
    it('arch should function as expected', () => {
        cy.get('a[id="arch"]').click();
        cy.get('a[id="appImageLauncher"]').click();
        cy.get('div[id="outputContent"]').contains('appimage');
        cy.get('div[id="outputInstructions"]').contains('Arch');
        cy.get('a[id="atom"]').click();
        cy.get('div[id="outputContent"]').contains('atom');
        cy.get('div[id="outputInstructions"]').contains('Arch');
        cy.get('a[id="chrome"]').click();
        cy.get('div[id="outputContent"]').contains('chrome');
        cy.get('div[id="outputInstructions"]').contains('Arch');
        cy.get('a[id="tweaks"]').should('have.class', 'disabled');
        cy.get('a[id="firefox"]').click();
        cy.get('div[id="outputContent"]').contains('firefox');
        cy.get('div[id="outputInstructions"]').contains('Arch');
        cy.get('a[id="git"]').should('have.class', 'disabled');
        cy.get('a[id="gitKraken"]').click();
        cy.get('div[id="outputContent"]').contains('gitkraken');
        cy.get('div[id="outputInstructions"]').contains('Arch');
        cy.get('a[id="kdeConnect"]').click();
        cy.get('div[id="outputContent"]').contains('kdeconnect');
        cy.get('div[id="outputInstructions"]').contains('Arch');
        cy.get('a[id="mkusb"]').should('have.class', 'disabled');
        cy.get('a[id="qBittorrent"]').click();
        cy.get('div[id="outputContent"]').contains('qbittorrent');
        cy.get('div[id="outputInstructions"]').contains('Arch');
        cy.get('a[id="slack"]').click();
        cy.get('div[id="outputContent"]').contains('slack');
        cy.get('div[id="outputInstructions"]').contains('Arch');
        cy.get('a[id="standardNotes"]').click();
        cy.get('div[id="outputContent"]').contains('standardnotes');
        cy.get('div[id="outputInstructions"]').contains('Arch');
        cy.get('a[id="visualStudioCode"]').click();
        cy.get('div[id="outputContent"]').contains('visual-studio-code');
        cy.get('div[id="outputInstructions"]').contains('Arch');
        cy.get('a[id="yay"]').click();
        cy.get('div[id="outputContent"]').contains('yay');
        cy.get('div[id="outputInstructions"]').contains('Arch');
        cy.get('a[id="iconTab"]').click();
        cy.get('a[id="papirus"]').click();
        cy.get('div[id="outputContent"]').contains('papirus');
        cy.get('div[id="outputInstructions"]').contains('Arch');
        cy.get('a[id="inverse"]').should('have.class', 'disabled');
        cy.get('a[id="inspiration"]').should('have.class', 'disabled');
        cy.get('a[id="flatRemix"]').click();
        cy.get('div[id="outputContent"]').contains('flat-remix');
        cy.get('div[id="outputInstructions"]').contains('Arch');
        cy.get('a[id="vimix"]').click();
        cy.get('div[id="outputContent"]').contains('vimix');
        cy.get('div[id="outputInstructions"]').contains('Arch');
        cy.get('a[id="uniform"]').should('have.class', 'disabled');
        cy.get('a[id="arc"]').click();
        cy.get('div[id="outputContent"]').contains('arc');
        cy.get('div[id="outputInstructions"]').contains('Arch');
        cy.get('a[id="moka"]').click();
        cy.get('div[id="outputContent"]').contains('moka');
        cy.get('div[id="outputInstructions"]').contains('Arch');
        cy.get('a[id="faba"]').click();
        cy.get('div[id="outputContent"]').contains('faba');
        cy.get('div[id="outputInstructions"]').contains('Arch');
        cy.get('a[id="themeTab"]').click();
        cy.get('a[id="ant"]').click();
        cy.get('div[id="outputContent"]').contains('ant');
        cy.get('div[id="outputInstructions"]').contains('Arch');
        cy.get('a[id="mcMojave"]').should('have.class', 'disabled');
        cy.get('a[id="vimixTheme"]').should('have.class', 'disabled');
        cy.get('a[id="openAsRoot"]').should('have.class', 'disabled');
    })

    // check that debian distro functions as expected
    it('debian should function as expected', () => {
        cy.get('a[id="debian"]').click();
        cy.get('a[id="appImageLauncher"]').click();
        cy.get('div[id="outputContent"]').contains('appimage');
        cy.get('div[id="outputInstructions"]').contains('Debian');
        cy.get('a[id="atom"]').click();
        cy.get('div[id="outputContent"]').contains('atom');
        cy.get('div[id="outputInstructions"]').contains('Debian');
        cy.get('a[id="chrome"]').click();
        cy.get('div[id="outputContent"]').contains('chrome');
        cy.get('div[id="outputInstructions"]').contains('Debian');
        cy.get('a[id="tweaks"]').should('have.class', 'disabled');
        cy.get('a[id="firefox"]').click();
        cy.get('div[id="outputContent"]').contains('firefox');
        cy.get('div[id="outputInstructions"]').contains('Debian');
        cy.get('a[id="git"]').click();
        cy.get('div[id="outputContent"]').contains('git');
        cy.get('div[id="outputInstructions"]').contains('Debian');
        cy.get('a[id="gitKraken"]').click();
        cy.get('div[id="outputContent"]').contains('gitkraken');
        cy.get('div[id="outputInstructions"]').contains('Debian');
        cy.get('a[id="kdeConnect"]').click();
        cy.get('div[id="outputContent"]').contains('kdeconnect');
        cy.get('div[id="outputInstructions"]').contains('Debian');
        cy.get('a[id="mkusb"]').click();
        cy.get('div[id="outputContent"]').contains('mkusb');
        cy.get('div[id="outputInstructions"]').contains('Debian');
        cy.get('a[id="qBittorrent"]').click();
        cy.get('div[id="outputContent"]').contains('qbittorrent');
        cy.get('div[id="outputInstructions"]').contains('Debian');
        cy.get('a[id="slack"]').click();
        cy.get('div[id="outputContent"]').contains('slack');
        cy.get('div[id="outputInstructions"]').contains('Debian');
        cy.get('a[id="standardNotes"]').click();
        cy.get('div[id="outputContent"]').contains('standardnotes');
        cy.get('div[id="outputInstructions"]').contains('Debian');
        cy.get('a[id="visualStudioCode"]').click();
        cy.get('div[id="outputContent"]').contains('visual');
        cy.get('div[id="outputInstructions"]').contains('Debian');
        cy.get('a[id="yay"]').should('have.class', 'disabled');
        cy.get('a[id="iconTab"]').click();
        cy.get('a[id="papirus"]').click();
        cy.get('div[id="outputContent"]').contains('papirus');
        cy.get('div[id="outputInstructions"]').contains('Debian');
        cy.get('a[id="inverse"]').click();
        cy.get('div[id="outputContent"]').contains('Inverse');
        cy.get('div[id="outputInstructions"]').contains('Debian');
        cy.get('a[id="inspiration"]').click();
        cy.get('div[id="outputContent"]').contains('Inspiration');
        cy.get('div[id="outputInstructions"]').contains('Debian');
        cy.get('a[id="flatRemix"]').click();
        cy.get('div[id="outputContent"]').contains('flat-remix');
        cy.get('div[id="outputInstructions"]').contains('Debian');
        cy.get('a[id="vimix"]').click();
        cy.get('div[id="outputContent"]').contains('vimix');
        cy.get('div[id="outputInstructions"]').contains('Debian');
        cy.get('a[id="uniform"]').click();
        cy.get('div[id="outputContent"]').contains('uniform');
        cy.get('div[id="outputInstructions"]').contains('Debian');
        cy.get('a[id="arc"]').should('have.class', 'disabled');
        cy.get('a[id="moka"]').should('have.class', 'disabled');
        cy.get('a[id="faba"]').should('have.class', 'disabled');;
        cy.get('a[id="themeTab"]').click();
        cy.get('a[id="ant"]').should('have.class', 'disabled');
        cy.get('a[id="mcMojave"]').should('have.class', 'disabled');
        cy.get('a[id="vimixTheme"]').click();
        cy.get('div[id="outputContent"]').contains('vimix');
        cy.get('div[id="outputInstructions"]').contains('Debian');
        cy.get('a[id="openAsRoot"]').should('have.class', 'disabled');
    })

    // check that elementary distro functions as expected
    it('elementary should function as expected', () => {
        cy.get('a[id="elementary"]').click();
        cy.get('a[id="appImageLauncher"]').click();
        cy.get('div[id="outputContent"]').contains('appimage');
        cy.get('div[id="outputInstructions"]').contains('Elementary');
        cy.get('a[id="atom"]').click();
        cy.get('div[id="outputContent"]').contains('atom');
        cy.get('div[id="outputInstructions"]').contains('Elementary');
        cy.get('a[id="chrome"]').click();
        cy.get('div[id="outputContent"]').contains('chrome');
        cy.get('div[id="outputInstructions"]').contains('Elementary');
        cy.get('a[id="tweaks"]').click();
        cy.get('div[id="outputContent"]').contains('tweaks');
        cy.get('div[id="outputInstructions"]').contains('Elementary');
        cy.get('a[id="firefox"]').click();
        cy.get('div[id="outputContent"]').contains('firefox');
        cy.get('div[id="outputInstructions"]').contains('Elementary');
        cy.get('a[id="git"]').should('have.class', 'disabled');
        cy.get('a[id="gitKraken"]').click();
        cy.get('div[id="outputContent"]').contains('gitkraken');
        cy.get('div[id="outputInstructions"]').contains('Elementary');
        cy.get('a[id="kdeConnect"]').click();
        cy.get('div[id="outputContent"]').contains('kdeconnect');
        cy.get('div[id="outputInstructions"]').contains('Elementary');
        cy.get('a[id="mkusb"]').click();
        cy.get('div[id="outputContent"]').contains('mkusb');
        cy.get('div[id="outputInstructions"]').contains('Elementary');
        cy.get('a[id="qBittorrent"]').click();
        cy.get('div[id="outputContent"]').contains('qbittorrent');
        cy.get('div[id="outputInstructions"]').contains('Elementary');
        cy.get('a[id="slack"]').click();
        cy.get('div[id="outputContent"]').contains('slack');
        cy.get('div[id="outputInstructions"]').contains('Elementary');
        cy.get('a[id="standardNotes"]').click();
        cy.get('div[id="outputContent"]').contains('standardnotes');
        cy.get('div[id="outputInstructions"]').contains('Elementary');
        cy.get('a[id="visualStudioCode"]').click();
        cy.get('div[id="outputContent"]').contains('visual');
        cy.get('div[id="outputInstructions"]').contains('Elementary');
        cy.get('a[id="yay"]').should('have.class', 'disabled');
        cy.get('a[id="iconTab"]').click();
        cy.get('a[id="papirus"]').click();
        cy.get('div[id="outputContent"]').contains('papirus');
        cy.get('div[id="outputInstructions"]').contains('Elementary');
        cy.get('a[id="inverse"]').click();
        cy.get('div[id="outputContent"]').contains('Inverse');
        cy.get('div[id="outputInstructions"]').contains('Elementary');
        cy.get('a[id="inspiration"]').click();
        cy.get('div[id="outputContent"]').contains('Inspiration');
        cy.get('div[id="outputInstructions"]').contains('Elementary');
        cy.get('a[id="flatRemix"]').click();
        cy.get('div[id="outputContent"]').contains('flat-remix');
        cy.get('div[id="outputInstructions"]').contains('Elementary');
        cy.get('a[id="vimix"]').click();
        cy.get('div[id="outputContent"]').contains('vimix');
        cy.get('div[id="outputInstructions"]').contains('Elementary');
        cy.get('a[id="uniform"]').click();
        cy.get('div[id="outputContent"]').contains('uniform');
        cy.get('div[id="outputInstructions"]').contains('Elementary');
        cy.get('a[id="arc"]').should('have.class', 'disabled');
        cy.get('a[id="moka"]').should('have.class', 'disabled');
        cy.get('a[id="faba"]').should('have.class', 'disabled');;
        cy.get('a[id="themeTab"]').click();
        cy.get('a[id="ant"]').should('have.class', 'disabled');
        cy.get('a[id="vimixTheme"]').should('have.class', 'disabled');
        cy.get('a[id="mcMojave"]').click();
        cy.get('div[id="outputContent"]').contains('Mojave');
        cy.get('div[id="outputInstructions"]').contains('Elementary');
        cy.get('a[id="miscTab"]').click();
        cy.get('a[id="openAsRoot"]').click();
        cy.get('div[id="outputContent"]').contains('root');
        cy.get('div[id="outputInstructions"]').contains('Elementary');
    })

    // check that solus distro functions as expected
    it('solus should function as expected', () => {
        cy.get('a[id="solus"]').click();
        cy.get('a[id="appImageLauncher"]').should('have.class', 'disabled')
        cy.get('a[id="atom"]').click();
        cy.get('div[id="outputContent"]').contains('atom');
        cy.get('div[id="outputInstructions"]').contains('Solus');
        cy.get('a[id="chrome"]').click();
        cy.get('div[id="outputContent"]').contains('chrome');
        cy.get('div[id="outputInstructions"]').contains('Solus');
        cy.get('a[id="tweaks"]').should('have.class', 'disabled')
        cy.get('a[id="firefox"]').should('have.class', 'disabled')
        cy.get('a[id="git"]').should('have.class', 'disabled');
        cy.get('a[id="gitKraken"]').click();
        cy.get('div[id="outputContent"]').contains('gitkraken');
        cy.get('div[id="outputInstructions"]').contains('Solus');
        cy.get('a[id="kdeConnect"]').should('have.class', 'disabled')
        cy.get('a[id="mkusb"]').should('have.class', 'disabled')
        cy.get('a[id="qBittorrent"]').should('have.class', 'disabled')
        cy.get('a[id="slack"]').click();
        cy.get('div[id="outputContent"]').contains('slack');
        cy.get('div[id="outputInstructions"]').contains('Solus');
        cy.get('a[id="standardNotes"]').should('have.class', 'disabled')
        cy.get('a[id="visualStudioCode"]').click();
        cy.get('div[id="outputContent"]').contains('code');
        cy.get('div[id="outputInstructions"]').contains('Solus');
        cy.get('a[id="yay"]').should('have.class', 'disabled');
        cy.get('a[id="iconTab"]').click();
        cy.get('a[id="papirus"]').should('have.class', 'disabled')
        cy.get('a[id="inverse"]').should('have.class', 'disabled')
        cy.get('a[id="inspiration"]').should('have.class', 'disabled')
        cy.get('a[id="flatRemix"]').click();
        cy.get('div[id="outputContent"]').contains('flat-remix');
        cy.get('div[id="outputInstructions"]').contains('Solus');
        cy.get('a[id="vimix"]').click();
        cy.get('div[id="outputContent"]').contains('vimix');
        cy.get('div[id="outputInstructions"]').contains('Solus');
        cy.get('a[id="uniform"]').should('have.class', 'disabled')
        cy.get('a[id="arc"]').should('have.class', 'disabled');
        cy.get('a[id="moka"]').should('have.class', 'disabled');
        cy.get('a[id="faba"]').should('have.class', 'disabled');;
        cy.get('a[id="themeTab"]').click();
        cy.get('a[id="ant"]').should('have.class', 'disabled');
        cy.get('a[id="vimixTheme"]').should('have.class', 'disabled');
        cy.get('a[id="mcMojave"]').should('have.class', 'disabled')
        cy.get('a[id="miscTab"]').click();
        cy.get('a[id="openAsRoot"]').should('have.class', 'disabled')
    })

    // check that ubuntu distro functions as expected
    it('ubuntu should function as expected', () => {
        cy.get('a[id="ubuntu"]').click();
        cy.get('a[id="appImageLauncher"]').click();
        cy.get('div[id="outputContent"]').contains('appimage');
        cy.get('div[id="outputInstructions"]').contains('Ubuntu');
        cy.get('a[id="atom"]').click();
        cy.get('div[id="outputContent"]').contains('atom');
        cy.get('div[id="outputInstructions"]').contains('Ubuntu');
        cy.get('a[id="chrome"]').click();
        cy.get('div[id="outputContent"]').contains('chrome');
        cy.get('div[id="outputInstructions"]').contains('Ubuntu');
        cy.get('a[id="tweaks"]').should('have.class', 'disabled');
        cy.get('a[id="firefox"]').click();
        cy.get('div[id="outputContent"]').contains('firefox');
        cy.get('div[id="outputInstructions"]').contains('Ubuntu');
        cy.get('a[id="git"]').click();
        cy.get('div[id="outputContent"]').contains('git');
        cy.get('div[id="outputInstructions"]').contains('Ubuntu');
        cy.get('a[id="gitKraken"]').click();
        cy.get('div[id="outputContent"]').contains('gitkraken');
        cy.get('div[id="outputInstructions"]').contains('Ubuntu');
        cy.get('a[id="kdeConnect"]').click();
        cy.get('div[id="outputContent"]').contains('kdeconnect');
        cy.get('div[id="outputInstructions"]').contains('Ubuntu');
        cy.get('a[id="mkusb"]').click();
        cy.get('div[id="outputContent"]').contains('mkusb');
        cy.get('div[id="outputInstructions"]').contains('Ubuntu');
        cy.get('a[id="qBittorrent"]').click();
        cy.get('div[id="outputContent"]').contains('qbittorrent');
        cy.get('div[id="outputInstructions"]').contains('Ubuntu');
        cy.get('a[id="slack"]').click();
        cy.get('div[id="outputContent"]').contains('slack');
        cy.get('div[id="outputInstructions"]').contains('Ubuntu');
        cy.get('a[id="standardNotes"]').click();
        cy.get('div[id="outputContent"]').contains('standardnotes');
        cy.get('div[id="outputInstructions"]').contains('Ubuntu');
        cy.get('a[id="visualStudioCode"]').click();
        cy.get('div[id="outputContent"]').contains('visual');
        cy.get('div[id="outputInstructions"]').contains('Ubuntu');
        cy.get('a[id="yay"]').should('have.class', 'disabled');
        cy.get('a[id="iconTab"]').click();
        cy.get('a[id="papirus"]').click();
        cy.get('div[id="outputContent"]').contains('papirus');
        cy.get('div[id="outputInstructions"]').contains('Ubuntu');
        cy.get('a[id="inverse"]').click();
        cy.get('div[id="outputContent"]').contains('Inverse');
        cy.get('div[id="outputInstructions"]').contains('Ubuntu');
        cy.get('a[id="inspiration"]').click();
        cy.get('div[id="outputContent"]').contains('Inspiration');
        cy.get('div[id="outputInstructions"]').contains('Ubuntu');
        cy.get('a[id="flatRemix"]').click();
        cy.get('div[id="outputContent"]').contains('flat-remix');
        cy.get('div[id="outputInstructions"]').contains('Ubuntu');
        cy.get('a[id="vimix"]').click();
        cy.get('div[id="outputContent"]').contains('vimix');
        cy.get('div[id="outputInstructions"]').contains('Ubuntu');
        cy.get('a[id="uniform"]').click();
        cy.get('div[id="outputContent"]').contains('uniform');
        cy.get('div[id="outputInstructions"]').contains('Ubuntu');
        cy.get('a[id="arc"]').should('have.class', 'disabled');
        cy.get('a[id="moka"]').should('have.class', 'disabled');
        cy.get('a[id="faba"]').should('have.class', 'disabled');;
        cy.get('a[id="themeTab"]').click();
        cy.get('a[id="ant"]').should('have.class', 'disabled');
        cy.get('a[id="vimixTheme"]').click();
        cy.get('div[id="outputContent"]').contains('vimix');
        cy.get('div[id="outputInstructions"]').contains('Ubuntu');
        cy.get('a[id="mcMojave"]').should('have.class', 'disabled');
        cy.get('a[id="miscTab"]').click();
        cy.get('a[id="openAsRoot"]').should('have.class', 'disabled');
    })


    // check sidebar functionality
    it('hides sidebar unless/until trigger is clicked', () => {
        // sidebar isn't visible
        cy.get('ul[id="slide-out"]').should('not.be.visible');
        // clicking add to list button while no distr/app selected should not cause sidebar trigger to pulse
        cy.get('button[id="saveOutput"]').click();
        cy.get('a[id="sideTrigger"]').should('not.have.class', 'pulse');
        // clicking sidebar trigger should reveal sidebar
        cy.get('a[id="sideTrigger"]').click();
        cy.get('ul[id="slide-out"]').should('be.visible');
        cy.get('a[id="sidebarDownload"]').click();
        cy.get('.toast').contains('List is empty');
        cy.get('a[id="sidebarClear"]').click();
        cy.get('.toast').contains('List already empty');
    })

    it('downloads a file successfully', () => {
        cy.get('a[id="arch"]').click();
        cy.get('a[id="appImageLauncher"]').click();
        cy.get('button[id="saveOutput"]').click();
        cy.get('a[id="sideTrigger"]').should('have.class', 'pulse');
        cy.get('div[id="sideOutput"]').contains('appimage');
        cy.get('a[id="sideTrigger"]').click();
        cy.get('a[id="sidebarDownload"]').click();
        cy.readFile('../../../../Downloads/linux-commands.html');


    })

});