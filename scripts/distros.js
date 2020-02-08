// OPERATING SYSTEMS


// arch
const arch = {
    _appImageLauncher: {
        instructions: "",
        code: "sudo pacman -S appimagelauncher-git"
    },
    _atom: {},
    _chrome: {
        instructions: "",
        code: "sudo pacman -S git && \ncd Downloads && \ngit clone https://aur.archlinux.org/google-chrome.git && \ncd google-chrome/ && \nmakepkg -s -y && \nsudo pacman -U google-chrome-63.0.3239.108-1-x86_64.pkg.tar.xz"
    },
    _firefox: {},
    _git: {},
    _gitKraken: {},
    _kdeConnect: {},
    _slack: {},
    _standardNotes: {
        instructions: "<p>Install App Image Launcher first, then execute the below code in terminal and select \"Integrate and Run\" on the pop-up.</p>",
        code: "wget https://github.com/standardnotes/desktop/releases/download/v3.0.25/Standard-Notes-3.0.25.AppImage && \nchmod a+x Standard-Notes-3.0.25.AppImage && \n./Standard-Notes-3.0.25.AppImage"
    },
    _visualStudioCode: {
        instructions: "",
        code: "sudo pacman -Sy && \nsudo pacman -S git -y && \ncd ~/Downloads && git clone https://AUR.archlinux.org/visual-studio-code-bin.git && \ncd visual-studio-code-bin/ && \nmakepkg -s && \nsudo pacman -U visual-studio-code-bin-*.pkg.tar.xz -y && \ncd ../ && \nsudo rm -rfv visual-studio-code-bin/"
    },
    _papirus: {
        instructions: "",
        code: "sudo pacman -S papirus-icon-theme"
    },
    _flatery: {},
    _flatRemix: {
        instructions: "",
        code: "git clone https://github.com/daniruiz/flat-remix && \nmkdir -p ~/.icons && \ncp -r flat-remix/Flat-Remix* ~/.icons/ && \ngsettings set org.gnome.desktop.interface icon-theme \"Flat-Remix\""
    },
    _vimix: {},
    _uniform: {
        instructions: "",
        code: "yaourt -S uniform-icon-theme"
    },
    _distSummary: "<p>Arch Linux  is a Linux distribution for computers based on x86-64 architectures. Arch adheres to five principles: simplicity, modernity, pragmatism, user centrality and versatility. In general, the principles maintain minimal distribution-specific changes, minimal breakage with updates, pragmatic over ideological design choices, user-friendliness, and minimal bloat.</p>",
    _logo: `<i class="fl-archlinux sideLogo" aria-hidden="true"></i>`,
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
    get mcMojave() {
        return this._mcMojave;
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
    get flatery() {
        return this._flatery;
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


// debian
const debian = {
    _appImageLauncher: {
        instructions: "<p>Go <a href=\"https://github.com/TheAssassin/AppImageLauncher/releases\">here</a> and download the appropriate <code>.deb</code> file. Then execute the below in terminal.",
        code: "sudo dpkg -i appimagelauncher_*.deb"
    },
    _atom: {},
    _chrome: {
        instructions: "",
        code: "sudo apt-get install libxss1 libappindicator1 libindicator7 -y && \nwget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \nsudo dpkg -i google-chrome*.deb && \nsudo apt-get install -f && \nsudo apt autoremove -y"
    },
    _firefox: {
        instructions: "",
        code: "wget https://download.mozilla.org/?product=firefox-latest-ssl&os=linux64&lang=en-US && \ncd ~/Downloads/ && \ntar xjf firefox-*.tar.bz2 && \nsudo rm -r /opt/firefox && \nsudo mv firefox /opt/firefox72"
    },
    _git: {},
    _gitKraken: {},
    _kdeConnect: {},
    _slack: {},
    _standardNotes: {
        instructions: "<p>Install App Image Launcher first, then execute the below code in terminal and select \"Integrate and Run\" on the pop-up.</p>",
        code: "wget https://github.com/standardnotes/desktop/releases/download/v3.0.25/Standard-Notes-3.0.25.AppImage && \nchmod a+x Standard-Notes-3.0.25.AppImage && \n./Standard-Notes-3.0.25.AppImage"
    },
    _visualStudioCode: {
        instructions: "",
        code: "wget https://code.visualstudio.com/docs/?dv=linux64_deb && \ncd ~/Downloads && \nsudo dpkg -i code_*.deb \nsudo apt-get install -f"
    },
    _papirus: {
        instructions: "",
        code: "sudo sh -c \"echo 'deb http://ppa.launchpad.net/papirus/papirus/ubuntu xenial main' > /etc/apt/sources.list.d/papirus-ppa.list\" && \nsudo apt-key adv --recv-keys --keyserver keyserver.ubuntu.com E58A9D36647CAE7F && \nsudo apt-get update && \nsudo apt-get install papirus-icon-theme"
    },
    _flatery: {},
    _flatRemix: {},
    _vimix: {},
    _uniform: {
        instructions: "",
        code: "sudo add-apt-repository ppa:noobslab/icons2 && \nsudo apt-get update && \nsudo apt-get install uniform-icons"
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
    get mcMojave() {
        return this._mcMojave;
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
    get flatery() {
        return this._flatery;
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

// elementary
const elementary = {
    _appImageLauncher: {
        instructions: "<p>Go <a href=\"https://github.com/TheAssassin/AppImageLauncher/releases\">here</a> and download the appropriate .deb file. Then execute the below in terminal.",
        code: "sudo dpkg -i appimagelauncher_*.deb"
    },
    _atom: {
        instructions: "",
        code: "sudo add-apt-repository ppa:webupd8team/atom && \nsudo apt-get update && \nsudo apt-get install -y atom"
    },
    _chrome: {
        instructions:"",
        code: "wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \nsudo dpkg -i google-chrome*.deb"
    },
    _firefox: {
        instructions:"",
        code: "wget https://download.mozilla.org/?product=firefox-latest-ssl&os=linux64&lang=en-US && \ncd ~/Downloads/ && \ntar xjf firefox-*.tar.bz2 && \nsudo rm -r /opt/firefox && \nsudo mv firefox /opt/firefox72"
    },
    _git: "",
    _gitKraken: {
        instructions: "",
        code: "wget https://release.gitkraken.com/linux/gitkraken-amd64.deb && \nsudo dpkg -i gitkraken-amd64.deb"
    },
    _kdeConnect: "",
    _mcMojave: {
        instructions: "<p>Go <a href='#' class='instructionLink'>here</a> and and download the desired version.</p>",
        code: "sudo apt-get install gtk2-engines-murrine gtk2-engines-pixbuf -y && \ncd Downloads && tar xvf Mojave-*.tar.xz && \nsudo mv Mojave-* /usr/share/themes/"
    },
    _numlockAtLogin: {
        instructions: "Run the below code in terminal and edit the results to change `#activate-numlock=true` to `activate-numlock=true` (i.e. delete the `#` from the start of the line) and write-out/save the file.",
        code: "sudo nano ///etc/lightdm/io.elementary.greeter.conf"
    },
    _nodeJS: {
        instructions: "",
        code:"sudo apt-get install curl && \ncurl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash - && \nsudo apt-get install -y nodejs"
    },
    _opera: {
        instructions: "",
        code: "wget -qO- https://deb.opera.com/archive.key | sudo apt-key add - && \nsudo add-apt-repository \"deb [arch=i386,amd64] https://deb.opera.com/opera-stable/ stable non-free\" && \nsudo apt install opera-stable -y"
    },
    _openAsRoot: {
        instructions: "<p>First, paste the following in terminal: <code>sudo nano /usr/share/contractor/Open_as_admin.contract</code>. Then paste the following and write-out/save the file:",
        code: "[Contractor Entry] \nName=Open folder as root \nIcon=gksu-root-terminal \nDescription=Open folder as root \nMimeType=inode;application/x-sh;application/x-executable; \nExec=/usr/bin/io.elementary.files-pkexec \nGettext-Domain=pantheon-files"
    },
    _slack: {},
    _standardNotes: {
        instructions: "<p>Install App Image Launcher first, then execute the below code in terminal and select \"Integrate and Run\" on the pop-up.</p>",
        code: "wget https://github.com/standardnotes/desktop/releases/download/v3.0.25/Standard-Notes-3.0.25.AppImage && \nchmod a+x Standard-Notes-3.0.25.AppImage && \n./Standard-Notes-3.0.25.AppImage"
    },
    _tor: {
        instructions: "",
        code: "sudo add-apt-repository ppa:webupd8team/tor-browser && \nsudo apt-get update && \nsudo apt-get upgrade -y && \nsudo apt-get install tor-browser"
    },
    _tweaks: {
        instructions: "",
        code: "sudo apt install software-properties-common && \nsudo add-apt-repository ppa:philip.scott/elementary-tweaks && \nsudo apt-get update && \nsudo apt-get install elementary-tweaks"},
    _papirus: {
        instructions: "",
        code: "sudo add-apt-repository ppa:papirus/papirus && \nsudo apt update && \nsudo apt install papirus-icon-theme"
    },
    _flatery: {},
    _flatRemix: {},
    _vimix: {},
    _uniform: {},
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
    get git() {
        return this._git;
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
    get papirus() {
        return this._papirus;
    },
    get flatery() {
        return this._flatery;
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


// solus
const solus = {
    _appImageLauncher: {},
    _atom: {},
    _chrome: {
        instructions: "",
        code: "sudo eopkg install google-chrome"
    },
    _firefox: {},
    _git: {},
    _gitKraken: {},
    _kdeConnect: {},
    _slack: {},
    _standardNotes: {},
    _papirus: {},
    _flatery: {},
    _flatRemix: {},
    _vimix: {},
    _uniform: {},
    _distSummary: "<p>Solus is an independently developed desktop operating system based on the Linux kernel and using its own desktop environment derived from GNOME. Starting with the Debian branch of Linux it migrated to a unique approach including Pisi and Evolve OS. It is offered as a curated rolling release model under the slogan \"Install Today. Updates Forever\". Solus contains a wide variety of desktop environments depending on release chosen, options include Solus' own Budgie Desktop, GNOME, MATE and KDE Plasma.</p>",
    _logo: `<i class="icofont-sail-boat sideLogo" aria-hidden="true"></i>`,
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
    get mcMojave() {
        return this._mcMojave;
    },
    get standardNotes() {
        return this._standardNotes;
    },
    get slack() {
        return this._slack;
    },
    get papirus() {
        return this._papirus;
    },
    get flatery() {
        return this._flatery;
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

// ubuntu
const ubuntu = {
    _appImageLauncher: {
        instructions: "<p>Go <a href=\"https://github.com/TheAssassin/AppImageLauncher/releases\">here</a> and download the appropriate .deb file. Then execute the below in terminal.",
        code: "sudo dpkg -i appimagelauncher_*.deb"
    },
    _atom: {
        instructions: "",
        code: "sudo add-apt-repository ppa:webupd8team/atom && \nsudo apt-get update && \nsudo apt-get install -y atom"
    },
    _chrome: {
        instructions: "",
        code: "sudo apt-get install libxss1 libappindicator1 libindicator7 -y && \nwget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \nsudo dpkg -i google-chrome*.deb && \nsudo apt-get install -f && \nsudo apt autoremove -y"},
    _firefox: {
        instructions: "",
        code: "wget https://download.mozilla.org/?product=firefox-latest-ssl&os=linux64&lang=en-US && cd ~/Downloads/ && tar xjf firefox-*.tar.bz2 && sudo rm -r /opt/firefox && sudo mv firefox /opt/firefox72"},
    _git: {
        instructions: "",
        code: "sudo apt install git"
    },
    _gitKraken: {
        instructions: "",
        code: "wget https://release.gitkraken.com/linux/gitkraken-amd64.deb && \n sudo dpkg -i gitkraken*.deb"
    },
    _kdeConnect: {
        instructions: "",
        code: "sudo apt install kdeconnect"
    },
    _slack: {
        instructions: "",
        code: "wget https://downloads.slack-edge.com/linux_releases/slack-desktop-4.3.2-amd64.deb && \nsudo dpkg -i slack*.deb && \nsudo apt -f install -y"
    },
    _standardNotes: {
        instructions: "",
        code: "wget https://github.com/standardnotes/desktop/releases/download/v3.0.25/Standard-Notes-3.0.25.AppImage && \nmv ~/Downloads/Standard-Notes-3.0.25.AppImage ~/Standard-Notes-3.0.25.AppImage && cd ~ && \nchmod a+x Standard-Notes-3.0.25.AppImage"},
    _papirus: {
        instructions: "",
        code: "sudo add-apt-repository ppa:papirus/papirus && \nsudo apt update && \nsudo apt install papirus-icon-theme"
    },
    _flatery: {},
    _flatRemix: {},
    _vimix: {},
    _uniform: {},
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
    get mcMojave() {
        return this._mcMojave;
    },
    get standardNotes() {
        return this._standardNotes;
    },
    get slack() {
        return this._slack;
    },
    get papirus() {
        return this._papirus;
    },
    get flatery() {
        return this._flatery;
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

