import './Demo6.css';

const Demo6 = () => {
    return (
        <div>
            <svg width="100%" height="300">
                <defs>
                    <linearGradient id="lg" x1="0" y1="1" x2="0" y2="0">
                        <stop offset="0%" stop-color="red" />
                        <stop offset="100%" stop-color="blue" />
                    </linearGradient>
                </defs>
                <path
                    id="line"
                    d="M 10 10 l 800 10"
                    stroke="url(#lg)"
                    stroke-width="5"
                    fill="none"
                    stroke-dasharray="20 9999"
                />
            </svg>
        </div>
    );
};

export default Demo6;
