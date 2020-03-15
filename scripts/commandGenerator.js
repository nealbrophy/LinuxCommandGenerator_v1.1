/*jshint esversion: 6 */
/*  ===========
    GLOBAL VARs & OBJs
    =========== */

let osName; // to hold name of users OS choice
let osObj; // reference to os object matching user choice name
let selection; // to hold user app/icon/theme selection.
let choice; // to hold text name of user's OS
let userList = {}; // object to hold list of users chosen commands
let dataOutput = '';
let sideCount = 0;

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
            choice = "Arch Linux";
            break;
        case "debian":
            osObj = debian;
            osName = name;
            choice = "Debian";
            break;
        case "elementary":
            osObj = elementary;
            osName = name;
            choice = "Elementary OS";
            break;
        case "suse":
            osObj = suse;
            osName = name;
            choice = "Suse";
            break;
        case "ubuntu":
            osObj = ubuntu;
            osName = name;
            choice = "Ubuntu";
            break;
        case "notSure":
            osObj = notSure;
            choice = "notSure";
            selection = "notSure";
            codePrinter(choice);
            document.getElementById("outputInstructions").innerHTML = `${osObj[choice].instructions}`;
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
            document.getElementById(currentID).classList.remove("disabled");
        } else {
            document.getElementById(currentID).setAttribute("disabled", "true");
            document.getElementById(currentID).classList.add("disabled");
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
};

// add distro & selected apps to list object
const addToList = (distname, selectionname) => {
    // check if OS has already been added to list object.....
    if (userList[distname]) {
        // if so, check if app has already been added
        if (userList[distname][selectionname]) {
            // if so, present toast-message
            M.Toast.dismissAll();
            M.toast({
                html: 'Item already on list!', classes: 'toastColour'
            });
        } else {
            // if not add app to existing OS
            userList[distname][selectionname] = osObj[selection];
            // confirm item added with toast msg
            M.Toast.dismissAll();
            M.toast({
                html: 'Added to list!', classes: 'toastColour'
            });
            addToDataForFileOutput(choice, selectionname);
        }
    } else {
        // if OS hasnt' been added, add it then add app/theme/icon to it
        userList[distname] = {};
        userList[distname][selectionname] = osObj[selection];
        sideCount++;
        // confirm item added with toast msg
        M.Toast.dismissAll();
        M.toast({
            html: 'Added to list!', classes: 'toastColour'
        });
        addToDataForFileOutput(choice, selectionname);
    }
};

// add selections to html for file output
const addToDataForFileOutput = (choice, selectionname) => {
    dataOutput += `
    <p>
        <strong>Distro:</strong> ${choice}
        <br>
        <strong>App:</strong> ${selectionname}
        <br>
        <strong>Instructions: </strong><mark>${osObj[selection].instructions}</mark>
        <br>
        <strong>Command:</strong> <blockquote>${osObj[selection].code}</blockquote>
        <br>
    </p>`;
};

// add distro & selected apps to sidebar
const addToSidebar = (osinfo, selectioninfo) => {
    // check if distro is already in sidebar
    if (document.getElementById(`${osinfo}_side`)) {

        // if so, check if the distro element in sidebar already has the app
        if (document.getElementById(`${osinfo}_side_${selectioninfo}`)) {
            return;
        } else {
            // if not, create element to hold app name and append to os element withint sidebar
            let sideElementContent = document.createElement("span");
            let lowerCaseName = selectioninfo.toLowerCase();
            sideElementContent.innerHTML = `${lowerCaseName}`;
            sideElementContent.setAttribute("id", `${osinfo}_side_${selectioninfo}`);
            sideElementContent.setAttribute("class", "chip");
            document.getElementById(`${osinfo}_side`).appendChild(sideElementContent);
        }
    } else {
        // if distro not already in sidebar create element to hold it, populate it, and add ID. Increase sideCount var by 1.
        let sideElement = document.createElement("p");
        sideElement.innerHTML = `${osObj.logo}:`;
        sideElement.setAttribute("id", `${osinfo}_side`);
        sideCount++;
        console.log(sideCount);


        // create element to hold app selection, populate it, add ID, and append to distro element
        let sideElementContent = document.createElement("span");
        let lowerCaseName = selectioninfo.toLowerCase();
        sideElementContent.innerText = `${lowerCaseName}`;
        sideElementContent.setAttribute("id", `${osinfo}_side_${selectioninfo}`);
        sideElementContent.setAttribute("class", "chip");
        sideElement.appendChild(sideElementContent);

        // add to DOM
        document.getElementById("sideOutput").appendChild(sideElement);
        M.Toast.dismissAll();
        M.toast({
            html: 'Added to list!', classes: 'toastColour'
        });
    }
};

