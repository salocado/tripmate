// Author: Salome Schmied

import styles from './TextInput.module.css';

type DateInputProps = {
    type: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = ({ type, value, onChange }: DateInputProps) => (
    <input
        type={type}
        value={value}
        onChange={onChange}
        className={styles.input}
    />
);

export default TextInput;
