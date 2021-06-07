/**
 * svg 是宽高为600的正方形
 * 中心坐标为(300,300)
 */

const svgProps = {
    width: 600,
    height: 600,
    style: {
        border: '1px solid indigo',
    },
};
/**
 * a命令参数：(rx ry x-axis-rotation large-arc-flag,sweep-flag x y)+
 * 画圆方法
 * <!--
        <path d="
            M cx, cy
            m -r, 0
            a r,r 0 1,0 (r * 2),0
            a r,r 0 1,0 -(r * 2),0
        "/>
        或者
        <path d="
            M cx - r, cy
            a r,r 0 1,0 (r * 2),0
            a r,r 0 1,0 -(r * 2),0
        "/>
     -->
 */
const pathProps1 = {
    d: 'M450 300 a150 150 0 0,1 -150 150 v50 a200 200 0 0,0 200 -200 z',
    fill: 'none',
    stroke: 'blue',
    style: {
        transformOrigin: 'center',
    },
};

const pathProps2 = {
    d: 'M300 150 a150 150 0 0,0 -150 150 h-50 a200 200 0 0,1 200 -200 z',
    fill: 'none',
    stroke: 'red',
    style: {
        transformOrigin: 'center',
    },
};

const animateTransformProps1 = {
    attributeName: 'transform',
    attributeType: 'XML',
    type: 'rotate',
    from: '0',
    to: '360',
    dur: '3',
    repeatCount: 'indefinite',
};

const animateTransformProps2 = {
    ...animateTransformProps1,
    begin: 'ce2.mouseover',
};

const circleProps1 = {
    id: 'ce1',
    cx: 300,
    cy: 300,
    r: 140,
    fill: '#0d1117',
    stroke: 'Gold',
};

const circleProps2 = {
    id: 'ce2',
    cx: 300,
    cy: 300,
    r: 140,
    fill: '#0d1117',
    stroke: 'Gold',
};

const textProps = {
    x: '50%',
    y: '50%',
    fill: 'Gold',
    style: {
        fontSize: '22px',
        fontWeight: '700',
    },
    alignmentBaseline: 'middle',
    textAnchor: 'middle',
};

// 45/2 === 360/16 将圆360°16等分，每等分的圆心角，然后计算出弧长:公式： nπr/180
const arcLength = (45 / 2) * Math.PI * (100 / 180);
const d1 = 2;
const d2 = arcLength - 2;
const lineCircleProps = {
    id: 'linecircle',
    fill: 'none',
    strokeWidth: 100,
    cx: 300,
    cy: 300,
    r: 150,
    stroke: 'white',
    strokeDasharray: `${d1} ${d2}`,
    style: {
        transformOrigin: 'center',
    },
};

const lineAnimateProps1 = {
    attributeName: 'transform',
    attributeType: 'XML',
    type: 'rotate',
    from: 0,
    to: 360,
    dur: 9,
    repeatCount: 'indefinite',
};

const lineAnimateProps2 = {
    ...lineAnimateProps1,
    begin: 'ce2.mouseover',
};

const Demo2 = () => {
    return (
        <div>
            <svg {...svgProps}>
                <circle {...lineCircleProps}>
                    <animateTransform {...lineAnimateProps1} />
                </circle>
                <circle {...circleProps1} />
                <path {...pathProps1}>
                    <animateTransform {...animateTransformProps1} />
                </path>
                <path {...pathProps2}>
                    <animateTransform {...animateTransformProps1} />
                </path>
            </svg>
            <svg {...svgProps}>
                <circle {...lineCircleProps}>
                    <animateTransform {...lineAnimateProps2} />
                </circle>
                <circle {...circleProps2} />
                <text {...textProps}>hover me!</text>
                <path {...pathProps1}>
                    <animateTransform {...animateTransformProps2} />
                </path>
                <path {...pathProps2}>
                    <animateTransform {...animateTransformProps2} />
                </path>
            </svg>
        </div>
    );
};

export default Demo2;
