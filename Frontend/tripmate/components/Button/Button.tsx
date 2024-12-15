// Author: Salome Schmied

'use client';

import styles from './Button.module.css';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    to?: string;
    type?: 'button' | 'submit' | 'reset';
};

const Button = ({ children, onClick, to, type = 'button' }: ButtonProps) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (to) {
            window.location.href = to;
        }
        if (onClick) {
            onClick(event);
        }
    };

    return (
        <button type={type} className={styles.button} onClick={handleClick}>
            {children}
        </button>
    );
};

export default Button;
