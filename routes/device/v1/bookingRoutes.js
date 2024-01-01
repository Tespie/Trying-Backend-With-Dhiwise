const express = require('express');
const router = express.Router();
const bookingController = require('../../../controller/device/v1/booking');
const { auth, } = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/device/api/v1/booking/create').post(bookingController.addBooking);
router.route('/device/api/v1/booking/addBulk').post(bookingController.bulkInsertBooking);
router.route('/device/api/v1/booking/list').post(bookingController.findAllBooking);
router.route('/device/api/v1/booking/count').post(bookingController.getBookingCount);
router.route('/device/api/v1/booking/:id').get(bookingController.getBookingById);
router.route('/device/api/v1/booking/update/:id').put(bookingController.updateBooking);  
router.route('/device/api/v1/booking/partial-update/:id').put(bookingController.partialUpdateBooking);  
router.route('/device/api/v1/booking/updateBulk').put(bookingController.bulkUpdateBooking);
router.route('/device/api/v1/booking/softDelete/:id').put(bookingController.softDeleteBooking);
router.route('/device/api/v1/booking/softDeleteMany').put(bookingController.softDeleteManyBooking);
router.route('/device/api/v1/booking/delete/:id').delete(bookingController.deleteBooking);
router.route('/device/api/v1/booking/deleteMany').post(bookingController.deleteManyBooking);

module.exports = router;
