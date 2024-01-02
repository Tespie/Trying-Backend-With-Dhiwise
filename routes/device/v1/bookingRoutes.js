const express = require('express');
const router = express.Router();
const bookingController = require('../../../controller/device/v1/booking');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant'); 

router.route('/device/api/v1/booking/create').post(auth(PLATFORM.DEVICE),checkRolePermission,bookingController.addBooking);
router.route('/device/api/v1/booking/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,bookingController.bulkInsertBooking);
router.route('/device/api/v1/booking/list').post(auth(PLATFORM.DEVICE),checkRolePermission,bookingController.findAllBooking);
router.route('/device/api/v1/booking/count').post(auth(PLATFORM.DEVICE),checkRolePermission,bookingController.getBookingCount);
router.route('/device/api/v1/booking/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,bookingController.getBookingById);
router.route('/device/api/v1/booking/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,bookingController.updateBooking);   
router.route('/device/api/v1/booking/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,bookingController.partialUpdateBooking);   
router.route('/device/api/v1/booking/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,bookingController.bulkUpdateBooking); 
router.route('/device/api/v1/booking/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,bookingController.softDeleteBooking);
router.route('/device/api/v1/booking/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,bookingController.softDeleteManyBooking);
router.route('/device/api/v1/booking/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,bookingController.deleteBooking);
router.route('/device/api/v1/booking/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,bookingController.deleteManyBooking);

module.exports = router;
