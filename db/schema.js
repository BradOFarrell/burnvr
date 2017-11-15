const mongoose = require('mongoose');
// Use ES6 native promises. We are specifying a Promise library to avoid a depreciation warning in the console.
mongoose.Promise = global.Promise;

// First, we instantiate a namespace for our Schema constructor defined by mongoose.
const Schema = mongoose.Schema;

const PanoSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: "Bike Deep Playa"
    },
    uri: {
        type: String,
        required: true,
        default: "https://s3.amazonaws.com/burningmanvr360videos/bike_deep_playa.mp4"
    }
});

const PortalSchema = new Schema({
    indexA: {
        type: Number,
        required: true,
        default: 1
    },
    indexB: {
        type: Number,
        required: true,
        default: 2
    }
});

const SceneSchema = new Schema({
    panos: [PanoSchema],
    portals: [PortalSchema]
});

const SceneModel = mongoose.model('Scene', SceneSchema);
const PanoModel = mongoose.model('Pano', PanoSchema);
const PortalModel = mongoose.model('Portal', PortalSchema);

module.exports = {
    SceneModel: SceneModel,
    PanoModel: PanoModel,
    PortalModel: PortalModel
};