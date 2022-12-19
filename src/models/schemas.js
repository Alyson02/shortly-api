import userSchema from "./userModel.js";
import loginModel from "./loginModel.js";
import urlModel from "./urlModel.js";

const schemas = {
  signupPOST: userSchema,
  signinPOST: loginModel,
  urlPOST: urlModel,
};

export default schemas;
