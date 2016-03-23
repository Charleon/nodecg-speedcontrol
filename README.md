# Speedcontrol

## Introduction

Speedcontrol is a nodecg bundle developed for the speedrunning scene which helps the people organizing the stream for marathons greatly by automating tasks
that would before would have meant manual work for people working with the overlay / stream side of things. Features include, but are not limited to:
* Twitch Integration (Upon starting a new run it automatically changes the played game on twitch). You can also specify and update the stream title directly from the dashboard! this way you won't ahve any need to keep a twitch window open for managing stream title / game played
* Horaro schedule import; paste a horaro schedule link and press import, and VOILAH! There will be no need to manually change any text fields on the overlay at all, Estimates, runners, game information will be pulled from horaro and put into a local database, so the only thing you'd need to do is press "Play next game" to update all the information on the overlay
* Optionally you can add runs manually which comes in two flavors; 
  1. The first alternative is to use an automatic sync with speedrun.com. All information is pulled from speedrun.com, which means when you add a runnername and choose it based on the runners speedrun.com name, you automatically get all the information such as twitch link, etc. This also works for games, getting the correct name, and cathegories for said game.
  2. Add games and runners by using free text (manual input for runner names and their twitch handles, if speedrun.com integration is not preferred)
* Support for custom animations; in Pre-esa marathon we faded in an animated finish-flag with the finish-time whenever a person in the race finished. Also a twitchicon faded in and the runner name was exchanged to his twitchhandle every now and then (look at pre-esa twitch vods ( https://www.youtube.com/playlist?list=PLkd2f6JAHslJPSQ5a9zYL09Ie-LugT8eB)  for reference).
* Once the schedule is improted from horaro, you can drag around the run items as you'd like, to reposition runs in the list/ remove runs from the list, in case there are any schedule updates.
* Everything is handled from a dashboard that runs in google chrome by surfing to http://localhost:9090, and it can also be accessible from external computers if you give other co-hosts your IP (this has not been tested yet though, and might mean further configration steps to your nodecg instance)
* Timer is built into the dashboard, and contains separate split-buttons for all runners, dynamically changing if a 2, 3 or 4p race is currently playing, to remove the need of a third party timer like LiveSplit, providing a tailormade interface having online marathons in mind
* All Items on the overlay is fully configurable during run-time, but should really be configured before the marathon, which means that you can change positions of the game-capture cutout of the background, moving timers, moving player nameplates, game information, etc, etc.
* Oh no! Runner X and Runner Y nameplates are under the wrong gamefeed! No problem, the "Player Layout" element of speedcontrol lets you click and drag the player to the correct gamefeed.

## Installation (including installation of NodeCG)

There are two prerequisites to get SpeedControl working.
* Download and install git (https://git-scm.com/)
* Download and install nodejs (v 4.2.4 or later) (https://nodejs.org/)
* Make a folder anywhere named nodecg (or whatever you want)
*In the actual folder, rightclick and choose “open git bash”

To install NodeCG: type, in this order: 
```
‘npm install nodecg-cli -g’
’nodecg setup’
‘npm install’ 
‘npm install -g bower’
‘bower install’
```

To install speedcontrol, do the following:
In the prompt, type 
```
‘nodecg install charleon/nodecg-speedcontrol’
```

After this step you have successfully installed nodecg! there is one little step left, however; since you're currently using the ESA configuration, and you want to apply the Deuceler specific configuration.

Go into `nodecg/bundles/nodecg-speedcontrol`, rightclick, and once again open up the git bash prompt.
in the prompt type: 
`git checkout deucelermarathon`

And you're done!

Whenever you want to start the NodeCG server (speedcontrol), open the git bash prompt in the nodecg root folder and type `nodecg start` (or `node index.js`). You can minimize the prompt if you'd like but it has to be running for NodeCG to work in xSplit/OBS. If you get tired of doing this each time you want to start the server, you can make a shortcut to nodejs.exe in the nodejs installation folder and then in the properties of the shortcut, throw in the full path to nodecg/index.js. This will enable you to start the server with just a doubleclick!

The above step set up a local server on your computer so you can now test it out! either in your browser (Chrome is the only one that gives the CORRECT result), or in xSplit or OBS For OBS you need the CLR Browser Plugin, but the latest xSplit version already has support to add web url:s using the "Add page URL.." option. 

If I make an update to speedcontrol, or whenever you want to be sure you have the latest version installed, open the git bash window in `nodecg/bundles/nodecg-speedcontrol` and type in “git pull” to fetch all the newest changes! (yes, it’s that easy)

##Setting up the overlay##
Once you've gotten used to the dashboard and want to look at the actual overlays you can find the link to them by clicking the menu in the top left corner of the dashboard and then choose "graphics", which lists the URL:s to all the overlays that you should add to the CLR browser plugin. You can try them out in your browser first to see how they look like. Please be adviced that Google Chrome is the ONLY browser that gives a correct representation, since both xSplit and OBS CLR browser plugin builds on the chrome engine.

The only thing left to do now is to either import your horaro schedule into speedcontrol, OR add all the runs manually with a click of the "Add run RAW" button in the Player control part of the dashboard. Please be adviced that if you're importing from horaro, the schedule NEEDS to follow a specific column format, more specifically, the one used here: https://horaro.org/preesa/schedule
that is: Game, Estimate, Runner(if more than one, separate them with a ','), Twitch handle, Platform, Category. The columns need to be there, but you can just leave twitch handles and platform blank since these overlays does not display that information.
After you're done you can paste the link to the horaro schedule into the horaro importer part of speedcontrol. If there are any errors in the import you can see some error printouts in the chrome console by pressing `ctrl+shift+j` in the dashboard. If anything for some reason stops functioning, there is a big chance that the dashboard somehow has crashed and you should look in the chrome console to see the error-trace and send it back to me so I can fix it for the future. For just temporarily fixing the problem though, you can just reload the dashboard with F5 or ctrl+F5.

After you've imported the runs, I advice you to play around with the dashboard and look at how it interacts with the actual overlays before going live with it in a marathon.

God speed!

## bundle configuration
in nodecg/cfg create a nodecg-speedcontrol.json file optionally and fill with the following:
```
{
    "live": true,
    "enableTwitchApi": true,
    "user": <twitchchannel>
}
```

If "live" is true, editmode divs are stripped from layouts to make it more clean and give better performance, and certain buttons on the dashboard will be disabled that should not be pressed when a marathon is going on. 

If "enableTwitchApi": true is defined, automatical and manual sync to your configured user can be used
from the Stream Control dashboard panel, otherwise this panel doesn't do anything!

"user": <twitchchannel> must be defined if "enableTwitchApi" is defined, otherwise bundle doesn't know which
user to update. e.g: "user": sethcharleon

## Instructional Videos / Introduction

https://www.youtube.com/watch?v=K7jTpFYiWNA&list=PLUCcl7X553EBMHRQWTmHwkX3z2QszIOD-

## Used at marathons
[Pre-ESA Marathon](https://www.youtube.com/watch?v=uQbREedGbhU&list=PLkd2f6JAHslJPSQ5a9zYL09Ie-LugT8eB)

### Credits
Developed by [Charleon](https://twitter.com/CharleonChan)

Contributions by:
- btrim
- With suggestions and feedback from the speedrunning community <3

