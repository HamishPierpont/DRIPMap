const Joi = require('@hapi/joi');

const registerValidation = (data) => {
  const schema = Joi.object({
      firstName: Joi.string().min(1).required(),
      lastName: Joi.string().min(1).required(),
      userName: Joi.string().min(1).required(),
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
    title: Joi.string().min(1).required(),
    description: Joi.string(),
    typeOfDisaster: Joi.string().min(1).required(),
    location: {
        lat: Joi.number().required(),
        lng: Joi.number().required()
    },
    userName: Joi.string().min(1).required(),
    date: Joi.date().required(),
    imageId: Joi.string().required()
  });

  return schema.validate(data);
};

const createImageValidation = (data) => {
  const schema = Joi.object({
    size: Joi.number().integer().required(),
    buffer: Joi.binary().required(),
    mimeType: Joi.string()
  });

  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.createEventValidation = createEventValidation;
module.exports.createImageValidation = createImageValidation;
