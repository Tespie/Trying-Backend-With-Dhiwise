module.exports = (booking) => {

  let newBooking = { 
    id: booking.id,
    location: booking.location,
    bookingDate: booking.bookingDate,
    fromTime: booking.fromTime,
    toTime: booking.toTime,
    purpose: booking.purpose,
    createdAt: booking.createdAt,
    updatedAt: booking.updatedAt,
    isDeleted: booking.isDeleted,
  };

  // remove undefined values
  Object.keys(newBooking).forEach(key => newBooking[key] === undefined && delete newBooking[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newBooking) => {
   *   if (!newBooking.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newBooking) 
   */

  return Object.freeze(newBooking);
};
