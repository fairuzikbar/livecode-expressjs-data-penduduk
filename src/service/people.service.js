const PeopleService = (peopleRepository) => {
    const { create, list, getById } = peopleRepository;

    const registerPeople = async (newPeople) => {
        try {
            return await create(newPeople)
        } catch (error) {
            console.log(error);
            return error.message
        }
    };

    const findAllPeople = async (prov, reg, dist) => {
        try {
            return await list(prov, reg, dist)
        } catch (error) {
            console.log(error);
        }
    };

    const findPeopleById = async (id) => {
     try {
        return await getById(id);        
     } catch (error) {
        return err.message
     }   
    }

    return {
        registerPeople, findAllPeople, findPeopleById
    }
}

module.exports = PeopleService;