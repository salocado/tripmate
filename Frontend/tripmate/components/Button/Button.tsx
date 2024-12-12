import styles from './Button.module.css';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => (
    <button className={styles.button} onClick={onClick}>
        {children}
    </button>
);

export default Button;
