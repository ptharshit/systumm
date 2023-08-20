const errorHandler = require('../middlewares/errorMiddleWare');
const userModel = require('../models/userModel');
const errorResponse = require('../utils/errorResponse');

//jwt token
exports.sendToken = (user , statusCode , res)=>{
    const token = user.getSignedToken(res)
    res.status(statusCode).json({
        success:true,
        token,
    });
};


//REGISTER 
exports.registerContoller = async (req, res, next) => {
    try {
      const { username, email, password } = req.body;
      //exisitng user
      const exisitingEmail = await userModel.findOne({ email });
      if (exisitingEmail) {
        return next(new errorResponse("Email is already register", 500));
      }
      const user = await userModel.create({ username, email, password });
      this.sendToken(user, 201, res);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };


// LOGIN
exports.loginController = async (req,res,next)=>{
    try {
        const {email,password} = req.body
        if(!email || !password){
            return next(new errorResponse('Please provide email or password'))
        }
        const user = await userModel.findOne({email})
        if(!user){
            return next(new errorResponse('Invalid Creditial',401))
        }
        const isMatch = await userModel.matchPassword(password)
        if(!isMatch){
            return next(new errorHandler('Invalid Credential',401))

        }
        //response
        sendToken(user,200,res)
    } catch (error) {
        console.log(error);
        next(error);
    }
};
exports.logoutController = async (req,res)=>{
    res.clearCookie('refreshToken')
    return res.status(200).json({
        success:true,
        message:'log out successfully'
    })
};
