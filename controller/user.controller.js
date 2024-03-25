const userServices = require('../services/user.services');

exports.register = async(req,res,next)=>{
    try {
        const {email,password} = req.body;

        const sucessRes = await userServices.registerUser(email,password);

        res.json({status:true, success:"User Registered Successfully"});
    } catch (error) {
        throw error;
    }
}