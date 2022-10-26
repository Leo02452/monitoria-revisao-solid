import mongoose, { Schema } from 'mongoose';
import IUser from '../../entities/IUser';

const userSchema = new Schema<IUser>({
  username: String,
  role: String,
  email: String,
  password: String,
});

const mongooseUserModel = mongoose.model('users', userSchema);

export default mongooseUserModel;
