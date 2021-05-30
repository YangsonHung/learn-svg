import { useState } from 'react';

const Demo3 = () => {
    const [cx1, setCx1] = useState(120);
    const [cx2, setCx2] = useState(400);
    const [r1, setR1] = useState(50);
    const [r2, setR2] = useState(90);
    const [turn, setTurn] = useState(true);

    const onClick = () => {
        const move = document.getElementById('move');
        const scale = document.getElementById('scale');

        if (turn) {
            setCx1(120);
            setCx2(400);
            setR1(50);
            setR2(90);
            move.beginElement();
            scale.beginElement();
            setTurn(false);
        } else {
            setCx1(400);
            setCx2(120);
            setR1(90);
            setR2(50);
            move.beginElement();
            scale.beginElement();
            setTurn(true);
        }
    };

    return (
        <div>
            <div>
                <button onClick={onClick}>按钮</button>
            </div>
            <svg width="100%" height="400">
                <circle cx="120" cy="100" r="50" fill="none" stroke="red">
                    <animate
                        id="move"
                        attributeType="XML"
                        attributeName="cx"
                        from={cx1}
                        to={cx2}
                        begin="click"
                        dur="1s"
                        fill="freeze"
                    />
                    <animate
                        id="scale"
                        attributeType="XML"
                        attributeName="r"
                        from={r1}
                        to={r2}
                        begin="click"
                        dur="1s"
                        fill="freeze"
                    />
                </circle>
            </svg>
        </div>
    );
};

export default Demo3;
