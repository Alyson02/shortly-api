import Joi from "joi";
import userSchema from "./userModel.js";
import loginModel from "./loginModel.js";

const schemas = {
  signupPOST: userSchema,
  signinPOST: loginModel,
};

export default schemas;
