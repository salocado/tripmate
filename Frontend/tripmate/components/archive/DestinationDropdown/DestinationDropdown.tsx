// Author: Salome Schmied

'use client';

import styles from './DestinationDropdown.module.css';
import { useState } from 'react';

const destinations = ['Austria', 'Norway', 'Italy', 'Germany', 'Croatia'];

const DestinationDropdown = () => {
    const [selected, setSelected] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(event.target.value);
    };

    return (
        <div>
            <select
                id='destination'
                value={selected}
                onChange={handleChange}
                className={styles.dropdown}
            >
                <option value=''>
                    Choose a destination
                </option>
                {destinations.map((destination) => (
                    <option key={destination} value={destination}>
                        {destination}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DestinationDropdown;
