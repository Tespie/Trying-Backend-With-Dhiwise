/**
 *addBooking.js
 */

const  bookingEntity = require('../../entities/booking');
const response = require('../../utils/response');
/**
 * @description : create new record of booking in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addBooking = ({
  bookingDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let booking = bookingEntity(dataToCreate);
  booking = await bookingDb.create(booking);
  return response.success({ data:booking });
};
module.exports = addBooking;