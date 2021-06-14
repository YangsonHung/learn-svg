const svg = {
    width: 600,
    height: 600,
    display: 'block',
    style: {
        margin: '0 auto',
        border: '1px solid Gold',
    },
};

const innerCircle = {
    id: 'ce1',
    cx: 300,
    cy: 300,
    r: 120,
    fill: 'none',
    stroke: 'Gold',
};

const centerPoint = {
    cx: 300,
    cy: 300,
    fill: 'Gold',
    r: 1,
};

const sharedPathProps = {
    fill: 'none',
    stroke: 'Gold',
    style: {
        transformOrigin: 'center',
    },
};

const quarterPathLeftTop = {
    ...sharedPathProps,
    d: 'M300 150 a150 150 0 0,0 -150 150 h-50 a200 200 0 0,1 200 -200 z',
};

const quarterPathRightBottom = {
    ...sharedPathProps,
    d: 'M450 300 a150 150 0 0,1 -150 150 v50 a200 200 0 0,0 200 -200 z',
};

const c = (1 / 4) * 2 * Math.PI * 200; // 四分之一圆周长
const sd1 = 1; // 虚线中破折号长度
const c2 = (1 / 8) * c; // 四分之一圆周长再均分8份
const sd2 = Math.ceil(c2 - sd1); // 虚线中间隙长度
const quarterDashPathRightTop = {
    ...sharedPathProps,
    d: 'M300 125 a175 175 0 0,1 175 175',
    strokeWidth: 50,
    strokeDasharray: `${sd1} ${sd2}`,
};

const quarterPathRightTop = {
    ...sharedPathProps,
    d: 'M300 170 a130 130 0 0,1 130 130 h10 a140 140 0 0,0 -140 -140 z',
};

const quarterPathLeftBottom = {
    ...sharedPathProps,
    d: 'M90 305 a210 210 0 0,0 200 200 v-70 a140 140 0 0,1 -130 -130 z',
};

const quarterDashPathLeftBottom = {
    ...sharedPathProps,
    d: 'M125 330 a175 175 0 0,0 140 140',
    strokeDasharray: '5 5',
};

const sharedwise = {
    attributeName: 'transform',
    attributeType: 'XML',
    type: 'rotate',
    dur: '3',
    repeatCount: 'indefinite',
};

const clockwise = {
    ...sharedwise,
    from: '0',
    to: '360',
};

const counterclockwise = {
    ...sharedwise,
    from: '360',
    to: '0',
};

const Demo2 = () => {
    return (
        <div>
            <svg {...svg}>
                <circle {...innerCircle}>
                    <desc>这是内圆</desc>
                </circle>
                <circle {...centerPoint}>
                    <desc>内圆圆心</desc>
                </circle>
                <path {...quarterPathRightBottom}>
                    <desc>这是右下的四分之一圆环</desc>
                    <animateTransform {...clockwise} />
                </path>
                <path {...quarterPathLeftTop}>
                    <desc>这是左上的四分之一圆环</desc>
                    <animateTransform {...clockwise} />
                </path>
                <path {...quarterDashPathRightTop}>
                    <desc>这是右上的四分之一虚线圆环</desc>
                    <animateTransform {...counterclockwise} />
                </path>
                <path {...quarterPathRightTop}>
                    <desc>这是右上的四分之一圆环</desc>
                    <animateTransform {...counterclockwise} />
                </path>
                <path {...quarterPathLeftBottom}>
                    <desc>这是左下的四分之一圆环</desc>
                    <animateTransform {...counterclockwise} />
                </path>
                <path {...quarterDashPathLeftBottom}>
                    <desc>这是左下的四分之一点状虚线</desc>
                    <animateTransform {...counterclockwise} />
                </path>
            </svg>
        </div>
    );
};

export default Demo2;
