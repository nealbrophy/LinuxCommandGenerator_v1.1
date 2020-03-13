// arch linux
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