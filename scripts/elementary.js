// elementary OS
const elementary = {
    _appImageLauncher: {
        instructions: "go to <a href=\"https://github.com/TheAssassin/AppImageLauncher/releases\" target=\"_blank\">https://github.com/TheAssassin/AppImageLauncher/releases</a> and download the appropriate .deb file. Then execute the below in terminal.",
        code: "sudo dpkg -i appimagelauncher_*.deb"
    },
    _atom: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo add-apt-repository ppa:webupd8team/atom && \nsudo apt-get update && \nsudo apt install -y atom"
    },
    _chrome: {
        instructions:"execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \nsudo dpkg -i google-chrome*.deb"
    },
    _firefox: {
        instructions:"execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "wget https://download.mozilla.org/?product=firefox-latest-ssl&os=linux64&lang=en-US && \ncd ~/Downloads/ && \ntar xjf firefox-*.tar.bz2 && \nsudo rm -r /opt/firefox && \nsudo mv firefox /opt/firefox72"
    },
    _gitKraken: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "wget https://release.gitkraken.com/linux/gitkraken-amd64.deb && \nsudo dpkg -i gitkraken-amd64.deb"
    },
    _kdeConnect: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo apt install -y kdeconnect"
    },
    _mcMojave: {
        instructions: "go to <a href='https://www.gnome-look.org/p/1275087/' class='instructionLink' target=\"_blank\">https://www.gnome-look.org/p/1275087/</a> and and download the desired version.",
        code: "sudo apt-get install gtk2-engines-murrine gtk2-engines-pixbuf -y && \ncd Downloads && tar xvf Mojave-*.tar.xz && \nsudo mv Mojave-* /usr/share/themes/"
    },
    _numlockAtLogin: {
        instructions: "run the below code in terminal and edit the results to change `#activate-numlock=true` to `activate-numlock=true` (i.e. delete the `#` from the start of the line) and write-out/save the file.",
        code: "sudo nano ///etc/lightdm/io.elementary.greeter.conf"
    },
    _nodeJS: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code:"sudo apt-get install curl && \ncurl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash - && \nsudo apt-get install -y nodejs"
    },
    _mkusb: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo add-apt-repository ppa:mkusb/ppa && \nsudo apt-get update && \nsudo apt install -y mkusb mkusb-nox usb-pack-efi"
    },
    _qBittorrent: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo apt install -y qbittorrent"
    },
    _opera: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "wget -qO- https://deb.opera.com/archive.key | sudo apt-key add - && \nsudo add-apt-repository \"deb [arch=i386,amd64] https://deb.opera.com/opera-stable/ stable non-free\" && \nsudo apt install opera-stable -y"
    },
    _openAsRoot: {
        instructions: "first, paste the following in terminal: <br><mark>sudo nano /usr/share/contractor/Open_as_admin.contract</mark>. <br>Then paste the below and write-out/save the file (if using nano: <code>ctrl+o</code>, then <code>return</code>, then <code>ctrl+x</code>)",
        code: "[Contractor Entry] \nName=Open folder as root \nIcon=gksu-root-terminal \nDescription=Open folder as root \nMimeType=inode;application/x-sh;application/x-executable; \nExec=/usr/bin/io.elementary.files-pkexec \nGettext-Domain=pantheon-files"
    },
    _slack: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "wget https://downloads.slack-edge.com/linux_releases/slack-desktop-4.3.2-amd64.deb && \nsudo dpkg -i slack-desktop-4.3.2-amd64.deb"
    },
    _standardNotes: {
        instructions: "install <em>App Image Launcher</em> first, then execute the below code in terminal and select \"Integrate and Run\" on the pop-up.</p>",
        code: "wget https://github.com/standardnotes/desktop/releases/download/v3.0.25/Standard-Notes-3.0.25.AppImage && \nchmod a+x Standard-Notes-3.0.25.AppImage && \n./Standard-Notes-3.0.25.AppImage"
    },
    _visualStudioCode: {
        instructions: "download the .deb from <a href=\"https://code.visualstudio.com/docs/?dv=linux64_deb\">https://code.visualstudio.com/docs/?dv=linux64_deb</a>, then execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "cd ~/Downloads && \nsudo dpkg -i code_*.deb \nsudo apt-get install -f"
    },
    _tor: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo add-apt-repository ppa:webupd8team/tor-browser && \nsudo apt-get update && \nsudo apt-get upgrade -y && \nsudo apt-get install tor-browser"
    },
    _tweaks: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo apt install software-properties-common && \nsudo add-apt-repository ppa:philip.scott/elementary-tweaks && \nsudo apt-get update && \nsudo apt-get install elementary-tweaks"},
    _papirus: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo add-apt-repository ppa:papirus/papirus && \nsudo apt update && \nsudo apt install papirus-icon-theme"
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
        code: "sudo add-apt-repository ppa:daniruiz/flat-remix && \nsudo apt-get update && \nsudo apt-get install flat-remix"
    },
    _vimix: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "wget https://github.com/vinceliuice/vimix-gtk-themes/archive/Gtk3.22-12.25.tar.gz && \ntar -xvf Gtk3.22-12.25.tar.gz && \ncd vimix* && \n sudo apt install gtk2-engines-murrine gtk2-engines-pixbuf && \n ./Vimix-installer.sh"
    },
    _uniform: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo add-apt-repository ppa:noobslab/icons2 && \nsudo apt-get update && \nsudo apt-get install uniform-icons"
    },
    _distSummary: "elementary OS is a Linux distribution based on Ubuntu that focuses mainly on non-technical users. It promotes itself as a “fast, open, and privacy-respecting” replacement to macOS and Windows and has a pay-what-you-want model. The human interface guidelines of the elementary OS project focus on immediate usability with a gentle learning curve, rather than full-fledged customization.[9] The three core rules the developers set for themselves were \"concision\", \"accessible configuration\" and \"minimal documentation\".",
    _logo: `<i class="fl-elementary sideLogo" aria-hidden="true"></i>`,
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
    get gitKraken() {
        return this._gitKraken;
    },
    get kdeConnect() {
        return this._kdeConnect;
    },
    get mcMojave() {
        return this._mcMojave;
    },
    get numlockAtLogin() {
        return this._numlockAtLogin;
    },
    get nodeJS() {
        return this._nodeJS;
    },
    get mkusb() {
        return this._mkusb;
    },
    get qBittorrent() {
        return this._qBittorrent;
    },
    get openAsRoot() {
        return this._openAsRoot;
    },
    get opera() {
        return this._opera;
    },
    get standardNotes() {
        return this._standardNotes;
    },
    get slack() {
        return this._slack;
    },
    get tor() {
        return this._tor;
    },
    get tweaks() {
        return this._tweaks;
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
    get inspiration() {
        return this._inspiration;
    },
    get flatRemix() {
        return this._flatRemix;
    },
    get vimix() {
        return this._vimix;
    },
    get uniform() {
        return this._uniform;
    },
    get logo() {
        return this._logo;
    }

};