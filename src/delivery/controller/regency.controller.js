const Response = require('../../utils/response')

const RegencyController = () => {
    const createReg = async (req, res) => {
        try {
            const payload = req.body;
            const newReg = await req.service.registerReg(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', newReg))
        } catch (error) {
            res.json(Response().errorMessage('XX', 'gagal'))
        }
    }

    const listReg = async (req,res) => {
        try {
            const keyword = req.query.username
            const reg = await req.service.findAllReg(keyword);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', reg));
        } catch (error) {
            res.json(Response().errorMessage('XX', 'gagal'))
        }
    }

    const getReg = async (req,res) => {
        try {
            const id = req.params.id;
            const reg = await req.service.findRegById(+id);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', reg));
        } catch (error) {
            res.json(Response().errorMessage('XX', 'gagal'))
        }
    }

    return {
        createReg, listReg, getReg
    }
}

module.exports = RegencyController;