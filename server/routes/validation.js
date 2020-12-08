const Joi = require('@hapi/joi');

const registerValidation = (data) => {
  const schema = Joi.object({
      name: Joi.string().min(6).required(),
      email: Joi.string().min(6).required().email(),
      password: Joi.string().min(6).required()
  });

  return schema.validate(data);
};

const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
  
    return schema.validate(data);
};

const createEventValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string(),
    typeOfDisaster: Joi.string().required(),
    buffer: Joi.binary().required()
  });

  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.createEventValidation = createEventValidation;

