// ubuntu
const ubuntu = {
    _appImageLauncher: {
        instructions: "go to <a href=\"https://github.com/TheAssassin/AppImageLauncher/releases\" target=\"_blank\">https://github.com/TheAssassin/AppImageLauncher/releases</a> and download the appropriate .deb file. Then execute the below in terminal.",
        code: "sudo dpkg -i appimagelauncher_*.deb"
    },
    _atom: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo add-apt-repository ppa:webupd8team/atom && \nsudo apt-get update && \nsudo apt-get install -y atom"
    },
    _chrome: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo apt-get install libxss1 libappindicator1 libindicator7 -y && \nwget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \nsudo dpkg -i google-chrome*.deb && \nsudo apt-get install -f && \nsudo apt autoremove -y"},
    _firefox: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "wget https://download.mozilla.org/?product=firefox-latest-ssl&os=linux64&lang=en-US && cd ~/Downloads/ && tar xjf firefox-*.tar.bz2 && \nsudo rm -r /opt/firefox && \nsudo mv firefox /opt/firefox72"},
    _git: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo apt install -y git"
    },
    _gitKraken: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "wget https://release.gitkraken.com/linux/gitkraken-amd64.deb && \nsudo dpkg -i gitkraken*.deb"
    },
    _kdeConnect: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo apt install -y kdeconnect"
    },
    _mkusb: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo add-apt-repository universe && \nsudo apt-get update && \nsudo apt install -y mkusb mkusb-nox usb-pack-efi"
    },
    _qBittorrent: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo apt install -y qbittorrent"
    },
    _slack: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "wget https://downloads.slack-edge.com/linux_releases/slack-desktop-4.3.2-amd64.deb && \nsudo dpkg -i slack*.deb && \nsudo apt -f install -y"
    },
    _standardNotes: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "wget https://github.com/standardnotes/desktop/releases/download/v3.0.25/Standard-Notes-3.0.25.AppImage && \nmv ~/Downloads/Standard-Notes-3.0.25.AppImage ~/Standard-Notes-3.0.25.AppImage && cd ~ && \nchmod a+x Standard-Notes-3.0.25.AppImage"
    },
    _visualStudioCode: {
        instructions: "download the .deb from <a href=\"https://code.visualstudio.com/docs/?dv=linux64_deb\">https://code.visualstudio.com/docs/?dv=linux64_deb</a>, then execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "cd ~/Downloads && \nsudo dpkg -i code_*.deb \nsudo apt-get install -f"
    },
    _papirus: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo add-apt-repository ppa:papirus/papirus && \nsudo apt update && \nsudo apt install -y papirus-icon-theme"
    },
    _inverse: {
        instructions: "go to <a href=\"https://www.gnome-look.org/p/1344791/\" target=\"_blank\">https://www.gnome-look.org/p/1344791/</a> and download the desired version to your Downloads folder. Then execute the below in terminal.",
        code: "cd Downloads && sudo tar -xf Inverse*.tar.xz && \nsudo rm Inverse*.tar.xz && \nsudo mv Inverse* /usr/share/icons/"
    },
    _inspiration: {
        instructions: "go to <a href=\"https://www.gnome-look.org/s/Gnome/p/1348081\" target=\"_blank\">https://www.gnome-look.org/s/Gnome/p/1348081</a> and download the desired version to your Downloads folder. Then execute the below in terminal.",
        code: "cd Downloads && sudo tar -xf Inspiration*.tar.xz && \nsudo rm Inspiration*.tar.xz && \nsudo mv Inspiration /usr/share/icons/"
    },
    _flatRemix: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo add-apt-repository ppa:daniruiz/flat-remix && \nsudo apt-get update && \nsudo apt install -y flat-remix"
    },
    _vimix: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "wget https://github.com/vinceliuice/vimix-gtk-themes/archive/Gtk3.22-12.25.tar.gz && \ntar -xvf Gtk3.22-12.25.tar.gz && \ncd vimix* && \n sudo apt install gtk2-engines-murrine gtk2-engines-pixbuf && \n ./Vimix-installer.sh"
    },
    _vimixTheme: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo add-apt-repository ppa:noobslab/themes && \nsudo apt-get update && sudo apt-get install vimix-gtk-themes"
    },
    _uniform: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo add-apt-repository ppa:noobslab/icons2 && \nsudo apt-get update && \nsudo apt install -y uniform-icons"
    },
    _distSummary: "<p>Ubuntu is a free and open-source Linux distribution based on Debian. Ubuntu is released every six months, with long-term support (LTS) releases every two years. Ubuntu is developed by Canonical, and a community of other developers, under a meritocratic governance model. Canonical provides security updates and support for each Ubuntu release, starting from the release date and until the release reaches its designated end-of-life (EOL) date. Canonical generates revenue through the sale of premium services related to Ubuntu.</p>",
    _logo: `<i class="fl-ubuntu sideLogo" aria-hidden="true"></i>`,
    get appImageLauncher() {
        return this._appImageLauncher;
    },
    get atom() {
        return this._atom;
    },
    get bitWarden() {
        return this._bitWarden;
    },
    get chrome() {
        return this._chrome;
    },
    get firefox() {
        return this._firefox;
    },
    get git() {
        return this._git;
    },
    get gitKraken() {
        return this._gitKraken;
    },
    get kdeConnect() {
        return this._kdeConnect;
    },
    get mkusb() {
        return this._mkusb;
    },
    get qBittorrent() {
        return this._qBittorrent;
    },
    get standardNotes() {
        return this._standardNotes;
    },
    get visualStudioCode() {
        return this._visualStudioCode;
    },
    get slack() {
        return this._slack;
    },
    get papirus() {
        return this._papirus;
    },
    get inverse() {
        return this._inverse;
    },
    get inspiration() {
        return this._inspiration;
    },
    get flatRemix() {
        return this._flatRemix;
    },
    get vimix() {
        return this._vimix;
    },
    get vimixTheme() {
        return this._vimixTheme;
    },
    get uniform() {
        return this._uniform;
    },
    get logo() {
        return this._logo;
    }
};