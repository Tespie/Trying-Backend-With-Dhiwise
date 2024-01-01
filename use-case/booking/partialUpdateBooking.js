/**
 *partialUpdateBooking.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Booking. {status, message, data}
 */
const partialUpdateBooking = ({ bookingDb }) => async (params,req,res) => {
  const booking = await bookingDb.updateOne(params.query,params.dataToUpdate);
  if (!booking){
    return response.recordNotFound();
  }
  return response.success({ data:booking });
};
module.exports = partialUpdateBooking;