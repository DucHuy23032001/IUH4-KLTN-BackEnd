const WORK = require('../models/work')
const TASK = require('../models/task')
const MOMENT = require('moment')

//done
exports.getAllWorkByProjectId = async (req,res) => {
    try {
        let id = req.params.id  
        let works = await WORK.find({
            projectId:id
        })
        return res.status(200).json(works)
    } catch (error) {
        return res.status(500).json(error)
    }
}

//done
exports.getWorkByName = async (req,res) => {
    try {
        let name = req.params.name 
        console.log(name);
        let works = await WORK.find({
            name:name
        })
        console.log(works);
        return res.status(200).json(works)
    } catch (error) {
        return res.status(500).json(error)
    }
}

//done
exports.getWorkById = async (req,res) => {
    try {
        let id = req.params.id 
        let works = await WORK.findById(id)
        return res.status(200).json(works)
    } catch (error) {
        return res.status(500).json(error)
    }
}

//done
exports.createWork = async (req,res) => {
    try {
        let {name, projectId, startTime, endTime, createId, teamId} = req.body
        let start = MOMENT(startTime,"MM-DD-YYYY")      
        let end = MOMENT(endTime,"MM-DD-YYYY")   
        let project = await WORK.create({
            teamId:teamId,
            status:false,
            createId:createId,
            name:name,
            projectId:projectId,
            startTime:start,
            endTime:end
        })
        return res.status(200).json(project)
    } catch (error) {
        return res.status(500).json(error)
    }
}

//done
exports.updateTimeWork = async (req,res) => {
    try {
        let {createId, startTime, endTime,} = req.body
        let id = req.params.id  
        let start = MOMENT(startTime,"MM-DD-YYYY")      
        let end = MOMENT(endTime,"MM-DD-YYYY") 
        let work = await WORK.findById(id)
        if(work.createId != createId) {
            return res.status(400).json({
                message:"Only the project owner can edit"
            })
        }

        work.startTime = start;
        work.endTime = end;
        work.save()
        return res.status(200).json(work)
    } catch (error) {
        return res.status(500).json(error)
    }
}

//done
exports.changeNameWork = async (req,res) => {
    try {
        let {createId, name} = req.body
        let id = req.params.id  

        let work = await WORK.findById(id)
        if(work.createId != createId) {
            return res.status(400).json({
                message:"Only the project owner can edit"
            })
        }

        work.name = name;
        work.save()
        return res.status(200).json(work)
    } catch (error) {
        return res.status(500).json(error)
    }
}

// done
exports.changeStatusWork = async (req,res) => {
    try {
        let createId = req.body.createId
        let id = req.params.id  

        let work = await WORK.findById(id)
        if(work.createId != createId) {
            return res.status(400).json({
                message:"Only the project owner can edit"
            })
        }

        await TASK.updateMany({status:0}, { $set: { listId: id } });
        work.status = true
        work.save()
        return res.status(200).json(work)
    } catch (error) {
        return res.status(500).json(error)
    }
}