/*  ===========
    GLOBAL VARs & OBJs
    =========== */
let userOS;
let osName; // to hold name of users OS choice
let osObj; // reference to os object matching user choice name
let selection; // to hold user app/icon/theme selection.
let choice; // to hold text name of user's OS
const userList = {}; // object to hold list of users chosen commands

/*  ==========
    FUNCTIONS
    ========== */
// grab os object and populate vars
const distroPicker = name => {
    switch (name) {
        case "arch":
            osObj = arch;
            osName = name;
            choice = "Arch Linux"
            break;
        case "debian":
            osObj = debian;
            osName = name;
            choice = "Debian"
            break;
        case "elementary":
            osObj = elementary;
            osName = name;
            choice = "Elementary OS"
            break;
        case "solus":
            osObj = solus;
            osName = name;
            choice = "Solus"
            break;
        case "ubuntu":
            osObj = ubuntu;
            osName = name;
            choice = "Ubuntu"
            break;
        case "notSure":
            document.getElementById("outputIntro").innerText = "Enter the following to find out what OS you\'re using:";
            document.getElementById("outputContent").innerText = "$ cat /etc/issue";
    }
    if (osObj && this.id !== "notSure") {
        document.getElementById("outputIntro").innerText = `Please select an App, Theme, or Icon pack to install on ${choice}.`;
    }
};

// check which apps are available for selected distro
const appChecker = () => {
    let availableApps = document.getElementsByClassName("select");
    for (let j = 0; j < availableApps.length; j++) {
        let currentID = availableApps[j].id;
        // console.log(availableApps[j].id);
        if (osObj.hasOwnProperty(currentID)) {
            document.getElementById(currentID).removeAttribute("disabled");
        } else {
            document.getElementById(currentID).setAttribute("disabled", "true");
        }
    }
};

// split code onto multiple lines for printing to screen
const codePrinter = codetobeprinted => {
    let codePrint = "";
    let codeSplit = [];
    console.log(osObj[codetobeprinted]);
    codeSplit = osObj[codetobeprinted].code.split("\n");
    for (let i = 0; i < codeSplit.length; i++) {
        codePrint += codeSplit[i] + '<br>';
    }
    document.getElementById("outputContent").innerHTML = `<code>${codePrint}</code>`;
}

// add distro & selected apps to list object
const addToList = (distname, selectionname) => {
    // check if OS has already been added to list object, if so app/theme/icon to it
    if (userList[distname]) {
        if (userList[distname][selectionname]) {
            console.log("Item already added")
        } else {
            console.log(userList[distname]);
            userList[distname][selectionname] = osObj[selection];
        }
    } else {
        // if OS hasnt' been added, add it then add app/theme/icon to it
        userList[distname] = {};
        userList[distname][selectionname] = osObj[selection];
    }
};

// add distro & selected apps to sidebar
const addToSidebar = (osinfo, selectioninfo) => {
    // check if distro is already in sidebar
    if (document.getElementById(`${osinfo}_side`)) {

        // if so, check if the distro element in sidebar already has the app
        if (document.getElementById(`${osinfo}_side_${selectioninfo}`)) {

            // if so, log warning
            M.toast({
                html: 'Item already on list!'
            });
        } else {
            // if not, create element to hold app name and append to os element withint sidebar
            let sideElementContent = document.createElement("span");
            sideElementContent.innerHTML = `${selectioninfo}`;
            sideElementContent.setAttribute("id", `${osinfo}_side_${selectioninfo}`);
            sideElementContent.setAttribute("class", "chip");
            document.getElementById(`${osinfo}_side`).appendChild(sideElementContent);
        }
    } else {
        // if distro not already in sidebar create element to hold it, populate it, and add ID
        let sideElement = document.createElement("p");
        sideElement.innerHTML = `${osObj.logo}:`;
        sideElement.setAttribute("id", `${osinfo}_side`);


        // create element to hold app selection, populate it, add ID, and append to distro element
        let sideElementContent = document.createElement("span");
        sideElementContent.innerText = `${selectioninfo}`;
        sideElementContent.setAttribute("id", `${osinfo}_side_${selectioninfo}`);
        sideElementContent.setAttribute("class", "chip");
        sideElement.appendChild(sideElementContent);

        // add to DOM
        document.getElementById("sideOutput").appendChild(sideElement);
        M.toast({
            html: 'Added to list!'
        });
    }
};

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
        M.toast({
            html: 'Copy ' + msg + '!'
        });
    } catch (err) {
        M.toast({
            html: "Copy failed"
        });
        console.log("Copy failed", err);
    }

    document.body.removeChild(textArea);
}

/*  ===============
    EVENT LISTENERS
    =============== */


// add click listener to OS buttons.
let distros = document.getElementsByClassName("distro");
for (let i = 0; i < distros.length; i++) {
    distros[i].addEventListener("click", function () {

        // clear any text from the output section
        document.getElementById("outputIntro").innerText = "";
        document.getElementById("outputContent").innerText = "";

        // store the text from the clicked id
        choice = document.getElementById(this.id).innerText;

        // func calls
        distroPicker(this.id);
        appChecker();
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

        } else {
            selection = (this.id);
            // generic instruction, same regardless of selections
            document.getElementById("outputIntro").innerHTML = `<p>Enter the following in your terminal (<code>cmd+t</code> or <code>ctrl+shift+t</code> on most Linux systems) to install <span class="installName">${document.getElementById(selection).innerText}</span> on <span class="osName">${choice}</span>:</p>`;

            // check the os object to see if app selection has custom instructions, if so populate instructions element
            if (osObj[selection].instructions) {
                document.getElementById("outputInstructions").innerHTML = osObj[selection].instructions;
            }

            // func calls
            codePrinter(selection);
        }
    });
}

// add click listener to copy button
document.getElementById("copyOutput").addEventListener("click", function () {
    console.log(document.getElementById("outputContent").innerText);
    copyToClipboard(document.getElementById("outputContent").innerText);
});

// add click listener to add to list button
document.getElementById("saveOutput").addEventListener("click", function () {
    addToSidebar(osName, selection);
    addToList(osName, selection);
});