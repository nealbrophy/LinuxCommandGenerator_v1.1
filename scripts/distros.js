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
const elementary = {
    tweaks: 
        "<code>sudo apt install software-properties-common &&<br>sudo add-apt-repository ppa:philip.scott/elementary-tweaks &&<br>sudo apt-get update &&<br>sudo apt-get install elementary-tweaks</code>",
    mcMojave: 
        "<code>sudo apt-get install gtk2-engines-murrine gtk2-engines-pixbuf -y </code><br><p>Go to <a href='#'>link</a>and and download the desired version.</p><br><code>cd Downloads &&<br>tar xvf Mojave-*.tar.xz &&<br>sudo mv Mojave-* /usr/share/themes/</code>"



};