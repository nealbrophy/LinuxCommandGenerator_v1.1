// OPERATING SYSTEMS


// arch
const arch = {
    _appImageLauncher: "",
    _atom: "",
    _bitWarden: "",
    _chrome: "",
    _firefox: "",
    _git: "",
    _gitKraken: "",
    _kdeConnect: "",
    _slack: "",
    _standardNotes: "",
    _papirus: "",
    _flatery: "",
    _flatRemix: "",
    _vimix: "",
    _uniform: "",
    _distSummary: "<p>Arch Linux  is a Linux distribution for computers based on x86-64 architectures. Arch adheres to five principles: simplicity, modernity, pragmatism, user centrality and versatility. In general, the principles maintain minimal distribution-specific changes, minimal breakage with updates, pragmatic over ideological design choices, user-friendliness, and minimal bloat.</p>",
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
    }
};


// debian
const debian = {
    _appImageLauncher: "",
    _atom: "",
    _bitWarden: "",
    _chrome: "",
    _firefox: "",
    _git: "",
    _gitKraken: "",
    _kdeConnect: "",
    _slack: "",
    _standardNotes: "",
    _papirus: "",
    _flatery: "",
    _flatRemix: "",
    _vimix: "",
    _uniform: "",
    _distSummary: "<p>Debian, also known as Debian GNU/Linux, is a Linux distribution composed of free and open-source software, developed by the community-supported Debian Project, which was established by Ian Murdock on August 16, 1993. Debian is one of the oldest operating systems based on the Linux kernel. The project is coordinated over the Internet by a team of volunteers guided by the Debian Project Leader and three foundational documents: the Debian Social Contract, the Debian Constitution, and the Debian Free Software Guidelines. New distributions are updated continually, and the next candidate is released after a time-based freeze.</p>",
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
    }
};

// elementary
const elementary = {
    _appImageLauncher: "",
    _atom: "",
    _bitWarden: "",
    _chrome: "",
    _firefox: "",
    _git: "",
    _gitKraken: "",
    _kdeConnect: "",
    _mcMojave: "<p>Go to <a href='#'>link</a> and and download the desired version.</p> sudo apt-get install gtk2-engines-murrine gtk2-engines-pixbuf -y && cd Downloads && tar xvf Mojave-*.tar.xz && sudo mv Mojave-* /usr/share/themes/",
    _slack: "",
    _standardNotes: "",
    _tweaks: "sudo apt install software-properties-common && sudo add-apt-repository ppa:philip.scott/elementary-tweaks && sudo apt-get update && sudo apt-get install elementary-tweaks",
    _papirus: "",
    _flatery: "",
    _flatRemix: "",
    _vimix: "",
    _uniform: "",
    _distSummary: "elementary OS is a Linux distribution based on Ubuntu that focuses mainly on non-technical users. It promotes itself as a “fast, open, and privacy-respecting” replacement to macOS and Windows and has a pay-what-you-want model. The human interface guidelines of the elementary OS project focus on immediate usability with a gentle learning curve, rather than full-fledged customization.[9] The three core rules the developers set for themselves were \"concision\", \"accessible configuration\" and \"minimal documentation\".",
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
    }

};


// solus
const solus = {
    _appImageLauncher: "",
    _atom: "",
    _bitWarden: "",
    _chrome: "",
    _firefox: "",
    _git: "",
    _gitKraken: "",
    _kdeConnect: "",
    _slack: "",
    _standardNotes: "",
    _papirus: "",
    _flatery: "",
    _flatRemix: "",
    _vimix: "",
    _uniform: "",
    _distSummary: "<p>Solus is an independently developed desktop operating system based on the Linux kernel and using its own desktop environment derived from GNOME. Starting with the Debian branch of Linux it migrated to a unique approach including Pisi and Evolve OS. It is offered as a curated rolling release model under the slogan \"Install Today. Updates Forever\". Solus contains a wide variety of desktop environments depending on release chosen, options include Solus' own Budgie Desktop, GNOME, MATE and KDE Plasma.</p>",
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
    }
};

// ubuntu
const ubuntu = {
    _appImageLauncher: "wget https://github.com/AppImage/appimaged/releases && sudo dpkg -i appimaged_*.deb && systemctl --user add-wants default.target appimaged && systemctl --user start appimaged",
    _atom: "",
    _bitWarden: "",
    _chrome: "sudo apt-get install libxss1 libappindicator1 libindicator7 -y && wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && sudo dpkg -i google-chrome*.deb && sudo apt-get install -f && sudo apt autoremove -y",
    _firefox: "wget https://download.mozilla.org/?product=firefox-latest-ssl&os=linux64&lang=en-US && cd ~/Downloads/ && tar xjf firefox-*.tar.bz2 && sudo rm -r /opt/firefox && sudo mv firefox /opt/firefox72",
    _git: "",
    _gitKraken: "",
    _kdeConnect: "",
    _slack: "",
    _standardNotes: "wget https://github.com/standardnotes/desktop/releases/download/v3.0.25/Standard-Notes-3.0.25.AppImage && mv ~/Downloads/Standard-Notes-3.0.25.AppImage ~/Standard-Notes-3.0.25.AppImage && cd ~ && chmod a+x Standard-Notes-3.0.25.AppImage",
    _papirus: "",
    _flatery: "",
    _flatRemix: "",
    _vimix: "",
    _uniform: "",
    _distSummary: "<p>Ubuntu is a free and open-source Linux distribution based on Debian. Ubuntu is released every six months, with long-term support (LTS) releases every two years. Ubuntu is developed by Canonical, and a community of other developers, under a meritocratic governance model. Canonical provides security updates and support for each Ubuntu release, starting from the release date and until the release reaches its designated end-of-life (EOL) date. Canonical generates revenue through the sale of premium services related to Ubuntu.</p>",
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
    }
};

