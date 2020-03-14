// openSUSE Leap
const suse = {
    _atom: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: ""
    },
    _chrome: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: ""
    },
    _gitKraken: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: ""
    },
    _slack: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: ""
    },
    _visualStudioCode: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: ""
    },
    _numlockx: {
        instructions: "download the numlockx file from <a href=\"https://www.archlinux.org/packages/community/x86_64/numlockx/\">https://www.archlinux.org/packages/community/x86_64/numlockx/</a> then execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros) and finally when editing the .conf file add <code><mark>greeter-setup-script=/usr/bin/numlockx on</mark></code> in the <code><strong>[Seat:*]</strong></code> section",
        code: ""
    },
    _flatRemix: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: ""
    },
    _vimix: {
        instructions: "execute the below in terminal (<code>cmd+t</code> or <code>ctrl+alt+t</code> on most distros).",
        code: ""
    },
    _distSummary: "<p>openSUSE, formerly SUSE Linux and SuSE Linux Professional, is a Linux distribution sponsored by SUSE Linux GmbH and other companies. It is widely used throughout the world. The focus of its development is creating usable open-source tools for software developers and system administrators, while providing a user-friendly desktop and feature-rich server environment.</p>",
    _logo: `<i class="fl-opensuse" aria-hidden="true"></i>`,
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