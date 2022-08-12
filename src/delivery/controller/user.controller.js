const Response = require('../../utils/response')

const UserController = () => {
    const createUser = async (req, res) => {
        try {
            const payload = req.body;
            const newUser = await req.service.registerUser(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', newUser))
        } catch (error) {
            res.json(Response().errorMessage('XX', 'gagal'))
        }
    }

    const listUser = async (req,res) => {
        try {
            const keyword = req.query.username
            const user = await req.service.findAllUser(keyword);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', user));
        } catch (error) {
            res.json(Response().errorMessage('XX', 'gagal'))
        }
    }

    const getUser = async (req,res) => {
        try {
            const id = req.params.id;
            const user = await req.service.findUserById(+id);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', user));
        } catch (error) {
            res.json(Response().errorMessage('XX', 'gagal'))
        }
    }

    //Kalo mau pake id
    const updateUser = async (req, res) => {
        try {
            const id = req.params.id;
            const payload = req.body;
            const upUser = await req.service.editUser(payload, id);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', upUser))
        } catch (error) {
            res.json(Response().errorMessage('XX', 'gagal'))
        }
    }

    const deleteUserData = async (req,res) => {
        const id = req.params.id;
        const user = await req.service.deleteUser(+id);
        res.json(Response().successMessage(res.statusCode, 'SUCCESS', user));
    }

    return {
        createUser, listUser, getUser, updateUser, deleteUserData
    }
}

module.exports = UserController;