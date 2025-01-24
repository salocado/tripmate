// Author: Salome Schmied

'use client';

import React, { useState } from 'react';
import TextInput from '@/components/TextInput/TextInput';
import Button from '@/components/Button/Button';
import axios from 'axios';
import styles from './SignInSection.module.css';

const SignInSection = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/signin`,
                { email, password }
            );
            localStorage.setItem('token', response.data.token);
            window.location.href = '/';
        } catch (error: any) {
            if (error.response?.status === 400) {
                alert(error.response.data.message);
            } else {
                alert(error.message);
            }
        }
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSignIn} className={styles.form}>
                <div>
                    <h3>Email</h3>
                    <TextInput
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h3>Password</h3>
                    <TextInput
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Button type="submit">Sign In</Button>
            </form>
        </div>
    );
};

export default SignInSection;
