// Author: Salome Schmied

import { Request, Response } from 'express';
import { HydratedDocument } from "mongoose";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User, { IUser } from '../models/userModel';

export const signUp = async (req: Request, res: Response): Promise<void> => {
    const { name, email, password } = req.body;

    try {
        const userExists = await User.findOne({ email: email });
        if (userExists) {
            res.status(400).json({ message: 'User already exists.' });
            return;
        }

        const newUser = new User({ name: name, email: email, password: password });
        await newUser.save();

        res.status(200).json({ message: 'User registered successfully.' });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const signIn = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    try {
        const user: HydratedDocument<IUser> | null = await User.findOne({ email: email });

        if (!user) {
            res.status(400).json({ message: 'User not found.' });
            return;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(400).json({ message: 'Wrong password.' });
            return;
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.TOKEN_SECRET || 'tokentest',
            { expiresIn: process.env.JWT_EXPIRES_IN || '15m' }
        );

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};
