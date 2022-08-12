const Response = require('../../utils/response')

const PeopleController = () => {
    const createPeople = async (req, res) => {
        try {
            const payload = req.body;
            const newPeople = await req.service.registerPeople(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', newPeople))
        } catch (error) {
            console.log(error);
            res.json(Response().errorMessage('XX', 'gagal'))
        }
    }

    const listPeople = async (req,res) => {
        try {
            const prov = req.query.province
            const reg = req.query.regency
            const dist = req.query.district
            const people = await req.service.findAllPeople(prov, reg, dist);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', people));
        } catch (error) {
            console.log(error);
            res.json(Response().errorMessage('XX', 'gagal'))
        }
    }

    const getPeople = async (req,res) => {
        try {
            const id = req.params.id;
            const people = await req.service.findPeopleById(+id);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', people));
        } catch (error) {
            res.json(Response().errorMessage('XX', 'gagal'))
        }
    }

    return {
        createPeople, listPeople, getPeople
    }
}

module.exports = PeopleController;