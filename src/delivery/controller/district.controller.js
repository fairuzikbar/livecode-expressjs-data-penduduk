const Response = require('../../utils/response')

const DistrictController = () => {
    const createDist = async (req, res) => {
        try {
            const payload = req.body;
            const newDist = await req.service.registerDist(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', newDist))
        } catch (error) {
            res.json(Response().errorMessage('XX', 'gagal'))
        }
    }

    const listDist = async (req,res) => {
        try {
            const keyword = req.query.username
            const dist = await req.service.findAllDist(keyword);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', dist));
        } catch (error) {
            res.json(Response().errorMessage('XX', 'gagal'))
        }
    }

    const getDist = async (req,res) => {
        try {
            const id = req.params.id;
            const dist = await req.service.findDistById(+id);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', dist));
        } catch (error) {
            res.json(Response().errorMessage('XX', 'gagal'))
        }
    }

    return {
        createDist, listDist, getDist
    }
}

module.exports = DistrictController;