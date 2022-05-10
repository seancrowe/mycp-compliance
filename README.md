## What is this?
This is an application to help with CHILI publish employees. It serves no use to the general public but is made public for easy download.

## How to use?

* Unzip the archive
* Double-click click on the file for your OS
  * Windows - mycp-compliance-win.exe
  * Mac OS - mycp-compliance-macos
* Terminal will open and ask you for your MyCP username and password
* After entering your credentials, the CSV will be downloaded

### Note for Mac OS X

Double-clicking, you will get an error from Apple about security. The error will read like:

`mycp-compliance-masos cannot be opened because it is from an unidentified developer`

You can get around this by Ctrl + clicking and choosing Open. See:
* https://support.apple.com/guide/mac-help/open-a-mac-app-from-an-unidentified-developer-mh40616/mac

This should open a terminal. If this app tries to open in TextEdit, then the issue is that you need to tell Apple that this is executable. Sorry 😭. To do this:
* Open up a [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac#:~:text=Open%20Terminal,,%20then%20double-click%20Terminal.)
* Use [cd](https://stackoverflow.com/questions/9547730/how-to-navigate-to-to-different-directories-in-the-terminal-mac) to go to the folder your downloaded
  * If you haven't unzipped the file, please do this before opening the terminal
* Type `ls` and you should see the mycp-compliance-maxos listed
* Type `chmod +x mycp-compliance-maxos`

Now the file is ready, so you can Ctrl + click to open the execute.