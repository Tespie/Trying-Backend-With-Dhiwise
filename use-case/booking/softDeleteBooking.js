/**
 *softDeleteBooking.js
 */

const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Booking. {status, message, data}
 */
const softDeleteBooking = ({ bookingDb }) => async (params,req,res) => {
  let updatedBooking = await bookingDb.updateOne(params.query, params.dataToUpdate);
  if (!updatedBooking){
    return response.recordNotFound();   
  }
  return response.success({ data:updatedBooking });
};
module.exports = softDeleteBooking;