module.exports = (user) => {

  let newUser = { 
    id: user.id,
    username: user.username,
    email: user.email,
    password: user.password,
    userType: user.userType,
    mobileNo: user.mobileNo,
    isDeleted: user.isDeleted,
    resetPasswordLink: user.resetPasswordLink,
    loginRetryLimit: user.loginRetryLimit,
    loginReactiveTime: user.loginReactiveTime,
  };

  // remove undefined values
  Object.keys(newUser).forEach(key => newUser[key] === undefined && delete newUser[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newUser) => {
   *   if (!newUser.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newUser) 
   */

  return Object.freeze(newUser);
};
