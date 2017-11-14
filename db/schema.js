const mongoose = require('mongoose');
// Use ES6 native promises. We are specifying a Promise library to avoid a depreciation warning in the console.
mongoose.Promise = global.Promise;

// First, we instantiate a namespace for our Schema constructor defined by mongoose.
const Schema = mongoose.Schema;

const PokemonSchema = new Schema({
    dexNumber: {
        type: Number,
        required: true,
        default: 25        
    },
    baseStat: {
        type: Number,
        required: true,
        default: 112        
    },
    type1: {
        type: String,
        required: true,
        default: "electric"        
    },
    type2: {
        type: String,
        required: true,
        default: "none"        
    }
});

const PartySchema = new Schema({
    team: [PokemonSchema],
    winStreak: {
        type: Number,
        required: true,
        default: 0
    }
});

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        default: "ashketchum"
    },
    badges: {
        type: Number,
        required: true,
        default: 0
    },
    party: {
        type: PartySchema,
        required: true
    }
});


const UserModel = mongoose.model('User', UserSchema);
const PartyModel = mongoose.model('Party', PartySchema);
const PokemonModel = mongoose.model('Pokemon', PokemonSchema);

module.exports = {
    UserModel: UserModel,
    PartyModel: PartyModel,
    PokemonModel: PokemonModel
};