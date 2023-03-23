const MONGOOSE = require('mongoose')
const SCHEMA = MONGOOSE.Schema

const taskSchema = new SCHEMA({
    name:{
        type:String,
        require:[true,"Please fill task name!"]
    },
    description:{
        type:String,
    },
    startDay:{
        type:Date,
        require:[true,"Please fill start day of task!"]
    },
    finishDay:{
        type:Date,
        require:[true,"Please fill finish day of task!"]
    },
    startHour:{
        type:String,
        require:[true,"Please fill start Hour of task!"]
    },
    finishHour:{
        type:String,
        require:[true,"Please fill finish Hour of task!"]
    },
    linkSupports:[
        {
            link:String
        }
    ],
    imageLink:{
        type:String,
    },
    workId:{
        type:SCHEMA.Types.ObjectId,
        require:true
    },
    members:[{
        type:SCHEMA.Types.ObjectId,
        require:true
    }],
    status:{
        type:Number,
        default:3
    }
    
})

module.exports = MONGOOSE.model("task",taskSchema)