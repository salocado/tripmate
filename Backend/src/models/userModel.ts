// Author: Salome Schmied

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser {
    name: string;
    password: string;
    email: string;
}

const userSchema = new mongoose.Schema<IUser>({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
