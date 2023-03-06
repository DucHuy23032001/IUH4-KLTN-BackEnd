const ROLE = require('../models/role')

//done
exports.getAllRoleOfUser = async (req,res) =>{
    try {
        let id = req.params.id
        let role = await ROLE.find({
            members:{
                $in:id
            }
        });
        return res.status(200).json(role)
    } catch (error) {
        return res.status(500).json({msg:error})
    }
}

//done
exports.createRole = async (req,res) => {
    try {
        let {name,members} = req.body
        let role = await ROLE.create({
            name:name,
            members:members
        })
        return res.status(200).json(role)
    } catch (error) {
        return res.status(500).json({msg:error})
    }
}

//done
exports.changeName = async (req,res) => {
    try {
        let id = req.params.id
        let newName = req.body.name
        let role = await ROLE.findById(id)
        role.name = newName
        await role.save();
        return res.status(200).json(role)
    } catch (error) {
        return res.status(500).json({msg:error})
    }
}

//done
exports.removeMember = async (req,res) => {
    try {
        let id = req.params.id
        let {memberId} = req.body
        let role = await ROLE.findById(id)
        let members = role.members
        members.pull(memberId)
        role.members = members
        await role.save();
        return res.status(200).json(role)
    } catch (error) {
        return res.status(500).json({msg:error})
    }
}

//done
exports.addMember = async (req,res) => {
    try {
        let id = req.params.id
        let {memberId} = req.body
        let role = await ROLE.findById(id)
        let members = role.members
        members.push(memberId)
        role.members = members
        await role.save();
        return res.status(200).json(role)
    } catch (error) {
        return res.status(500).json({msg:error})
    }
}