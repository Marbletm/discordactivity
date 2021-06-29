## Heya, wanna enjoy some embedded Discord applications?
I sure hope you do, because then you've reached the right place.

*Heads up; I didn't check my grammar, or spelling. I just wrote this huge document and I'm too lazy to proof-read it. It's not worth much more effort. If you have questions shoot me a dm on reddit. I'm /u/Marbletm*

### Why this bot?
The guy that posted his bot on [/r/discorapp](https://www.reddit.com/r/discordapp/comments/o6lvur/we_use_chess_com_a_lot_but_this_new_feature_where/) didn't release his source code as far as I know and his bot got limited by Discord, which made adding the bot to your server impossible.

So, what's the work-around? Make your own bot and release it's source-code so that people can host it for themselves. 


## Setup
So, I don't know how experienced you are with JavaScript and NodeJS, so I'll run you through a few basic steps for getting started.

### 0. Installing node and NPM
Go to the NodeJS website, and install the stable build (the recommended one).
![NodeJS download page](https://www.netzole.com/wp-content/uploads/2019/09/download-nodejs.png)
[Node.JS](https://nodejs.org/en/) (*Ignore the version numbers in the image, I just googled a picture of the download page to give you an idea.*)

Once you've downloaded it; run it and go through the install process.
*It'll ask you whether you want to install an extra module for compiling, I don't think it's necessary to download that for this bot.*

### 1. Setup a Discord bot with Discord
Go to the Discord Developer Portal and setup a new application.
https://discord.com/developers/applications

Once you've made your new application go to the Bot tab and make sure to enable the bot functionalities there. After enabling it, you should be able to enable Privileged Gateway Intents. Enable both the Presence and Server Members intent.

![intent](https://i.ibb.co/FKn9pb9/Screenshot-2021-06-29-235341.jpg)
*No data is being exchanged with me, it's open-source, you can always check the source-code for whether it's safe to run.*

On this same page you can find your bot token, be sure to make note of it, as you'll have to use it later.

### 2. Inviting the bot to your server
Now go to the OAuth2 tab of your application on the Discord Developer Portal. Scroll down and select the following options:
![The options](https://i.ibb.co/9sBcJBK/Screenshot-2021-06-29-235933.jpg)
If Discord is asking you for a redirect URI, you can add a redirect to a random website, i.e. Google.

Once you've done that, copy the generated link and use it to add the bot to your server.

### 3. Adding your information to the config file.
If you haven't yet cloned/downloaded this repository, do so now. If you downloaded it, extract it to it's own folder and open the folder in explorer.

There is a `config.json` file in there. Open this file in notepad, or your favourite json editor. There are two values that need changing.

One of them is `guildId` you don't HAVE to change this one. The advantage of changing this value is that the commands will be loaded into Discord's database quicker than it would otherwise. That's it. If you want to add your server there, you can google how to get the ID of your server for yourself. If you don't want to put in a server ID, you can just leave it as is.

The other one is the `token` of your bot. This is the token we were talking about in the last paragraph of step 1. Replace the placeholder text with that token.

Once you've done all that, save the file.


### 4. Installing the node modules
Right now you should be able to run JavaScript and install node modules. 
First we're gonna have to open a terminal/console in the folder we were in during the last step as well. I'm gonna explain this step for the Windows users. 
If you're a Linux user I'll expect you to know, and I'm sorry if you're using a Mac.

To open a terminal in the current folder with Windows, you'll have to press the bar that contains the folder's path, the one in the picture below.
![Bar with path](https://www.top-password.com/blog/wp-content/uploads/2016/11/file-explorer-display-full-path.png)
Make sure to remove the string in there and replace it with `cmd`. Once you've typed that, press enter.
![cmd](https://i1.wp.com/nextofwindows.com/wp-content/uploads/2019/02/image-19.png)

A new windows should've popped up, one that looks something like this:
![cmd prompt](https://upload.wikimedia.org/wikipedia/commons/b/b3/Command_Prompt_on_Windows_10_RTM.png)

Now you're ready to install the node modules. Select the new window and type the following and press enter: `npm install`

This should have installed all node modules!
Now you're ready to run the code, for this; leave the Command Prompt window open.

### 5. Running the code
This is easy now. Select the Command Prompt window from the previous step, and type: `node index.js` and press enter.

After pressing enter you should leave this window open, as long as the window is open, the bot will run. You'll notice that the bot has come online in your server now.

### 6. Using the bot
I used Discord's new integrated command feature. So in the text chat you should just be able to type `/activity` and extra options will appear. It should be intuitive as is.
