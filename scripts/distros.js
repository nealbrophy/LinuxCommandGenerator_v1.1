// OPERATING SYSTEMS


// arch
const arch = {
    _appImageLauncher: {},
    _atom: {},
    _bitWarden: {},
    _chrome: {},
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
    _distSummary: "<p>Arch Linux  is a Linux distribution for computers based on x86-64 architectures. Arch adheres to five principles: simplicity, modernity, pragmatism, user centrality and versatility. In general, the principles maintain minimal distribution-specific changes, minimal breakage with updates, pragmatic over ideological design choices, user-friendliness, and minimal bloat.</p>",
    _logo: `<i class="fa fa-archlinux"></i>`,
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


// debian
const debian = {
    _appImageLauncher: {},
    _atom: {},
    _bitWarden: {},
    _chrome: {},
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
    _distSummary: "<p>Debian, also known as Debian GNU/Linux, is a Linux distribution composed of free and open-source software, developed by the community-supported Debian Project, which was established by Ian Murdock on August 16, 1993. Debian is one of the oldest operating systems based on the Linux kernel. The project is coordinated over the Internet by a team of volunteers guided by the Debian Project Leader and three foundational documents: the Debian Social Contract, the Debian Constitution, and the Debian Free Software Guidelines. New distributions are updated continually, and the next candidate is released after a time-based freeze.</p>",
    _logo: `<i class="fa fa-debian" aria-hidden="true"></i>`,
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

// elementary
const elementary = {
    _appImageLauncher: {},
    _atom: {},
    _bitWarden: {},
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
    _nodeJS: {
        instructions: "",
        code:"sudo apt-get install curl && \ncurl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash - && \nsudo apt-get install -y nodejs"
    },
    _opera: {
        instructions: "",
        code: "wget -qO- https://deb.opera.com/archive.key | sudo apt-key add - && \nsudo add-apt-repository \"deb [arch=i386,amd64] https://deb.opera.com/opera-stable/ stable non-free\" && \nsudo apt install opera-stable -y"
    },
    _slack: "",
    _standardNotes: "",
    _tor: {
        instructions: "",
        code: "sudo add-apt-repository ppa:webupd8team/tor-browser && \nsudo apt-get update && \nsudo apt-get upgrade -y && \nsudo apt-get install tor-browser"
    },
    _tweaks: {
        instructions: "",
        code: "sudo apt install software-properties-common && \nsudo add-apt-repository ppa:philip.scott/elementary-tweaks && \nsudo apt-get update && \nsudo apt-get install elementary-tweaks"},
    _papirus: {},
    _flatery: {},
    _flatRemix: {},
    _vimix: {},
    _uniform: {},
    _distSummary: "elementary OS is a Linux distribution based on Ubuntu that focuses mainly on non-technical users. It promotes itself as a “fast, open, and privacy-respecting” replacement to macOS and Windows and has a pay-what-you-want model. The human interface guidelines of the elementary OS project focus on immediate usability with a gentle learning curve, rather than full-fledged customization.[9] The three core rules the developers set for themselves were \"concision\", \"accessible configuration\" and \"minimal documentation\".",
    _logo: `<span class="elementaryLogo">e</span>`,
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
    get nodeJS() {
        return this._nodeJS;
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
    _bitWarden: {},
    _chrome: {},
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
    _logo: `<i class="icofont-sail-boat"></i>`,
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
        instructions: "",
        code: "wget https://github.com/AppImage/appimaged/releases && \nsudo dpkg -i appimaged_*.deb && \nsystemctl --user add-wants default.target appimaged && \nsystemctl --user start appimaged"},
    _atom: {},
    _bitWarden: {},
    _chrome: {
        instructions: "",
        code: "sudo apt-get install libxss1 libappindicator1 libindicator7 -y && \nwget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \nsudo dpkg -i google-chrome*.deb && \nsudo apt-get install -f && \nsudo apt autoremove -y"},
    _firefox: {
        instructions: "",
        code: "wget https://download.mozilla.org/?product=firefox-latest-ssl&os=linux64&lang=en-US && cd ~/Downloads/ && tar xjf firefox-*.tar.bz2 && sudo rm -r /opt/firefox && sudo mv firefox /opt/firefox72"},
    _git: {},
    _gitKraken: {},
    _kdeConnect: {},
    _slack: {},
    _standardNotes: {
        instructions: "",
        code: "wget https://github.com/standardnotes/desktop/releases/download/v3.0.25/Standard-Notes-3.0.25.AppImage && \nmv ~/Downloads/Standard-Notes-3.0.25.AppImage ~/Standard-Notes-3.0.25.AppImage && cd ~ && \nchmod a+x Standard-Notes-3.0.25.AppImage"},
    _papirus: {},
    _flatery: {},
    _flatRemix: {},
    _vimix: {},
    _uniform: {},
    _distSummary: "<p>Ubuntu is a free and open-source Linux distribution based on Debian. Ubuntu is released every six months, with long-term support (LTS) releases every two years. Ubuntu is developed by Canonical, and a community of other developers, under a meritocratic governance model. Canonical provides security updates and support for each Ubuntu release, starting from the release date and until the release reaches its designated end-of-life (EOL) date. Canonical generates revenue through the sale of premium services related to Ubuntu.</p>",
    _logo: `<i class="fab fa-ubuntu"></i>`,
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