// clear list
const clearSidebar = () => {
    if (sideCount > 0) {
        // for (let i = 0; i < sideCount; i++) {
        //     console.log("Called!");
            document.getElementById("sideOutput").innerHTML = "";
            document.getElementById("sideTrigger").setAttribute("class", "btn-floating btn-large");
            document.getElementById("triggerEnvelope").setAttribute("class", "fas fa-folder-open");
            dataOutput = '';
            userList = {}; 
        // }
        M.Toast.dismissAll();
        M.toast({
            html: "List cleared", classes: 'toastColour'
        });
        sideCount = 0;
    } else {
        M.Toast.dismissAll();
        M.toast({
            html: "List already empty", classes: 'toastColour'
        });
    }
};

// copy to clipboard function
function copyToClipboard(inputText) {
    if (osName && selection || choice === "notSure") {
        let textArea = document.createElement("textarea");
        textArea.value = inputText;
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            let successful = document.execCommand("copy");
            let msg = successful ? "successful" : "unsuccessful";
            M.Toast.dismissAll();
            M.toast({
                html: 'Copy ' + msg + '!', classes: 'toastColour'
            });
        } catch (err) {
            M.toast({
                html: "Copy failed", classes: 'toastColour'
            });
            console.log("Copy failed", err);
        }
        document.body.removeChild(textArea);
    } else {
        M.Toast.dismissAll();
        M.toast({
            html: "Nothing to copy yet", classes: 'toastColour'
        });
    }
}

// download file function
const downloadFile = (input) => {
    var blob = new Blob([input], {
        type: "text/plain;charset=utf-8"
    });

    saveAs(blob, "linux-commands.html");
};

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
        selection = undefined;

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
        if (!osObj) {
            M.Toast.dismissAll();
            M.toast({
                html: "Please select distro", classes: 'toastColour'
            });
            document.getElementById("outputIntro").innerText = "Please select an Operating System above.";
            document.getElementById("outputContent").innerText = "";
        } else {
            selection = (this.id);
            // check the os object to see if app selection has custom instructions, if so populate instructions element
            if (osObj[selection].instructions && choice !== "notSure" && selection !== 'openAsRoot') {
                document.getElementById("outputInstructions").innerHTML = `To install ${selection} on ${choice}, ` + osObj[selection].instructions;
            } else if (selection === 'openAsRoot') {
                document.getElementById("outputInstructions").innerHTML = `To add ${selection} to the right-click options on ${choice}, ` + osObj[selection].instructions;
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
    if (osName && selection && choice !== "notSure") {
        addToSidebar(osName, selection);
        addToList(osName, selection);
        document.getElementById("sideTrigger").setAttribute("class", "btn-floating btn-large pulse alertColour");
        document.getElementById("triggerEnvelope").setAttribute("class", "fas fa-folder-plus");
    } else {
        M.Toast.dismissAll();
        M.toast({
            html: 'Nothing to add yet', classes: 'toastColour'
        });
    }
});

// add click listener to sidebar clear list button
document.getElementById("sidebarClear").addEventListener("click", function () {
    console.log("Clicked!!");
    clearSidebar();
});

// add click listener to sidebar download file button
document.getElementById("sidebarDownload").addEventListener("click", function () {
    if (Object.keys(userList).length > 0) {
        let dataForFile = `<html><head><title>Linux Command Generator - Output</title></head><body><h1>Your Linux Commands</h1><p>Below are the commands you saved.</p>${dataOutput}</body></html>`;
        downloadFile(dataForFile);
    } else {
        M.Toast.dismissAll();
        M.toast({
            html: 'List is empty', classes: 'toastColour'
        });
    }
});