const joi = require('joi');
const {
  options, isCountOnly, populate, select 
} = require('../commonFilterValidation');

const createSchema = joi.object({
  id: joi.number().integer().allow(0),
  location: joi.string().allow(null).allow(''),
  bookingDate: joi.date().options({ convert: true }).allow(null).allow(''),
  fromTime: joi.string().allow(null).allow(''),
  toTime: joi.string().allow(null).allow(''),
  purpose: joi.string().allow(null).allow(''),
  department: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean()
}).unknown(true);

const updateSchema = joi.object({
  id: joi.number().integer().allow(0),
  location: joi.string().allow(null).allow(''),
  bookingDate: joi.date().options({ convert: true }).allow(null).allow(''),
  fromTime: joi.string().allow(null).allow(''),
  toTime: joi.string().allow(null).allow(''),
  purpose: joi.string().allow(null).allow(''),
  department: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  _id: joi.string().regex(/^[0-9a-fA-F]{24}$/)
}
).unknown(true);

let keys = ['query', 'where'];
let filterValidationSchema = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      id: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      location: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      bookingDate: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      fromTime: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      toTime: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      purpose: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      department: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
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