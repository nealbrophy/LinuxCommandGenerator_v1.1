# Linux Command Generator
## Code Institute Milestone Project 2: Interactive Front End Development

### What is it?

A web app where users can get app, theme, and icon-pack installation commands for a variety of Linux distributions. The current selection is limited to distros I personally use regularly but I would like to expand in the future.

---
### Where is it?
#### TBC

+++ add GitHub pages link

---
### How do I get it?

#### Deployment
LinuxCommandGenerator will be hosted on GitHub pages and will be deployed from the master branch. Any changes committed to the master branch will automatically update on the GitHub deployment.

To run the site locally you can clone it using the following instructions:
- Create a folder in the desired location on your computer.
- Open a terminal ([Mac instructions](https://macpaw.com/how-to/use-terminal-on-mac)|[Windows instructions](https://www.quora.com/How-do-I-open-terminal-in-windows)|[Linux instructions](https://www.howtogeek.com/howto/22283/four-ways-to-get-instant-access-to-a-terminal-in-linux/))
- Navigate to the folder you created using `cd` command (e.g. `cd ~/Documents/LinuxCommandGenerator`)
- Type `git init`
- Next type `git clone https://github.com/nealbrophy/LinuxCommandGenerator`
- To break the link between your local copy and the repo at https://github.com/nealbrophy/LinuxCommandGenerator type `git remote rm origin`


---
### How do I use it?
- 1.) Select the name of the appropriate Linux distro.
- 2.) Select the name of the app, theme, or icon-pack you want to install.
- 3.) See the CLI commands in the output section.
- 4.) Copy to clipboard and paste into your terminal (all of these commands require super user permissions, please make sure you have this before proceeding).
<!-- - 5.) If you would like to collect multiple app/theme/icon commands, simply click the "add to list/save for later" button then continue collecting more commands as needed.
- 6.) When you have collected all the commands you need (see Step 5 above) you can either download them as a .txt file or email the list of commands to yourself. -->

---
### How did you do it?
#### Wireframes
<img src="images/Desktop-1.png" alt="desktop-wireframe-1" width="500px">
<img src="images/Desktop-2.png" alt="desktop-wireframe-2" width="500px">
<img src="images/Mobile.png" alt="mobile-wireframe" width="200px">


#### Technologies used
- [EmailJS](https://www.emailjs.com/)
- [FileSaver.js](https://github.com/eligrey/FileSaver.js/)
- [FontAwesome](https://fontawesome.com/)
- [font-logos](https://github.com/lukas-w/font-logos)
- [Materialize](https://materializecss.com/)
- [Cypress.io](https://www.cypress.io/)

---
### How did you test it?

#### Automated End-to-End
Automated end-to-end testing was accomplished using Cypress.io.

#### Manual testing


Bugs unsquashed:
- Copy text button presents "Copy unsuccessful" toast during cypress test but present "Copy successful" in manual testing.

Bugs squashed: 
- If "Add To List" button was clicked after an OS had been selected but before an app had been selected the addToList function would run and add an "undefined" item to the list which would in turn be added to the sidebar and output to file.
    - __FIX__: Add if statment to prevent addToList from running unless both distro and app/icon/theme selections had been populated and present warning msg to user if not.
- Clicking "Copy Code" button before anything had been selected would present confirmation that copy was successful but there was nothing to copy.
    - __FIX__: Add if statement to check that distro and app/icon/theme selection had both been made. If not, present msg saying nothing to copy.
- Clicking "Download File" button would execute as expected but if user then opened sidebar and clicked "Download" button the same file would download even though no items were present in the saved list.
    __FIX__: Added final action after Download File listener executes to overwrite the dataOuput variable with an empty string.
- Copy Code functionality didn't work for the code from notSure selection. Having this ability for other code but not the code to determine which OS user is running seemed counterproductive and not great UX.
    - __FIX__: Refactored commandGenerator script to accept notSure as valid choice for the purposes of running the copyToClipBoard and downloadFile functions. Achieved by moving the if statement (to validate distro/app selection) from within the copyToClipboard & downloadFile functions to within the click-listener "Add to List" button listener (that way statement is evaluated prior to calling addToList function and doesn't interfere with copyToClipboard/downloadFile).


---
### Anything else you want to tell me?
#### To be implemented 
- Send via Email functionality
- Add more apps/themes/icons/misc
- Add more commands to OS objects

#### Maybe?
- Recommended distros


---
### Credits/Acknowledgements

#### Wirefreams created using:
[Balsamiq](https://balsamiq.com/)

#### Frameworks
- This site uses the [Materialize.CSS](https://materializecss.com/) framework.
- [This video](https://www.youtube.com/watch?v=4kN5lW4PNEs) from [TheNetNinja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg) was helpful in implementing the Materialize Tabs functionality.

#### Installation instructions written/compiled with help from:
- [All Techs Tricks](https://alltechstricks.blogspot.com/)
- [LinuxBabe](https://www.linuxbabe.com/)
- [FOSSLinux](https://www.fosslinux.com/)
- [TecRobust](https://www.tecrobust.com/)
- [ItsUbuntu](https://itsubuntu.com/)
- [DraSite](https://drasite.com/)
- [LinuxHint](https://linuxhint.com)
- [AddictiveTips](https://www.addictivetips.com/)
- [OSRadar](https://www.osradar.com/)
- [ArchLinux Wiki](https://wiki.archlinux.org/)
- [Elementary OS]() forums
- [Solus]() forums
- [ScottLinux](https://scottlinux.com/)


#### Copy to Clipboard implementation from:
[Dean Taylor's](https://stackoverflow.com/users/406712/dean-taylor) excellent answer on [StackOverflow](https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript)

#### Download as TXT functionality uses:
[FileSaver.js](https://github.com/eligrey/FileSaver.js/)

#### Send via email functionality uses:
[EmailJS](https://www.emailjs.com/)

#### Icons:
- Arch, Debian, Elementary, and Ubuntu logo icons from [font-logos by lukas-w](https://github.com/lukas-w/font-logos)
- Solus logo icon from [IcoFont](https://icofont.com/)
- App icons from [FontAwesome](https://fontawesome.com/)

### Tux favicon
Tux icon from [Favicon.cc](https://www.favicon.cc/?action=icon&file_id=899032)

#### Site look/style inspired by:
Cake Bar Exercise by [Codecademy](https://www.codecademy.com/courses/learn-javascript-unit-testing/projects/cake-clock)

#### Colour scheme:
- [W3Schools Color Picker](https://www.w3schools.com/colors/colors_picker.asp) and [Sessions College Color Calculator](https://www.sessions.edu/color-calculator/) were both used during this project.
- [This Pinterest image](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F227431849906259188%2F&psig=AOvVaw2vvsbXesw2jbiMwVrKCNCO&ust=1581267436155000&source=images&cd=vfe&ved=2ahUKEwj7qPGvtsLnAhVjQEEAHYKiCGoQr4kDegUIARD0AQ) was used for reference.

### Testing accomplished with help from:
- [Cypress in a Nutshell](https://www.youtube.com/watch?v=LcGHiFnBh3Y)
- [Cypress End-to-End Testing](https://www.youtube.com/watch?v=7N63cMKosIE) by [Fireship](https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA)
- [Introduction to automation testing with Cypress.io](https://www.youtube.com/watch?v=l_Q7cbmYjDY) by [Execute Automation](https://www.youtube.com/channel/UCO1aucBAJgFR8odzfXOZ5uw)
- [PicFlip](https://github.com/AJGreaves/picflip/blob/master/testing.md) testing write-up by AJ Greaves