/**
 *test_middleware.js
 */

module.exports = async (req, res, next) => {
  // start writing your code from here do not remove above code
  console.log(`My Request baseurl : ${req.baseurl}`);
  console.log(`My Request route : ${req.route}`);
  return next();
};
