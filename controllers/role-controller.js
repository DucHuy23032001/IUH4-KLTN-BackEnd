const ROLE = require('../models/role')

//done
exports.getAllRoleOfUser = async (req, res) => {
    try {
        let id = req.params.id
        let role = await ROLE.find({
            members: {
                $in: id
            }
        });
        return res.status(200).json(role)
    } catch (error) {
        return res.status(500).json({ msg: error })
    }
}

//done
exports.createRole = async (req, res) => {
    try {
        let { name, members, leaderId, status, createId } = req.body
        let role = await ROLE.create({
            status: status,
            leaderId:leaderId,
            name: name,
            members: members,
            createId:createId
        })
        return res.status(200).json(role)
    } catch (error) {
        return res.status(500).json({ msg: error })
    }
}

//done
exports.changeName = async (req, res) => {
    try {
        let id = req.params.id
        // let main
        let {newName, createId} = req.body
        let role = await ROLE.findById(id)
        if (role.createId != createId) {
            return res.status(400).json({
                message: "Only the creator can edit"
            })
        }
        role.name = newName
        await role.save();
        return res.status(200).json(role)
    } catch (error) {
        return res.status(500).json({ msg: error })
    }
}

//done
exports.removeMember = async (req, res) => {
    try {
        let id = req.params.id
        let { memberId, createId } = req.body
        let role = await ROLE.findById(id)
        if (role.createId != createId) {
            return res.status(400).json({
                message: "Only the creator can edit"
            })
        }
        let members = role.members
        members.pull(memberId)
        role.members = members
        await role.save();
        return res.status(200).json({
            role:role,
            memberId:memberId
        })
    } catch (error) {
        return res.status(500).json({ msg: error })
    }
}

//d\có bug
exports.addMember = async (req, res) => {
    try {
        let id = req.params.id
        let { memberIds } = req.body
        let role = await ROLE.findById(id)
        let members = role.members
        let check = false
        // let newMembers = []
        for (let i of memberIds) {
            for (let j of members) {

                if (i == j) {
                    check = true
                }
            }
            console.log(check);
            if (!check) {
                members.push(i)
            } else {
                console.log(i);
                console.log(memberIds);
                newMembers = memberIds.pull(i)
            }
        }
        await role.save();
        return res.status(200).json({
            role: role,
            newMembers: memberIds
        })
    } catch (error) {
        return res.status(500).json({ msg: error })
    }
}