require('dotenv').config();
var mongoose = require('mongoose');
var Schema = require("./schema.js");

mongoose.connect(process.env.MONGODB_URI); 
const db = mongoose.connection;

// Will log an error if db can't connect to MongoDB
db.on('error', function (err) {
    console.log(err);
});

// Will log "database has been connected" if it successfully connects.
db.once('open', function () {
    console.log("database has been connected!");
});

// Define schema we're working with
var SceneModel = Schema.SceneModel;
var PanoModel = Schema.PanoModel;
var PortalModel = Schema.PortalModel;


// First we clear the database of existing data.
SceneModel.remove({}, function (err) {
    console.log(err);
});
PanoModel.remove({}, function (err) {
    console.log(err);
});
PortalModel.remove({}, function (err) {
    console.log(err);
});

const host = "https://s3.amazonaws.com/burningmanvr360videos/"

const burningMan = new SceneModel({
    panos: [
        new PanoModel({name: "Bike Esplanade", uri: host+"bike_esplanade.mp4"}), // 0
        new PanoModel({name: "Bike The City", uri: host+"bike_city.mp4"}), // 1
        new PanoModel({name: "Bike Deep Playa", uri: host+"bike_deep_playa.mp4"}), // 2
        new PanoModel({name: "Club Balcony", uri: host+"building_balcony.mp4"}), // 3
        new PanoModel({name: "Club Entrance", uri: host+"building_entrance.mp4"}), // 4
        new PanoModel({name: "Club Roof", uri: host+"building_roof.mp4"}), // 5
        new PanoModel({name: "Man Burn", uri: host+"burn_man.mp4"}), // 6
        new PanoModel({name: "Burn Night", uri: host+"burn_night.mp4"}), // 7
        new PanoModel({name: "Fly Ranch", uri: host+"fly_ranch_geyser.mp4"}), // 8
        new PanoModel({name: "Hot Spring", uri: host+"fly_ranch_hot_spring.mp4"}), // 9
        new PanoModel({name: "Lighthouse Entrance", uri: host+"lighthouse_entrance.mp4"}), // 10
        new PanoModel({name: "Fabric Staircase", uri: host+"lighthouse_fabric_stairs.mp4"}), // 11
        new PanoModel({name: "The Library", uri: host+"lighthouse_library.mp4"}), // 12
        new PanoModel({name: "The Tower", uri: host+"lighthouse_tower.mp4"}), // 13
        new PanoModel({name: "Wooden Staircase", uri: host+"lighthouse_wood_stairs.mp4"}), // 14
        new PanoModel({name: "Camp Party", uri: host+"party.mp4"}), // 15
        new PanoModel({name: "Calm Room", uri: host+"pyramid_calm_room.mp4"}), // 16
        new PanoModel({name: "Pyramid Entrance", uri: host+"pyramid_entrance.mp4"}), // 17
        new PanoModel({name: "The Summit", uri: host+"pyramid_roof.mp4"}), // 18
        new PanoModel({name: "Adorned Shrine", uri: host+"temple_decorated.mp4"}), // 19
        new PanoModel({name: "Empty Shrine", uri: host+"temple_empty.mp4"}), // 20
        new PanoModel({name: "Temple Entrance", uri: host+"temple_outside.mp4"}), // 21
    ],
    portals: [
        // (Connects the above items, based on their indexes in the panos array)
        new PortalModel({indexA: 0, indexB: 1}),
        new PortalModel({indexA: 0, indexB: 2}),
        new PortalModel({indexA: 0, indexB: 10}),
        new PortalModel({indexA: 10, indexB: 12}),
        new PortalModel({indexA: 12, indexB: 11}),
        new PortalModel({indexA: 12, indexB: 14}),
        new PortalModel({indexA: 13, indexB: 11}),
        new PortalModel({indexA: 13, indexB: 14}),
        new PortalModel({indexA: 2, indexB: 21}),
        new PortalModel({indexA: 21, indexB: 19}),
        new PortalModel({indexA: 21, indexB: 20}),
        new PortalModel({indexA: 19, indexB: 20}),
        new PortalModel({indexA: 2, indexB: 17}),
        new PortalModel({indexA: 17, indexB: 18}),
        new PortalModel({indexA: 17, indexB: 16}),
        new PortalModel({indexA: 1, indexB: 4}),
        new PortalModel({indexA: 4, indexB: 3}),
        new PortalModel({indexA: 3, indexB: 5}),
        new PortalModel({indexA: 1, indexB: 15}),
        new PortalModel({indexA: 15, indexB: 8}),
        new PortalModel({indexA: 8, indexB: 9}),
        new PortalModel({indexA: 15, indexB: 7}),
        new PortalModel({indexA: 7, indexB: 6})
    ]
})

// Save the array on their own
burningMan.save(function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(burningMan);
});

// Disconnect from database
db.close();