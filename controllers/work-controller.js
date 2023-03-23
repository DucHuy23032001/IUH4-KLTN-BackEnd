const WORK = require('../models/work')
const TASK = require('../models/task')

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
exports.createWork = async (req,res) => {
    try {
        let {name, projectId, createId} = req.body
        let project = await WORK.create({
            createId:createId,
            name:name,
            projectId:projectId
        })
        return res.status(200).json(project)
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
        // await WORK.findByIdAndUpdate(id,{
        //     name:name
        // })
        // let work = await WORK.findById(id)
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

        // await WORK.findByIdAndUpdate(id,{
        //     status:true
        // })  
        // let work = await WORK.findById(id)
        return res.status(200).json(work)
    } catch (error) {
        return res.status(500).json(error)
    }
}