// Author: Salome Schmied

import styles from './DateInput.module.css';

type DateInputProps = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    id: string;
};

const DateInput = ({ id, value, onChange }: DateInputProps) => (
    <input
        type="date"
        id={id}
        value={value}
        onChange={onChange}
        className={styles.input}
    />
);

export default DateInput;
