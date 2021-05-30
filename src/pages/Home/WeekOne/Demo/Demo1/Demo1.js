import { useState } from 'react';

const bottomCircleProps = {
    id: 'bottom-circle',
    cx: 50,
    cy: 50,
    r: 50 - 5,
    stroke: '#D1D3D7',
    strokeWidth: 2,
    fill: 'none',
};

const topCircleInitProps = {
    id: 'top-circle',
    cx: 50,
    cy: 50,
    r: 50 - 5,
    stroke: '#00A5E0',
    strokeWidth: 5,
    fill: 'none',
    strokeDasharray: `0 ${Math.ceil(2 * Math.PI * (50 - 5))}`,
    style: {
        transform: 'rotate(-90deg)',
        transformOrigin: 'center',
    },
};

const textProps = {
    x: '50%',
    y: '50%',
    fill: '#00A5E0',
    style: {
        fontSize: '22px',
        fontWeight: '700',
    },
    alignmentBaseline: 'middle',
    textAnchor: 'middle',
};

const perimeter = 2 * Math.PI * topCircleInitProps.r;

const Demo1 = ({ initValue = 0 }) => {
    const [rangeValue, setRangeValue] = useState(initValue);
    const [topCircleProps, setTopCircleProps] = useState(topCircleInitProps);
    /**
     * @description 改变圆strokeDasharray
     * @param {*} e
     */
    const onRangeChange = (e) => {
        const {
            target: { value },
        } = e;

        setRangeValue(value);
        const percent = value / 100;
        const d1 = percent * perimeter;
        const d2 = (1 - percent) * perimeter;
        const strokeDasharray = `${d1} ${d2}`;

        setTopCircleProps({
            ...topCircleProps,
            strokeDasharray,
        });
    };

    return (
        <div>
            <svg width="100" height="100">
                <circle {...bottomCircleProps} />
                <circle {...topCircleProps} />
                <text {...textProps}>{rangeValue}</text>
            </svg>
            <input onChange={onRangeChange} value={rangeValue} type="range" min="0" max="100" step="0.01" />
        </div>
    );
};

export default Demo1;
