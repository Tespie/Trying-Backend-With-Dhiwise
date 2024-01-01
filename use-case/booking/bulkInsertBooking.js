
/**
 *bulkInsertBooking.js
 */

const  bookingEntity = require('../../entities/booking');
const response = require('../../utils/response');

/**
 * @description : create multiple records  in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Bookings. {status, message, data}
 */

const bulkInsertBooking = ({ bookingDb }) => async (dataToCreate,req,res) => {
  let bookingEntities = dataToCreate.map(item => bookingEntity(item));
  let createdBooking = await bookingDb.create(bookingEntities);
  return response.success({ data:{ count:createdBooking.length || 0 } });
};
module.exports = bulkInsertBooking;