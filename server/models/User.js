const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
  }
})

UserSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this._doc.password, 10)
});

const User = model('User', UserSchema);
module.exports = User;