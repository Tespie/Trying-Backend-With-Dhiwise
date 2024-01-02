let mongoose = require('../connection.js');
const mongoosePaginate = require('mongoose-paginate-v2');
const idValidator = require('mongoose-id-validator');
const autoIncrement = require('mongoose-sequence')(mongoose);
const convertObjectToEnum = require('../../../utils/convertObjectToEnum');
const { USER_TYPES } =  require('../../../constants/authConstant');
const bcrypt = require('bcrypt');
const authConstantEnum = require('../../../constants/authConstant');

const modelCustomLabels = {
  totalDocs: 'itemCount',
  docs: 'data',
  limit: 'perPage',
  page: 'currentPage',
  nextPage: 'next',
  prevPage: 'prev',
  totalPages: 'pageCount',
  pagingCounter: 'slNo',
  meta: 'paginator',
};
mongoosePaginate.paginate.options = { customLabels: modelCustomLabels };
const Schema = mongoose.Schema;
const schema = new Schema({
  id: {
    type:Number,
    unique:false
  },
  username: { type:String },
  email: { type:String },
  password: { type:String },
  userType: {
    type:Number,
    enum:convertObjectToEnum(USER_TYPES),
    required:true
  },
  mobileNo: { type:String },
  isDeleted: { type:Boolean },
  resetPasswordLink: {
    code:String,
    expireTime:Date
  },
  loginRetryLimit: {
    type:Number,
    default:0
  },
  loginReactiveTime: { type:Date }
}
);
schema.plugin(autoIncrement, {
  inc_field: 'id',
  id: 'user_id_sequence',
  inc_amount: 1, 
  start_seq: 1,
  prefix: '',
  suffix: '',
  length: 6
});
schema.pre('save', async function (next) {
  this.isDeleted = false;
  if (this.password){
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});
schema.pre('insertMany', async function (next, docs) {
  if (docs && docs.length){
    for (let index = 0; index < docs.length; index++) {
      const element = docs[index];
      element.isDeleted = false;
    }
  }
  next();
});

schema.methods.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};
schema.method('toJSON', function () {
  const {
    _id, __v, ...object 
  } = this.toObject({ virtuals: true });
  object.id = _id;
  delete object.password;
  return object;
});
schema.plugin(mongoosePaginate);
schema.plugin(idValidator);

const user = mongoose.model('user',schema);
module.exports = user;
