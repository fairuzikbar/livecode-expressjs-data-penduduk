const RegencyService = (regencyRepository) => {
    const { create, list, getById } = regencyRepository;

    const registerReg = async (newReg) => {
        try {
            return await create(newReg)
        } catch (error) {
            return err.message
        }
    };

    const findAllReg = async () => {
        try {
            return await list()
        } catch (error) {
            return err.message
        }
    };

    const findRegById = async (id) => {
     try {
        return await getById(id);        
     } catch (error) {
        return err.message
     }   
    }

    return {
        registerReg, findAllReg, findRegById
    }
}

module.exports = RegencyService;