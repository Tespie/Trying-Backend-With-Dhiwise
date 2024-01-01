const bookingDb = require('../../../../data-access/bookingDb');

const bookingSchema = require('../../../../validation/schema/booking');

const createValidation = require('../../../../validation')(bookingSchema.createSchema);
const updateValidation = require('../../../../validation')(bookingSchema.updateSchema);
const filterValidation = require('../../../../validation')(bookingSchema.filterValidationSchema);
const addBookingUsecase = require('../../../../use-case/booking/addBooking')({
  bookingDb,
  createValidation 
});
const bulkInsertBookingUsecase = require('../../../../use-case/booking/bulkInsertBooking')({ bookingDb });
const findAllBookingUsecase = require('../../../../use-case/booking/findAllBooking')({
  bookingDb,
  filterValidation
});
const getBookingCountUsecase = require('../../../../use-case/booking/getBookingCount')({
  bookingDb,
  filterValidation
});
const getBookingUsecase = require('../../../../use-case/booking/getBooking')({
  bookingDb,
  filterValidation
});
const updateBookingUsecase = require('../../../../use-case/booking/updateBooking')({
  bookingDb,
  updateValidation 
});
const partialUpdateBookingUsecase = require('../../../../use-case/booking/partialUpdateBooking')({ bookingDb });
const bulkUpdateBookingUsecase = require('../../../../use-case/booking/bulkUpdateBooking')({ bookingDb });
const softDeleteBookingUsecase = require('../../../../use-case/booking/softDeleteBooking')({ bookingDb });
const softDeleteManyBookingUsecase = require('../../../../use-case/booking/softDeleteManyBooking')({ bookingDb });
const deleteBookingUsecase = require('../../../../use-case/booking/deleteBooking')({ bookingDb });
const deleteManyBookingUsecase = require('../../../../use-case/booking/deleteManyBooking')({ bookingDb });

const bookingController = require('./booking');

const addBooking = bookingController.addBooking(addBookingUsecase);
const bulkInsertBooking = bookingController.bulkInsertBooking(bulkInsertBookingUsecase);
const findAllBooking = bookingController.findAllBooking(findAllBookingUsecase);
const getBookingCount = bookingController.getBookingCount(getBookingCountUsecase);
const getBookingById = bookingController.getBooking(getBookingUsecase);
const updateBooking = bookingController.updateBooking(updateBookingUsecase);
const partialUpdateBooking = bookingController.partialUpdateBooking(partialUpdateBookingUsecase);
const bulkUpdateBooking = bookingController.bulkUpdateBooking(bulkUpdateBookingUsecase);
const softDeleteBooking = bookingController.softDeleteBooking(softDeleteBookingUsecase);
const softDeleteManyBooking = bookingController.softDeleteManyBooking(softDeleteManyBookingUsecase);
const deleteBooking = bookingController.deleteBooking(deleteBookingUsecase);
const deleteManyBooking = bookingController.deleteManyBooking(deleteManyBookingUsecase);

module.exports = {
  addBooking,
  bulkInsertBooking,
  findAllBooking,
  getBookingCount,
  getBookingById,
  updateBooking,
  partialUpdateBooking,
  bulkUpdateBooking,
  softDeleteBooking,
  softDeleteManyBooking,
  deleteBooking,
  deleteManyBooking,
};