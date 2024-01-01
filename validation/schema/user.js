const joi = require('joi');
const {
  options, isCountOnly, populate, select 
} = require('../commonFilterValidation');
const authConstantDefault = require('../../constants/authConstant');

const { USER_TYPES } = require('../../constants/authConstant');
const convertObjectToEnum = require('../../utils/convertObjectToEnum');

const createSchema = joi.object({
  id: joi.number().integer().allow(0),
  username: joi.string().allow(null).allow(''),
  email: joi.string().allow(null).allow(''),
  password: joi.string().allow(null).allow(''),
  name: joi.string().allow(null).allow(''),
  isActive: joi.boolean(),
  addedBy: joi.string().allow(null).allow(''),
  updatedBy: joi.string().allow(null).allow(''),
  userType: joi.number().allow(0),
  mobileNo: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  resetPasswordLink: joi.object({
    code:joi.string(),
    expireTime:joi.date().options({ convert: true })
  })
}).unknown(true);

const updateSchema = joi.object({
  id: joi.number().integer().allow(0),
  username: joi.string().allow(null).allow(''),
  email: joi.string().allow(null).allow(''),
  password: joi.string().allow(null).allow(''),
  name: joi.string().allow(null).allow(''),
  isActive: joi.boolean(),
  addedBy: joi.string().allow(null).allow(''),
  updatedBy: joi.string().allow(null).allow(''),
  userType: joi.number().allow(0),
  mobileNo: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  resetPasswordLink: joi.object({
    code:joi.string(),
    expireTime:joi.date().options({ convert: true })
  }),
  _id: joi.string().regex(/^[0-9a-fA-F]{24}$/)
}
).unknown(true);

let keys = ['query', 'where'];
let filterValidationSchema = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      id: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      username: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      email: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      password: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      name: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      addedBy: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      updatedBy: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      mobileNo: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      _id: joi.alternatives().try(joi.array().items(),joi.string().regex(/^[0-9a-fA-F]{24}$/),joi.object())
    }
    ).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  populate: joi.array().items(populate),
  select: select

}).unknown(true);

module.exports = {
  createSchema,
  updateSchema,
  filterValidationSchema
};