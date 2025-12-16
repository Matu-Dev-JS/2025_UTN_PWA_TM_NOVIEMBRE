import User from "../models/User.model.js";


class UserRepository {
    async crear (email, password, username) {
        await User.insertOne({email, password, username})
    }

    async buscarUnoPorEmail (email) {
        const user = await User.findOne({email})
        return user
    }
}

const userRepository = new UserRepository()
export default userRepository
