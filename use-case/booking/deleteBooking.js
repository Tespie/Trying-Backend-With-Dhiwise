
/**
 *deleteBooking.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Booking. {status, message, data}
 */
const deleteBooking = ({ bookingDb }) => async (query,req,res) => {
  let deletedBooking = await bookingDb.deleteOne(query);
  if (!deletedBooking){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedBooking });
};

module.exports = deleteBooking;