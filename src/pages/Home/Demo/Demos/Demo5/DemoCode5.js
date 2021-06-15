const code = `
import { useState } from 'react';

const Demo5 = () => {
    const [value, setValue] = useState(10);

    return (
        <div style={{ textAlign: 'center' }}>
            <svg width="100%" height="100%">
                <rect x={value} y="10" width="100" height="100" stroke="red" fill="none" />
            </svg>
            <input
                type="number"
                min="0"
                max="1000"
                step="5"
                value={value}
                onChange={({ target: { value } }) => setValue(value)}
            />
        </div>
    );
};

export default Demo5;
`;

export default code.trim();
