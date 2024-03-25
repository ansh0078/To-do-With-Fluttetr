const UserModel = require('../model/user.model');

class userServices{
    static async registerUser(email,passward){
        try {
            const createUser = new UserModel({email,passward});
            return await createUser.save();
            
        } catch (error) {
            throw error;
        }
    }
}

module.exports = userServices;