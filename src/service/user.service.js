const UserService = (userRepository) => {
    const { create, list, getById, update, deleted, getUserByUsernamePassword } = userRepository;

    const registerUser = async (newUser) => {
        try {
            return await create(newUser)
        } catch (error) {
            return err.message
        }
    };

    const findAllUser = async (keyword) => {
        try {
            return await list(keyword)
        } catch (error) {
            return err.message
        }
    };

    const findUserById = async (id) => {
     try {
        return await getById(id);        
     } catch (error) {
        return err.message
     }   
    }

    const editUser = async (upUser, id) => {
        try {
            return await update(upUser, id);
        } catch (error) {
            return err.message
        }
    }

    // const editUsers = async (upUsers) => {
    //     try {
    //         return await update(upUsers); //Kalo mau tanpa id
    //     } catch (error) {
    //         console.log(error);
    //     }       
    // }

    const deleteUser = async (id) => {
        try {
            return await deleted(id)
        } catch (error) {
            console.log(error);
        }
    };

    const findUserByUsernamePassword = async (username, password) => {
        try {
            return await getUserByUsernamePassword(username, password)
        } catch (error) {
            return error.message
        }
    }

    return {
        registerUser, findAllUser, findUserById, editUser, deleteUser, findUserByUsernamePassword
    }
}

module.exports = UserService;