// OPERATING SYSTEMS


// arch
const arch = {
    _appImageLauncher: {
        instructions: "first, install yay. Then, execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "yay -S appimagelauncher-git"
    },
    _atom: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo pacman -S atom"
    },
    _chrome: {
        instructions: "first, install yay. Then, execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "yay -S google-chrome"
    },
    _firefox: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo pacman -S firefox"
    },
    _gitKraken: {
        instructions: "first, install yay. Then, execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "yay -S gitkraken"
    },
    _kdeConnect: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo pacman -S kdeconnect"
    },
    _qBittorrent: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo pacman -S qbittorrent"
    },
    _slack: {
        instructions: "first, install yay. Then, execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "yay -S slack-desktop"
    },
    _standardNotes: {
        instructions: "install <em>App Image Launcher</em> first, then execute the below code in terminal and select \"OK\"/\"Yes\", then select \"Integrate and Run\" on the pop-up.",
        code: "wget https://github.com/standardnotes/desktop/releases/download/v3.0.25/Standard-Notes-3.0.25.AppImage && \n./Standard-Notes-3.0.25.AppImage"
    },
    _visualStudioCode: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo pacman -Sy && \nsudo pacman -S git -y && \ncd ~/Downloads && git clone https://AUR.archlinux.org/visual-studio-code-bin.git && \ncd visual-studio-code-bin/ && \nmakepkg -s && \nsudo pacman -U visual-studio-code-bin-*.pkg.tar.xz -y && \ncd ../ && \nsudo rm -rfv visual-studio-code-bin/"
    },
    _papirus: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo pacman -S papirus-icon-theme"
    },
    _arc: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo pacman -S arc-icon-theme"
    },
    _flatRemix: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "git clone https://github.com/daniruiz/flat-remix && \nmkdir -p ~/.icons && \ncp -r flat-remix/Flat-Remix* ~/.icons/ && \ngsettings set org.gnome.desktop.interface icon-theme \"Flat-Remix\""
    },
    _moka: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo pacman -S moka-icone-theme"
    },
    _faba: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo pacman -S faba-icon-theme"
    },
    _vimix: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "yay -S vimix-icon-theme"
    },
    _ant: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "yay -S ant-gtk-theme"
    },
    _yay: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo pacman -S yay"
    },

    _distSummary: "<p>Arch Linux  is a Linux distribution for computers based on x86-64 architectures. Arch adheres to five principles: simplicity, modernity, pragmatism, user centrality and versatility. In general, the principles maintain minimal distribution-specific changes, minimal breakage with updates, pragmatic over ideological design choices, user-friendliness, and minimal bloat.</p>",
    _logo: `<i class="fl-archlinux sideLogo-solus" aria-hidden="true"></i>`,
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
    get arc() {
        return this._arc;
    },
    get flatRemix() {
        return this._flatRemix;
    },
    get faba() {
        return this._faba;
    },
    get ant() {
        return this._ant;
    },
    get moka() {
        return this._moka;
    },
    get vimix() {
        return this._vimix;
    },
    get yay() {
        return this._yay;
    },
    get logo() {
        return this._logo;
    }
};


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
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "wget https://code.visualstudio.com/docs/?dv=linux64_deb && \ncd ~/Downloads && \nsudo dpkg -i code_*.deb \nsudo apt-get install -f"
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

// elementary
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
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "wget https://code.visualstudio.com/docs/?dv=linux64_deb && \ncd ~/Downloads && \nsudo dpkg -i code_*.deb \nsudo apt-get install -f"
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

const notSure = {
    notSure: {
        instructions: "Execute the following in terminal (crtl+t or cmd+t on most distros) to find out what OS you\'re using:",
        code: "cat /etc/issue"
    }
}


// solus
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
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "wget https://code.visualstudio.com/docs/?dv=linux64_deb && \ncd ~/Downloads && \nsudo dpkg -i code_*.deb \nsudo apt-get install -f"
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

