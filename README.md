# Burnvr

This is a gallery of 360 video footage I shot myself at Burning Man (2016) and edited and encoded using Final Cut Pro. The videos will be displayed in-browser using the panoramic video viewing compponent of React VR. The user will be able to navigate around a virtual facsimile of the 3D spaces.

# Mockup / Wireframe
![](https://i.imgur.com/YCgKZLb.png)

This is essentially a single-view app, with the user starting out in a full screen view of a 360 video and navigating to other 360 videos by clicking on floating thumbnails. Each scene will have an audio file that will play in the background 

# Entity Relationship Diagram
![](https://imgur.com/jEPRzkG.png)

Related 360 videos are collected in a "scene" object which has an audio track and a starting pano. Each pano has 'related' panos (all within the same scene) that can be accessed by clicking on a thumbnail. The user's last pano viewed will be saved so that it can be reloaded next time they visit the site.gi

# External Links:
* [Trello board with user stories](https://trello.com/b/QLQUfXdb/burnvr)
* [Hosted Heroku page](http://burnvr360.herokuapp.com/)