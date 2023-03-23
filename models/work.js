const MONGOOSE = require('mongoose')
const SCHEMA = MONGOOSE.Schema

let workSchema = new SCHEMA({
    name: {
        type: String,
    },
    status:{
        type:Boolean,
        default:false
    },
    createId:{
        type: SCHEMA.Types.ObjectId,
        require: true
    },
    projectId:
    {
        type: SCHEMA.Types.ObjectId,
        require: true
    }

})

module.exports = MONGOOSE.model("work", workSchema)