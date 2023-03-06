const MONGOOSE = require('mongoose')
const SCHEMA = MONGOOSE.Schema

let roleSchema = new SCHEMA({
    name: {
        type: String,
        require:true
    },
    members: [
        {
            type: SCHEMA.Types.ObjectId,
            require: true
        }
    ]
})

module.exports = MONGOOSE.model("role", roleSchema)