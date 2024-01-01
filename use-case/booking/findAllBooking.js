/**
 *findAllBooking.js
 */

const response = require('../../utils/response');

/**
 * @description : find all records from database based on query and options.
 * @param {Object} params : request body including option and query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : found Booking(s). {status, message, data}
 */
const findAllBooking = ({
  bookingDb,filterValidation 
}) => async (params,req,res) => {
  const validateRequest = await filterValidation(params);
  if (!validateRequest.isValid) {
    return response.validationError({ message: `Invalid values in parameters, ${validateRequest.message}` });
  }
  let {
    query, options, isCountOnly 
  } = params;
  if (isCountOnly){
    let totalRecords = await bookingDb.count(query);
    return response.success({ data: { totalRecords } });  
  }
  else {
    let foundBooking = await bookingDb.paginate(query,options);
    if (!foundBooking){
      return response.recordNotFound();
    }
    return response.success({ data:foundBooking });  
  }
        
};
module.exports = findAllBooking;