/*  ===========
    REQUIRE
    =========== */

/*  ===========
    GLOBAL VARs & OBJs
    =========== */

let osName; // to hold name of users OS choice
let osObj; // reference to os object matching user choice name
let selection; // to hold user app/icon/theme selection.
let choice; // to hold text name of user's OS
const userList = {}; // object to hold list of users chosen commands
let dataOutput = '';

/*  ==========
    FUNCTIONS
    ========== */
// grab os object and populate vars
const distroPicker = name => {
    osObj = {};
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
            document.getElementById("outputIntro").innerText = "";
            document.getElementById("outputIntro").innerText = "Enter the following to find out what OS you\'re using:";
            document.getElementById("outputContent").innerText = "$ cat /etc/issue";
    }
    if (osObj && name !== "notSure") {
        document.getElementById("outputIntro").innerText = `Please select an App, Theme, or Icon pack to install on ${choice}.`;
    }
};

// check which apps are available for selected distro
const appChecker = () => {
    let availableApps = document.getElementsByClassName("select");
    for (let j = 0; j < availableApps.length; j++) {
        let currentID = availableApps[j].id;
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
    codeSplit = osObj[codetobeprinted].code.split("\n");
    for (let i = 0; i < codeSplit.length; i++) {
        codePrint += '<i class="fas fa-dollar-sign"></i>' + codeSplit[i] + '<br>';
    }
    document.getElementById("outputContent").innerHTML = `<code>${codePrint}</code>`;
}

// add distro & selected apps to list object
const addToList = (distname, selectionname) => {
    // check if OS has already been added to list object, if so app/theme/icon to it
    if (userList[distname]) {
        if (userList[distname][selectionname]) {
            M.toast({
                html: 'Item already on list!'
            });
        } else {
            userList[distname][selectionname] = osObj[selection];
            M.toast({
                html: 'Added to list!'
            });
            dataOutput += `<p>Distro: ${choice}<br>App: ${selectionname}<br><code>Command: ${osObj[selection].code}</code></p>`;
        }
    } else {
        // if OS hasnt' been added, add it then add app/theme/icon to it
        userList[distname] = {};
        userList[distname][selectionname] = osObj[selection];
        console.log(distname);
        console.log(selectionname)
        M.toast({
            html: 'Added to list!'
        });
        dataOutput += `<p>Distro: ${choice}<br>App: ${selectionname}<br><code>Command: ${osObj[selection].code}</code></p>`;
    }
};

// add distro & selected apps to sidebar
const addToSidebar = (osinfo, selectioninfo) => {
    // check if distro is already in sidebar
    if (document.getElementById(`${osinfo}_side`)) {

        // if so, check if the distro element in sidebar already has the app
        if (document.getElementById(`${osinfo}_side_${selectioninfo}`)) {

            // if so, log warning
            
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
        // M.toast({
        //     html: 'Added to list!'
        // });
    }
};

// clear list
const clearSidebar = () => {
    let listChildren = document.getElementById("sideOutput").childNodes;
    if (listChildren.length > 1) {
        for (let i = 0; i < listChildren.length; i++) {
            document.getElementById("sideOutput").innerHTML = "";
            M.toast({
                html: "List cleared!"
            });
        }
    } else {
        M.toast({
            html: "List already empty"
        });
    }
}

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
let distros = document.getElementsByClassName("distroLogo");
for (let i = 0; i < distros.length; i++) {
    distros[i].addEventListener("click", function () {
        // clear any text from the output section
        document.getElementById("outputIntro").innerText = "";
        document.getElementById("outputContent").innerText = "";
        document.getElementById("outputInstructions").innerHTML = "";

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
        document.getElementById("outputIntro").innerText = "";
        document.getElementById("outputContent").innerText = "";
        document.getElementById("outputInstructions").innerHTML = "";

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
            // document.getElementById("outputIntro").innerHTML = `<p>Enter the following in your terminal (<code>cmd+t</code> or <code>ctrl+shift+t</code> on most Linux systems) to install <span class="installName">${document.getElementById(selection).innerText}</span> on <span class="osName">${choice}</span>:</p>`;

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
    copyToClipboard(document.getElementById("outputContent").innerText);
});

// add click listener to add to list button
document.getElementById("saveOutput").addEventListener("click", function () {
    addToSidebar(osName, selection);
    addToList(osName, selection);
});

// add click listener to clear list button
document.getElementById("sidebarClear").addEventListener("click", function () {
    clearSidebar();
});

// add click listener to clear list button
document.getElementById("sidebarDownload").addEventListener("click", function () {
    let dataForFile = `<html><head><title>Linux Command Generator - Output</title></head><body><h1>Your Linux Commands</h1><p>Below are the commands you saved.</p>${dataOutput}</body></html>`;
    var blob = new Blob([dataForFile], {type: "text/plain;charset=utf-8"});

    saveAs(blob, "testfile.html")
});



// send email listener
// document.getElementById("emailForm").addEventListener('submit', function (event) {
//     document.getElementById("emailMessage").innerText = JSON.stringify(userList);
//     event.preventDefault();
//     emailjs.sendForm('gmail', 'template_v04V7QEN', this);
// });