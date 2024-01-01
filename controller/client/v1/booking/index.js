const bookingDb = require('../../../../data-access/bookingDb');

const bookingSchema = require('../../../../validation/schema/booking');

const createValidation = require('../../../../validation')(bookingSchema.createSchema);
const updateValidation = require('../../../../validation')(bookingSchema.updateSchema);
const filterValidation = require('../../../../validation')(bookingSchema.filterValidationSchema);

const bookingController = require('./booking');

module.exports = {};