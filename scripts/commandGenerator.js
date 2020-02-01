// GLOBAL VARs
let userOS; // to hold user's OS.
let selection; // to hold user's selection.
let choice;

// EVENT LISTENERS
// add click listener to OS buttons.
let distros = document.getElementsByClassName("distro");
for (i = 0; i < distros.length; i++) {
    distros[i].addEventListener("click", function() {
        document.getElementById("outputIntro").innerText = "";
        document.getElementById("outputContent").innerText = "";
        choice = document.getElementById(this.id).innerText;
        switch (this.id) {
            case "arch":
                userOS = arch;
                break;
            case "debian":
                userOS = debian;
                break;
            case "elementary":
                userOS = elementary;
                break;
            case "solus":
                userOS = solus;
                break;
            case "ubuntu":
                userOS = ubuntu;
                break;
            case "notSure":
                document.getElementById("outputIntro").innerText = "Enter the following to find out what OS you\'re using:";
                document.getElementById("outputContent").innerHTML = "<code>$ cat /etc/issue</code>";
        }
        if (userOS && this.id !== "notSure") {
            document.getElementById("outputIntro").innerText = `Please select an App, Theme, or Icon pack to install on ${choice}`;
        }

        // check if OS variable is already populated, if so empty it (and remove from choice arr).
        // if (userOS) {
        //  userOS = "";
        //  choice.shift();
        // }

        // if user clicks "Not Sure", output instructions.
        // if (this.id === "notSure") {
            

        // // if user clicks valid OS, populate userOS var and add to choice arr.
        // } else if (!userOS && this.id !== "notSure") { 
        //     userOS = this.id;
        //     choice.unshift(userOS);
        //     console.log(choice);
        //     console.log(this[selection]);
        // }
        // if (selection) {
        //     document.getElementById("dumpName").innerText = `Enter the following in your terminal window to install ${document.getElementById(selection).innerText} on ${document.getElementById(userOS).innerText}`;
        //     document.getElementById("textAreaDump").innerHTML = elementary.mcMojave;
        // } else {
        //     document.getElementById("dumpName").innerText = `Please select an App, Theme, or Icon pack to install on ${document.getElementById(userOS).innerText}`;
        // }
    });
}

// add click listener to App buttons.
let toInstall = document.getElementsByClassName("select");
for (i = 0; i < toInstall.length; i++) {
    toInstall[i].addEventListener("click", function() {

        // check if selection var is already populated, if so empty it and remove from choice arr
        if (selection) {
            selection = "";
            }

        // check if valid OS has been selected, if not print warning
        if (!userOS || userOS === "NotSure") {
            document.getElementById("outputIntro").innerText = "Please select an Operating System above.";

            // check if app var is already populated and if so empty it (and remove from choice arr)
        } else {
            selection = (this.id);
            console.log(userOS[this]);
            document.getElementById("outputIntro").innerHTML = `<p>Enter the following in your terminal (<code>cmd+t</code> or <code>ctrl+shift+t</code> on most Linux systems) to install <span class="installName">${document.getElementById(selection).innerText}</span> on <span class="osName">${choice}</span></p>`;
            document.getElementById("outputContent").innerHTML = userOS[selection];
        }
    });
}



