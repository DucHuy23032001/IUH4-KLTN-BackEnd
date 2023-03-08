const PROJECT = require('../models/project')
const ROLE = require('../models/role')
const MOMENT = require('moment')

//done
exports.getProjectById = async (req,res) => {
  try {
    let id = req.params.id
    let project = await PROJECT.findById(id)
    return res.status(200).json(project)
  } catch (error) {
    return res.status(500).json(error)
  }
}

//done
exports.getProjectByName = async (req,res) => {
  try {
    let name = req.params.name
    let projects = await PROJECT.find({
      name:name
    })
    return res.status(200).json(projects)
  } catch (error) {
    return res.status(500).json(error)
  }
}

//done
exports.updateProject = async (req,res) => {
  try {
    let {name,startTime, finishTime,status,roleIds} = req.body
    let start = MOMENT(startTime,"MM-DD-YYYY")      
    let finish = MOMENT(finishTime,"MM-DD-YYYY")   
    let id = req.params.id
    await PROJECT.findByIdAndUpdate(id,{
      name:name,
      start_time :start,
      finish_time : finish,
      status:status,
      roleIds:roleIds
    })  
    let project = await PROJECT.findById(id)
    return res.status(200).json(project) 
  } catch (error) {
    return res.status(500).json(error)
  }
}

//done
exports.createProject = async (req,res) => {
  try {
    let {name,startTime, finishTime,roleIds} = req.body
    let start = MOMENT(startTime,"MM-DD-YYYY")      
    let finish = MOMENT(finishTime,"MM-DD-YYYY")      
    let project = await PROJECT.create({
      name:name,
      startTime :start,
      finishTime : finish,
      status:1,
      roleIds:roleIds
    })
    return res.status(201).json(project) 
  } catch (error) {
    return res.status(500).json(error)
  } 
}
