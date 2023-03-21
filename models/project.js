const MONGOOSE = require('mongoose')
const SCHEMA = MONGOOSE.Schema

let projectSchema = new SCHEMA({
    name:{
        type:String,
        require:[true,"Please fill your project name!"]
    },
    startTime:{
        type:Date,
        require:[true,"Please fill start day of project!"]
    },
    finishTime:{
        type:Date,
        require:[true,"Please fill finish time of project!"]
    },
    status:{
        type:Boolean,
        default:false
    },
    background:{
        type:String,
        require:[true,"Please fill your project name!"]
    },
    roleIds:[
        {
            type:SCHEMA.Types.ObjectId,
            require:[true,"Please fill roleId of project!"]
        }
    ],
    mainProject: {
        type: SCHEMA.Types.ObjectId,
        require:[true,"Please fill your mainProject!"]
    }
    
})

module.exports = MONGOOSE.model("project",projectSchema)