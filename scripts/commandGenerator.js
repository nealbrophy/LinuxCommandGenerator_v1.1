// GLOBAL VARs
let userOS;
let osName; // to hold name of users OS choice
let osObj; // reference to os object matching user choice name
let selection; // to hold user app/icon/theme selection.
let choice; // to hold text name of user's OS

// EVENT LISTENERS
// add click listener to OS buttons.
let distros = document.getElementsByClassName("distro");
for (let i = 0; i < distros.length; i++) {
    distros[i].addEventListener("click", function () {

        // clear any text from the output section
        document.getElementById("outputIntro").innerText = "";
        document.getElementById("outputContent").innerText = "";

        // store the text from the clicked id
        choice = document.getElementById(this.id).innerText;

        // switch statement to populate userOS var with object name
        switch (this.id) {
            case "arch":
                osObj = arch;
                osName = this.id;
                break;
            case "debian":
                osObj = debian;
                osName = this.id;
                break;
            case "elementary":
                osObj = elementary;
                osName = this.id;
                break;
            case "solus":
                osObj = solus;
                osName = this.id;
                break;
            case "ubuntu":
                osObj = ubuntu;
                osName = this.id;
                break;
            case "notSure":
                document.getElementById("outputIntro").innerText = "Enter the following to find out what OS you\'re using:";
                document.getElementById("outputContent").innerText = "$ cat /etc/issue";
        }
        if (osObj && this.id !== "notSure") {
            document.getElementById("outputIntro").innerText = `Please select an App, Theme, or Icon pack to install on ${choice}.`;
        }

        // check what apps are available for selected distro
        let availableApps = document.getElementsByClassName("select");
        for (let j = 0; j < availableApps.length; j++) {
            let currentID = availableApps[j].id;
            console.log(availableApps[j].id);
            if (osObj.hasOwnProperty(currentID)) {
                document.getElementById(currentID).removeAttribute("disabled");
            } else {
                document.getElementById(currentID).setAttribute("disabled", "true");
                
                
            }
        }
    });
}

// add click listener to App buttons.
let toInstall = document.getElementsByClassName("select");
for (i = 0; i < toInstall.length; i++) {
    toInstall[i].addEventListener("click", function () {

        // check if selection var is already populated, if so empty it
        if (selection) {
            selection = "";
        }

        // check if valid OS has been selected, if not print message
        if (!osObj || choice === "Not Sure") {
            document.getElementById("outputIntro").innerText = "Please select an Operating System above.";
            document.getElementById("outputContent").innerText = "";

            // check if var is already populated and if so empty it
        } else {
            selection = (this.id);
            document.getElementById("outputIntro").innerHTML = `<p>Enter the following in your terminal (<code>cmd+t</code> or <code>ctrl+shift+t</code> on most Linux systems) to install <span class="installName">${document.getElementById(selection).innerText}</span> on <span class="osName">${choice}</span>:</p>`;
            document.getElementById("outputContent").innerHTML = `<code>${osObj[selection]}</code>`;

        }
    });
}


// add click listener to copy button
document.getElementById("copyOutput").addEventListener("click", function () {
    console.log(document.getElementById("outputContent").innerText);
    copyToClipboard(document.getElementById("outputContent").innerText);
});

// basic copy to clipboard function
function copyToClipboard(inputText) {
    let textArea = document.createElement("textarea");
    textArea.value = inputText;
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        let successful = document.execCommand("copy");
        let msg = successful ? "successful" : "unsuccessful";
        console.log("Copy text was " + msg);
    } catch (err) {
        console.log("Copy failed", err);
    }

    document.body.removeChild(textArea);
}

// add click listener to add to list button
document.getElementById("saveOutput").addEventListener("click", function () {
    // check if OS has already been added to list object
    if (userList[osName]) {
        userList[osName][selection] = osObj[selection];
    } else {
        userList[osName] = {};
        userList[osName][selection] = osObj[selection];
    }

    console.log(userList[osName]);
    copyToClipboard(document.getElementById("outputContent").innerText);
});



// object to hold list of users chosen commands
const userList = {};
