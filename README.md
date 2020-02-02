# Linux Command Generator
## Code Institute Milestone Project 2: Interactive Front End Development

### What is it?
#### Summary
A web app where users can get app, theme, and icon-pack installation commands for a variety of Linux distributions. The current selection of Linux distros is limited to distros I personally use regularly but I would like to expand in the future.
---
### Where is it?
#### TBA
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
- 5.) If you would like to collect multiple app/theme/icon commands, simply click the "add to list/save for later" button then continue collecting more commands as needed.
- 6.) When you have collected all the commands you need (see Step 5 above) you can either download them as a .txt file or email the list of commands to yourself.

---
### How did you do it?
#### Wireframes
<img src="images/Desktop-1.png" alt="desktop-wireframe-1" width="500px">
<img src="images/Desktop-2.png" alt="desktop-wireframe-2" width="500px">
<img src="images/Mobile.png" alt="mobile-wireframe" width="200px">
- wireframes created using [Balsamiq](https://balsamiq.com/)

#### Technologies used
- [EmailJS](https://www.emailjs.com/)
- [FileSaver.js](https://github.com/eligrey/FileSaver.js/)
---
### How did you test it?
---
### Anything else you want to tell me?
---
### Credits/Acknowledgements

#### Installation instructions written with help from:
McMojave for Elementary [All Techs Tricks](https://alltechstricks.blogspot.com/2019/05/how-to-install-mcmojave-linux-theme.html)

#### Clipboard implementation from:
Dean Taylor's answer on [StackOverflow](https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript)

#### Download as TXT file from:
[FileSaver.js](https://github.com/eligrey/FileSaver.js/)

#### Send via email function uses:
[EmailJS](https://www.emailjs.com/)