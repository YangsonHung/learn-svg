const code = `
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

--css--
@keyframes move {
    from {
        stroke-dashoffset: -999;
    }
    to {
        stroke-dashoffset: 0;
    }
}
#line {
    animation: move 3s linear infinite;
}
`;

export default code.trim();
