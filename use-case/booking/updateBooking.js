/**
 *updateBooking.js
 */

const  bookingEntity = require('../../entities/booking');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Booking. {status, message, data}
 */
const updateBooking = ({
  bookingDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let booking = bookingEntity(dataToUpdate);
  booking = await bookingDb.updateOne(query,booking);
  if (!booking){
    return response.recordNotFound();
  }
  return response.success({ data:booking });
};
module.exports = updateBooking;