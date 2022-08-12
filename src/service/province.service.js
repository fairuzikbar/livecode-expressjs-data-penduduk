const ProvService = (provinceRepository) => {
    const { create, list, getById } = provinceRepository;

    const registerProv = async (newProv) => {
        try {
            return await create(newProv)
        } catch (error) {
            return err.message
        }
    };

    const findAllProv = async () => {
        try {
            return await list()
        } catch (error) {
            return err.message
        }
    };

    const findProvById = async (id) => {
     try {
        return await getById(id);        
     } catch (error) {
        return err.message
     }   
    }

    return {
        registerProv, findAllProv, findProvById
    }
}

module.exports = ProvService;