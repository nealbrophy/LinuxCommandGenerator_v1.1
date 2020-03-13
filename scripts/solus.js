// solus OS
const solus = {
    _atom: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo eopkg it atom"
    },
    _chrome: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo eopkg install google-chrome"
    },
    _gitKraken: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo snap install gitkraken"
    },
    _slack: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo eopkg install slack"
    },
    _visualStudioCode: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo snap install code"
    },
    _numlockx: {
        instructions: "download the numlockx file from <a href=\"https://www.archlinux.org/packages/community/x86_64/numlockx/\">https://www.archlinux.org/packages/community/x86_64/numlockx/</a> then execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros) and finally when editing the .conf file add <code><mark>greeter-setup-script=/usr/bin/numlockx on</mark></code> in the <code><strong>[Seat:*]</strong></code> section",
        code: "tar -I zstd -xvf numlockx && \ncd usr/bin && \nsudo mv numlockx /usr/bin && \nsudo nano /usr/share/lightdm/lightdm.conf.d/10_solus_default.conf"
    },
    _flatRemix: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "git clone https://github.com/daniruiz/flat-remix && \nmkdir -p ~/.icons && \ncp -r flat-remix/Flat-Remix* ~/.icons/ && \ngsettings set org.gnome.desktop.interface icon-theme \"Flat-Remix\""
    },
    _vimix: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "wget https://github.com/vinceliuice/vimix-gtk-themes/archive/Gtk3.22-12.25.tar.gz && \ntar -xvf Gtk3.22-12.25.tar.gz && \ncd vimix* && \nsudo apt install gtk2-engines-murrine gtk2-engines-pixbuf && \n ./Vimix-installer.sh"
    },
    _distSummary: "<p>Solus is an independently developed desktop operating system based on the Linux kernel and using its own desktop environment derived from GNOME. Starting with the Debian branch of Linux it migrated to a unique approach including Pisi and Evolve OS. It is offered as a curated rolling release model under the slogan \"Install Today. Updates Forever\". Solus contains a wide variety of desktop environments depending on release chosen, options include Solus' own Budgie Desktop, GNOME, MATE and KDE Plasma.</p>",
    _logo: `<i class="icofont-sail-boat sideLogo" aria-hidden="true"></i>`,
    get atom() {
        return this._atom;
    },
    get chrome() {
        return this._chrome;
    },
    get gitKraken() {
        return this._gitKraken;
    },
    get slack() {
        return this._slack;
    },
    get visualStudioCode() {
        return this._visualStudioCode;
    },
    get numlockx() {
        return this._numlockx;
    },
    get flatRemix() {
        return this._flatRemix;
    },
    get vimix() {
        return this._vimix;
    },
    get logo() {
        return this._logo;
    }
};