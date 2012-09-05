This is a golf scoring web-appable site. You can clone, and deploy - have your own scoring device. 

How it works currently - 

Deploy code to your own .meteor.com site, track by player & total score. Use Case [[3 players, I add a stroke for every stroke they take, totals up as we play. Conversely, skins or +/- handicap scoring will work as well. Can be used by a group of people to track, as meteor is good at async and multiple people can update at once. ]]

To create, pull or clone this repo, and follow the install and server creation instructions on

http://meteor.com/examples/leaderboard

Once that is done, create a fancy new name, the iOS appable icon sizes are in the image folder. Since meteor doesn't seem to like how I want images packaged,  I threw these images up on AWS S3. Works fine and dandy.

Have issues? Upgrades? Requests? Submit it here, thanks!

== TODO ==

-Add Auth by "invite code" or "password / QR"
-Save previous rounds
-Share scores
-Course location nearby
