import Joi from "joi";

const urlModel = Joi.object({
  url: Joi.string().required().uri(),
});

export default urlModel;
