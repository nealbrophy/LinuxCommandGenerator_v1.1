// GLOBAL VARs
let usersOS; // to hold user's OS selection
let appSelection; // to hold user's app selection
let choice = "";

// EVENT LISTENERS
// add click listener to OS buttons
let distros = document.getElementsByClassName("distro");
for (i = 0; i < distros.length; i++) {
    distros[i].addEventListener("click", function() {
        usersOS = (this.id);
        choice += usersOS;
    });
}
// add clicks listener to app buttons
let apps = document.getElementsByClassName("applications");
for (i = 0; i < apps.length; i++) {
    apps[i].addEventListener("click", function() {
        if (usersOS) {
            appSelection = (this.id);
            choice += "." + appSelection;
            console.log(choice);
        } else {
            console.log("Please select an OS");
        }
        
    });
}

// OPERATING SYSTEMS

// ubuntu object
const ubuntu = {
    appImageLauncher: "wget https://github.com/AppImage/appimaged/releases && sudo dpkg -i appimaged_*.deb && systemctl --user add-wants default.target appimaged && systemctl --user start appimaged",
    firefox: "wget https://download.mozilla.org/?product=firefox-latest-ssl&os=linux64&lang=en-US && cd ~/Downloads/ && tar xjf firefox-*.tar.bz2 && sudo rm -r /opt/firefox && sudo mv firefox /opt/firefox72",
    chrome: "sudo apt-get install libxss1 libappindicator1 libindicator7 -y && wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && sudo dpkg -i google-chrome*.deb && sudo apt-get install -f && sudo apt autoremove -y",
    standardNotes: "wget https://github.com/standardnotes/desktop/releases/download/v3.0.25/Standard-Notes-3.0.25.AppImage && mv ~/Downloads/Standard-Notes-3.0.25.AppImage ~/Standard-Notes-3.0.25.AppImage && cd ~ && chmod a+x Standard-Notes-3.0.25.AppImage"
};



