import './Demo6.css';

const Demo6 = () => {
    return (
        <div>
            <svg width="100%" height="300">
                <path
                    id="line"
                    d="M 10 10 L 800 11"
                    stroke="blue"
                    stroke-width="10"
                    stroke-dasharray="20 999"
                />
            </svg>
        </div>
    );
};

export default Demo6;
