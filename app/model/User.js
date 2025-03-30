import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
   
  date:{
    type: Date,
    default: Date.now()
  }
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;