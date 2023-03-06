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
        let {name,projectId} = req.body
        let project = await WORK.create({
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
        let name = req.body.name
        let id = req.params.id  
        await WORK.findByIdAndUpdate(id,{
            name:name
        })
        let work = await WORK.findById(id)
        return res.status(200).json(work)
    } catch (error) {
        return res.status(500).json(error)
    }
}


exports.changeStatusWork = async (req,res) => {
    try {
        let id = req.params.id  
        await TASK.updateMany({status:0}, { $set: { listId: id } });
        await WORK.findByIdAndUpdate(id,{
            status:true
        })  
        let work = await WORK.findById(id)
        return res.status(200).json(work)
    } catch (error) {
        return res.status(500).json(error)
    }
}