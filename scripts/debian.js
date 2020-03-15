// debian
const debian = {
    _appImageLauncher: {
        instructions: "go to <a href=\"https://github.com/TheAssassin/AppImageLauncher/releases\" target=\"_blank\">https://github.com/TheAssassin/AppImageLauncher/releases</a> and download the appropriate <code>.deb</code> file. Then execute the below in terminal.",
        code: "sudo dpkg -i appimagelauncher_*.deb"
    },
    _atom: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo add-apt-repository ppa:webupd8team/atom && \nsudo apt-get update && \nsudo apt-get install -y atom"
    },
    _chrome: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo apt-get install libxss1 libappindicator1 libindicator7 -y && \nwget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \nsudo dpkg -i google-chrome*.deb && \nsudo apt-get install -f && \nsudo apt autoremove -y"
    },
    _firefox: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "wget https://download.mozilla.org/?product=firefox-latest-ssl&os=linux64&lang=en-US && \ncd ~/Downloads/ && \ntar xjf firefox-*.tar.bz2 && \nsudo rm -r /opt/firefox && \nsudo mv firefox /opt/firefox72"
    },
    _git: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo apt-get install git"
    },
    _gitKraken: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "wget https://release.gitkraken.com/linux/gitkraken-amd64.deb && \nsudo dpkg -i gitkraken-amd64.deb"
    },
    _kdeConnect: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo apt-get install kdeconnect"
    },
    _mkusb: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo add-apt-repository ppa:mkusb/ppa && \nsudo apt-get update && \nsudo apt-get install -y mkusb mkusb-nox usb-pack-efi"
    },
    _qBittorrent: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo apt-get install -y qbittorrent"
    },
    _slack: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "wget https://downloads.slack-edge.com/linux_releases/slack-desktop-4.3.2-amd64.deb && \nsudo dpkg -i slack-desktop-4.3.2-amd64.deb"
    },
    _standardNotes: {
        instructions: "install <em>App Image Launcher</em> first, then execute the below code in terminal and select \"Integrate and Run\" on the pop-up.",
        code: "wget https://github.com/standardnotes/desktop/releases/download/v3.0.25/Standard-Notes-3.0.25.AppImage && \nchmod a+x Standard-Notes-3.0.25.AppImage && \n./Standard-Notes-3.0.25.AppImage"
    },
    _visualStudioCode: {
        instructions: "download the .deb from <a href=\"https://code.visualstudio.com/docs/?dv=linux64_deb\">https://code.visualstudio.com/docs/?dv=linux64_deb</a>, then execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "cd ~/Downloads && \nsudo dpkg -i code_*.deb \nsudo apt-get install -f"
    },
    _papirus: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo sh -c \"echo 'deb http://ppa.launchpad.net/papirus/papirus/ubuntu xenial main' > /etc/apt/sources.list.d/papirus-ppa.list\" && \nsudo apt-key adv --recv-keys --keyserver keyserver.ubuntu.com E58A9D36647CAE7F && \nsudo apt-get update && \nsudo apt-get install papirus-icon-theme"
    },
    _inverse: {
        instructions: "go to <a href=\"https://www.gnome-look.org/p/1344791/\" target=\"_blank\">https://www.gnome-look.org/p/1344791/</a> and download the desired version to your Downloads folder. Then execute the below in terminal.",
        code: "cd /Downloads && \nsudo tar -xf Inverse*.tar.xz && \nsudo rm Inverse*.tar.xz &&\nsudo mv Inverse* /usr/share/icons/"
    },
    _inspiration: {
        instructions: "go to <a href=\"https://www.gnome-look.org/s/Gnome/p/1348081\" target=\"_blank\">https://www.gnome-look.org/s/Gnome/p/1348081</a> and download the desired version to your Downloads folder. Then execute the below in terminal.",
        code: "cd Downloads && sudo tar -xf Inspiration*.tar.xz && \nsudo rm Inspiration*.tar.xz && \nsudo mv Inspiration /usr/share/icons/"
    },
    _flatRemix: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo add-apt-repository ppa:daniruiz/flat-remix && \nsudo apt-get update && \nsudo apt-get install -y flat-remix"
    },
    _vimix: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "wget https://github.com/vinceliuice/vimix-gtk-themes/archive/Gtk3.22-12.25.tar.gz && \ntar -xvf Gtk3.22-12.25.tar.gz && \ncd vimix* && \nsudo apt install -y gtk2-engines-murrine gtk2-engines-pixbuf && \n ./Vimix-installer.sh"
    },
    _vimixTheme: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "wget https://github.com/vinceliuice/vimix-gtk-themes/archive/Gtk3.22-12.25.tar.gz && \ntar-xvf Gtk3.22-12.25.tar.gz && cd vimix* && sudo ./Vimix-installer.sh"
    },
    _uniform: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo add-apt-repository ppa:noobslab/icons2 && \nsudo apt-get update && \nsudo apt-get install -y uniform-icons"
    },
    _distSummary: "<p>Debian, also known as Debian GNU/Linux, is a Linux distribution composed of free and open-source software, developed by the community-supported Debian Project, which was established by Ian Murdock on August 16, 1993. Debian is one of the oldest operating systems based on the Linux kernel. The project is coordinated over the Internet by a team of volunteers guided by the Debian Project Leader and three foundational documents: the Debian Social Contract, the Debian Constitution, and the Debian Free Software Guidelines. New distributions are updated continually, and the next candidate is released after a time-based freeze.</p>",
    _logo: `<i class="fl-debian sideLogo" aria-hidden="true"></i>`,
    get appImageLauncher() {
        return this._appImageLauncher;
    },
    get atom() {
        return this._atom;
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
    get slack() {
        return this._slack;
    },
    get visualStudioCode() {
        return this._visualStudioCode;
    },
    get papirus() {
        return this._papirus;
    },
    get inverse() {
        return this._inverse;
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
    get inspiration() {
        return this._inspiration;
    },
    get logo() {
        return this._logo;
    }
};