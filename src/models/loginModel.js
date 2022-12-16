import Joi from "joi";

const loginModel = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6),
});

export default loginModel;
