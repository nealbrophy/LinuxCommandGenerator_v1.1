// openSUSE Leap
const suse = {
    _appImageLauncher: {
        instructions: "Download the appropriate RPM from <a href=\"https://github.com/TheAssassin/AppImageLauncher/releases\">https://github.com/TheAssassin/AppImageLauncher/releases</a> then execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo zypper install ~/Downloads/rpms/appimagelauncher-2.1.0-travis897.d1be7e7.x86_64.rpm"
    },
    _atom: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "wget -c https://atom.io/download/rpm -O atom.x86_64.rpm && \nsudo zypper install atom.x86_64.rpm"
    },
    _chrome: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo zypper ar http://dl.google.com/linux/chrome/rpm/stable/x86_64 Google-Chrome && \nwget https://dl.google.com/linux/linux_signing_key.pub && \nsudo rpm --import linux_signing_key.pub && sudo zypper ref -f && \nsudo zypper in google-chrome-stable"
    },
    _gitKraken: {
        instructions: "First install <code>SNAP</code> then execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo snap install gitkraken"
    },
    _firefox: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo zypper in MozillaFirefox-branding-openSUSE"
    },
    _kdeConnect: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo zypper in kdeconnect-kde"
    },
    _qBittorrent: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo zypper in qbittorrent"
    },
    _sublimeText: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo rpm -v --import https://download.sublimetext.com/sublimehq-rpm-pub.gpg && sudo zypper addrepo -g -f https://download.sublimetext.com/rpm/stable/x86_64/sublime-text.repo && sudo zypper install sublime-text"
    },
    _snap: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo zypper addrepo --refresh https://download.opensuse.org/repositories/system:/snappy/openSUSE_Tumbleweed snappy && \nsudo zypper --gpg-auto-import-keys refresh && sudo zypper dup --from snappy && \nsudo zypper install snapd && sudo systemctl enable snapd && sudo systemctl start snapd && \nsudo systemctl enable snapd.apparmor && sudo systemctl start snapd.apparmor"
    },
    _visualStudioCode: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: "sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc && \nsudo zypper ar https://packages.microsoft.com/yumrepos/vscode vscode && sudo zypper refresh && \nsudo zypper install code"
    },
    _papirus: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: ""
    },
    _distSummary: "<p>openSUSE, formerly SUSE Linux and SuSE Linux Professional, is a Linux distribution sponsored by SUSE Linux GmbH and other companies. It is widely used throughout the world. The focus of its development is creating usable open-source tools for software developers and system administrators, while providing a user-friendly desktop and feature-rich server environment.</p>",
    _logo: `<i class="fl-opensuse" aria-hidden="true"></i>`,
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
    get sublimeText() {
        return this._sublimeText;
    },
    get snap() {
        return this._snap;
    },
    get visualStudioCode() {
        return this._visualStudioCode;
    },
    get papirus() {
        return this._papirus;
    },
    get logo() {
        return this._logo;
    }
};