const TASK = require('../models/task')
const WORK = require('../models/work')
const MOMENT = require('moment')

//done
exports.getAllTaskByIdProject = async (req, res) => {
    try {
        let id = req.params.id
        let data = []
        let works = await WORK.find({
            projectId: id
        })
        for (i of works) {
            let tasks = await TASK.find({
                workId: i._id
            })
            for (j of tasks) {
                data.push(j)
            }
            // console.log(tasks);
        }
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}

//done
exports.getAllTaskInWork = async (req, res) => {
    try {
        let id = req.params.id
        console.log(id);
        let tasks = await TASK.find({
            workId: id
        })
        return res.status(200).json(tasks)
    } catch (error) {
        return res.status(500).json(error)
    }
}

//done
exports.getTaskById = async (req, res) => {
    try {
        let id = req.params.id
        let tasks = await TASK.findById(id)
        return res.status(200).json(tasks)
    } catch (error) {
        return res.status(500).json(error)
    }
}

//done
exports.getTaskByName = async (req, res) => {
    try {
        let name = req.params.name
        let task = await TASK.find({
            name: name
        })
        return res.status(200).json(task)
    } catch (error) {
        return res.status(500).json(error)
    }
}

//done
exports.createTask = async (req, res) => {
    try {
        let { name, startDay, endDay, startHour, endHour, linkSupport, imageLink, workId, members } = req.body
        let dateStart = MOMENT(startDay, "MM-DD-YYYY")
        let dateend = MOMENT(endDay, "MM-DD-YYYY")
        let task = await TASK.create({
            name: name,
            startDay: dateStart,
            endDay: dateend,
            startHour: startHour,
            endHour: endHour,
            linkSupport: linkSupport,
            imageLink: imageLink,
            workId: workId,
            members
        })
        return res.status(200).json(task)
    } catch (error) {
        return res.status(500).json(error)
    }
}

//done
exports.updateTask = async (req, res) => {
    try {
        let { name, startDay, endDay, startTime, endTime, linkSupports, imageLink, userId } = req.body
        let id = req.params.id
        let check = true
        let dateStart = MOMENT(startDay, "MM-DD-YYYY")
        let dateend = MOMENT(endDay, "MM-DD-YYYY")
        let task = await TASK.findById(id)
        for (i of task.members) {
            if (userId == i) {
                check = false
            }
        }
        if (check) {
            return res.status(400).json({
                message: "Only member can edit"
            })
        }
        task.name = name
        task.startDay = dateStart
        task.endDay = dateend
        task.startTime = startTime
        task.endTime = endTime
        task.linkSupports = linkSupports
        task.imageLink = imageLink
        task.save()
        return res.status(200).json(task)
    } catch (error) {
        return res.status(500).json(error)
    }
}

//done
exports.changeName = async (req, res) => {
    try {
        let name = req.body.name
        let id = req.params.id
        await TASK.findByIdAndUpdate(id, {
            name: name
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
exports.deleteTask = async (req, res) => {
    try {
        let id = req.params.id
        await TASK.deleteOne({ _id: id });
        return res.status(200).json({
            id: id,
            msg: "Success"
        })
    } catch (error) {
        return res.status(500).json(error)
    }
}