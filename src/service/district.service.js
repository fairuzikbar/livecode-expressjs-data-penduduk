const DistrictService = (districtRepository) => {
    const { create, list, getById } = districtRepository;

    const registerDist = async (newDist) => {
        try {
            return await create(newDist)
        } catch (error) {
            return err.message
        }
    };

    const findAllDist = async () => {
        try {
            return await list()
        } catch (error) {
            return err.message
        }
    };

    const findDistById = async (id) => {
     try {
        return await getById(id);        
     } catch (error) {
        return err.message
     }   
    }

    return {
        registerDist, findAllDist, findDistById
    }
}

module.exports = DistrictService;