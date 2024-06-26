import mongoose from 'mongoose';

const loginSessionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  loginTime: {
    type: Date,
    default: Date.now
  },
});

const LoginSession = mongoose.model('LoginSession', loginSessionSchema);

export default LoginSession;
