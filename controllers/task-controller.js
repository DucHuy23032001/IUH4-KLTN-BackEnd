const TASK = require('../models/task')
const MOMENT = require('moment')

//done
exports.getAllTaskInWork = async (req,res) => {
    try {
        let id = req.params.id 
        console.log(id);
        let tasks = await TASK.find({
            listId:id
        })
        return res.status(200).json(tasks)
    } catch (error) {
        return res.status(500).json(error)
    }
}

//done
exports.getTaskById = async (req,res) => {
    try {
        let id = req.params.id 
        let tasks = await TASK.findById(id)
        return res.status(200).json(tasks)
    } catch (error) {
        return res.status(500).json(error)
    }
}

//done
exports.getTaskByName = async (req,res) => {
    try {
        let name = req.params.name
        let task = await TASK.find({
            name:name
        })
        return res.status(200).json(task)
    } catch (error) {
        return res.status(500).json(error)
    }
}

//done
exports.createTask = async (req,res) => {
    try {
        let {name, startDay, finishDay, startHour, finishHour, linkSupport, imageLink, listId, members} = req.body
        let dateStart = MOMENT(startDay,"MM-DD-YYYY")      
        let dateFinish = MOMENT(finishDay,"MM-DD-YYYY")      
        let task = await TASK.create({
            name:name,
            startDay:dateStart,
            finishDay:dateFinish,
            startHour:startHour,
            finishHour:finishHour,
            linkSupport:linkSupport,
            imageLink:imageLink,
            listId:listId,
            members
        })
        return res.status(200).json(task)
    } catch (error) {
        return res.status(500).json(error)
    }
}

//done
exports.updateTask = async (req,res) => {
    try {
        let {name, startDay, finishDay, startTime, finishTime, linkSupport, listId,imageLink} = req.body
        let id = req.params.id 
        let dateStart = MOMENT(startDay,"MM-DD-YYYY")      
        let dateFinish = MOMENT(finishDay,"MM-DD-YYYY")  
        await TASK.findByIdAndUpdate(id,{
            name:name,
            startDay:dateStart,
            finishDay:dateFinish,
            startTime:startTime,
            finishTime:finishTime,
            linkSupport:linkSupport,
            imageLink:imageLink,
            listId:listId
        })
        let task = await TASK.findById(id)
        return res.status(200).json(task)
    } catch (error) {
        return res.status(500).json(error)
    }
}

//done
exports.changeName = async (req,res) => {
    try {
        let name = req.body.name
        let id = req.params.id 
        await TASK.findByIdAndUpdate(id,{
            name:name
        })
        let task = await TASK.findById(id)
        return res.status(200).json(task)
    } catch (error) {
        return res.status(500).json(error)
    }
}

// exports.deleteLinkSupport = async (req,res) => {
//     try {
//         let _link_support = req.body.link_support
//         let id = req.params.id 
//         let _task = await task.findById(id)
//         let _links = _task.link_supports
//         for(let i = 0 ; i < _links.length() ; i ++ ){
//             if(_links[i] == _link_support){
                
//             }
//         }
//         res.status(200).json(_task)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// }

//done
exports.deleteTask = async (req,res) => {
    try {
        let id = req.params.id 
        await TASK.deleteOne({ _id: id });
        return res.status(200).json({
            id:id,
            msg:"Success"
        })
    } catch (error) {
        return res.status(500).json(error)
    }
}