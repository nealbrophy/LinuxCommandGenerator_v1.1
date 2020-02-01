// GLOBAL VARs
let userOS; // to hold user's OS.
let selection; // to hold user's selection.
const choice = [];

// EVENT LISTENERS
// add click listener to OS buttons.
let distros = document.getElementsByClassName("distro");
for (i = 0; i < distros.length; i++) {
    distros[i].addEventListener("click", function() {
        document.getElementById("textAreaDump").innerText = "";

        // check if OS variable is already populated, if so empty it (and remove from choice arr).
        if (userOS) {
         userOS = "";
         choice.shift();
        }

        // if user clicks "Not Sure", output instructions.
        if (this.id === "notSure") {
            document.getElementById("textAreaDump").innerText = '$ cat /etc/issue';

        // if user clicks valid OS, populate userOS var and add to choice arr.
        } else if (!userOS && this.id !== "notSure") { 
            userOS = this.id;
            choice.unshift(userOS);
            console.log(choice);
        }
    });
}

// add click listener to App buttons.
let toInstall = document.getElementsByClassName("select");
for (i = 0; i < toInstall.length; i++) {
    toInstall[i].addEventListener("click", function() {

        // check if selection var is already populated, if so empty it and remove from choice arr
        if (selection) {
            selection = "";
            choice.pop();
            }

        // check if valid OS has been selected, if not print warning
        if (!userOS || userOS === "NotSure") {
            console.log("Please select an OS");

            // check if app var is already populated and if so empty it (and remove from choice arr)
        } else {
            selection = (this.id);
            choice.push(selection);
            console.log(choice);
        }
    });
}

// OPERATING SYSTEMS

// ubuntu obj
const ubuntu = {
    appImageLauncher: "wget https://github.com/AppImage/appimaged/releases && sudo dpkg -i appimaged_*.deb && systemctl --user add-wants default.target appimaged && systemctl --user start appimaged",
    firefox: "wget https://download.mozilla.org/?product=firefox-latest-ssl&os=linux64&lang=en-US && cd ~/Downloads/ && tar xjf firefox-*.tar.bz2 && sudo rm -r /opt/firefox && sudo mv firefox /opt/firefox72",
    chrome: "sudo apt-get install libxss1 libappindicator1 libindicator7 -y && wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && sudo dpkg -i google-chrome*.deb && sudo apt-get install -f && sudo apt autoremove -y",
    standardNotes: "wget https://github.com/standardnotes/desktop/releases/download/v3.0.25/Standard-Notes-3.0.25.AppImage && mv ~/Downloads/Standard-Notes-3.0.25.AppImage ~/Standard-Notes-3.0.25.AppImage && cd ~ && chmod a+x Standard-Notes-3.0.25.AppImage"
};

// debian obj
const debian = {};

// solus obj
const solus = {};

// elementary obj
const elementary = {};


