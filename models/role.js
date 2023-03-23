const MONGOOSE = require('mongoose')
const SCHEMA = MONGOOSE.Schema

let roleSchema = new SCHEMA({
    name: {
        type: String,
        require:true
    },
    createId:{
        type: SCHEMA.Types.ObjectId,
        require: true
    },
    leaderId: {
        type: SCHEMA.Types.ObjectId,
        require: true
    },
    members: [
        {
            type: SCHEMA.Types.ObjectId,
            require: true
        }
    ],
    status: {
            type: Boolean,
            require: true   
    }
})

module.exports = MONGOOSE.model("role", roleSchema)