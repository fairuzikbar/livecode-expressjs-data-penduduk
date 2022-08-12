const Response = require('../../utils/response')

const ProvController = () => {
    const createProv = async (req, res) => {
        try {
            const payload = req.body;
            const newProv = await req.service.registerProv(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', newProv))
        } catch (error) {
            res.json(Response().errorMessage('XX', 'gagal'))
        }
    }

    const listProv = async (req,res) => {
        try {
            const keyword = req.query.username
            const prov = await req.service.findAllProv(keyword);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', prov));
        } catch (error) {
            res.json(Response().errorMessage('XX', 'gagal'))
        }
    }

    const getProv = async (req,res) => {
        try {
            const id = req.params.id;
            const prov = await req.service.findProvById(+id);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', prov));
        } catch (error) {
            res.json(Response().errorMessage('XX', 'gagal'))
        }
    }

    return {
        createProv, listProv, getProv
    }
}

module.exports = ProvController;