(this["webpackJsonplearn-svg"]=this["webpackJsonplearn-svg"]||[]).push([[0],{10:function(e,n,t){e.exports={home:"Home_home__1JXvv"}},12:function(e,n,t){e.exports={viewCodeButton:"ViewCodeButton_viewCodeButton__28WQQ"}},229:function(e,n,t){},230:function(e,n,t){"use strict";t.r(n);var r=t(2),c=t.n(r),o=t(9),a=t.n(o),i=t(10),s=t.n(i),l=t(11),d=t.n(l),m=(t(227),t(1)),j=t(3),b=t(4),p=t.n(b),u=t(0),h={id:"bottom-circle",cx:50,cy:50,r:45,stroke:"#D1D3D7",strokeWidth:2,fill:"none"},O={id:"top-circle",cx:50,cy:50,r:45,stroke:"#00A5E0",strokeWidth:5,fill:"none",strokeDasharray:"0 ".concat(Math.ceil(2*Math.PI*45)),style:{transform:"rotate(-90deg)",transformOrigin:"center"}},x={x:"50%",y:"50%",fill:"#00A5E0",style:{fontSize:"22px",fontWeight:"700"},alignmentBaseline:"middle",textAnchor:"middle"},f=2*Math.PI*O.r,g=function(e){var n=e.initValue,t=void 0===n?0:n,c=Object(r.useState)(t),o=Object(j.a)(c,2),a=o[0],i=o[1],s=Object(r.useState)(O),l=Object(j.a)(s,2),d=l[0],b=l[1];return Object(u.jsxs)("div",{children:[Object(u.jsxs)("svg",{width:"100",height:"100",children:[Object(u.jsx)("circle",Object(m.a)({},h)),Object(u.jsx)("circle",Object(m.a)({},d)),Object(u.jsx)("text",Object(m.a)(Object(m.a)({},x),{},{children:a}))]}),Object(u.jsx)("input",{onChange:function(e){var n=e.target.value;i(n);var t=n/100,r=(1-t)*f,c="".concat(t*f," ").concat(r);b(Object(m.a)(Object(m.a)({},d),{},{strokeDasharray:c}))},value:a,type:"range",min:"0",max:"100",step:"0.01"})]})},v={width:600,height:600,style:{border:"1px solid indigo"}},y={d:"M450 300 a150 150 0 0,1 -150 150 v50 a200 200 0 0,0 200 -200 z",fill:"none",stroke:"blue",style:{transformOrigin:"center"}},k={d:"M300 150 a150 150 0 0,0 -150 150 h-50 a200 200 0 0,1 200 -200 z",fill:"none",stroke:"red",style:{transformOrigin:"center"}},P={attributeName:"transform",attributeType:"XML",type:"rotate",from:"0",to:"360",dur:"3",repeatCount:"indefinite"},C=Object(m.a)(Object(m.a)({},P),{},{begin:"ce2.mouseover"}),T={id:"ce1",cx:300,cy:300,r:140,fill:"#0d1117",stroke:"Gold"},E={id:"ce2",cx:300,cy:300,r:140,fill:"#0d1117",stroke:"Gold"},M={x:"50%",y:"50%",fill:"Gold",style:{fontSize:"22px",fontWeight:"700"},alignmentBaseline:"middle",textAnchor:"middle"},S=22.5*Math.PI*(100/180)-2,w={id:"linecircle",fill:"none",strokeWidth:100,cx:300,cy:300,r:150,stroke:"white",strokeDasharray:"".concat(2," ").concat(S),style:{transformOrigin:"center"}},D={attributeName:"transform",attributeType:"XML",type:"rotate",from:0,to:360,dur:9,repeatCount:"indefinite"},W=Object(m.a)(Object(m.a)({},D),{},{begin:"ce2.mouseover"}),A=function(){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("svg",Object(m.a)(Object(m.a)({},v),{},{children:[Object(u.jsx)("circle",Object(m.a)(Object(m.a)({},w),{},{children:Object(u.jsx)("animateTransform",Object(m.a)({},D))})),Object(u.jsx)("circle",Object(m.a)({},T)),Object(u.jsx)("path",Object(m.a)(Object(m.a)({},y),{},{children:Object(u.jsx)("animateTransform",Object(m.a)({},P))})),Object(u.jsx)("path",Object(m.a)(Object(m.a)({},k),{},{children:Object(u.jsx)("animateTransform",Object(m.a)({},P))}))]})),Object(u.jsxs)("svg",Object(m.a)(Object(m.a)({},v),{},{children:[Object(u.jsx)("circle",Object(m.a)(Object(m.a)({},w),{},{children:Object(u.jsx)("animateTransform",Object(m.a)({},W))})),Object(u.jsx)("circle",Object(m.a)({},E)),Object(u.jsx)("text",Object(m.a)(Object(m.a)({},M),{},{children:"hover me!"})),Object(u.jsx)("path",Object(m.a)(Object(m.a)({},y),{},{children:Object(u.jsx)("animateTransform",Object(m.a)({},C))})),Object(u.jsx)("path",Object(m.a)(Object(m.a)({},k),{},{children:Object(u.jsx)("animateTransform",Object(m.a)({},C))}))]}))]})},I=function(){var e=Object(r.useState)(120),n=Object(j.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)(400),a=Object(j.a)(o,2),i=a[0],s=a[1],l=Object(r.useState)(50),d=Object(j.a)(l,2),m=d[0],b=d[1],p=Object(r.useState)(90),h=Object(j.a)(p,2),O=h[0],x=h[1],f=Object(r.useState)(!0),g=Object(j.a)(f,2),v=g[0],y=g[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:function(){var e=document.getElementById("move"),n=document.getElementById("scale");v?(c(120),s(400),b(50),x(90),e.beginElement(),n.beginElement(),y(!1)):(c(400),s(120),b(90),x(50),e.beginElement(),n.beginElement(),y(!0))},children:"\u6309\u94ae"})}),Object(u.jsx)("svg",{width:"100%",height:"400",children:Object(u.jsxs)("circle",{cx:"120",cy:"100",r:"50",fill:"none",stroke:"red",children:[Object(u.jsx)("animate",{id:"move",attributeType:"XML",attributeName:"cx",from:t,to:i,begin:"click",dur:"1s",fill:"freeze"}),Object(u.jsx)("animate",{id:"scale",attributeType:"XML",attributeName:"r",from:m,to:O,begin:"click",dur:"1s",fill:"freeze"})]})})]})},N="\nimport { useState } from 'react';\n\nconst bottomCircleProps = {\n    id: 'bottom-circle',\n    cx: 50,\n    cy: 50,\n    r: 50 - 5,\n    stroke: '#D1D3D7',\n    strokeWidth: 2,\n    fill: 'none',\n};\n\nconst topCircleInitProps = {\n    id: 'top-circle',\n    cx: 50,\n    cy: 50,\n    r: 50 - 5,\n    stroke: '#00A5E0',\n    strokeWidth: 5,\n    fill: 'none',\n    strokeDasharray: `0 ${Math.ceil(2 * Math.PI * (50 - 5))}`,\n    style: {\n        transform: 'rotate(-90deg)',\n        transformOrigin: 'center',\n    },\n};\n\nconst textProps = {\n    x: '50%',\n    y: '50%',\n    fill: '#00A5E0',\n    style: {\n        fontSize: '22px',\n        fontWeight: '700',\n    },\n    alignmentBaseline: 'middle',\n    textAnchor: 'middle',\n};\n\n// \u5916\u5706\u5468\u957f\nconst perimeter = 2 * Math.PI * topCircleInitProps.r;\n\nconst Demo1 = ({ initValue = 0 }) => {\n    const [rangeValue, setRangeValue] = useState(initValue);\n    const [topCircleProps, setTopCircleProps] = useState(topCircleInitProps);\n    /**\n     * @description \u6539\u53d8\u5706strokeDasharray\n     * @param {*} e\n     */\n    const onRangeChange = (e) => {\n        const {\n            target: { value },\n        } = e;\n\n        setRangeValue(value);\n        const percent = value / 100;\n        const d1 = percent * perimeter;\n        const d2 = (1 - percent) * perimeter;\n        const strokeDasharray = `${d1} ${d2}`;\n\n        setTopCircleProps({\n            ...topCircleProps,\n            strokeDasharray,\n        });\n    };\n\n    return (\n        <div>\n            <svg width=\"100\" height=\"100\">\n                <circle {...bottomCircleProps} />\n                <circle {...topCircleProps} />\n                <text {...textProps}>{rangeValue}</text>\n            </svg>\n            <input onChange={onRangeChange} value={rangeValue} type=\"range\" min=\"0\" max=\"100\" step=\"0.01\" />\n        </div>\n    );\n};\n\nexport default Demo1;\n".trim(),_="\n/**\n * svg \u662f\u5bbd\u9ad8\u4e3a600\u7684\u6b63\u65b9\u5f62\n * \u4e2d\u5fc3\u5750\u6807\u4e3a(300,300)\n */\n\nconst svgProps = {\n    width: 600,\n    height: 600,\n    style: {\n        border: '1px solid indigo',\n    },\n};\n/**\n * a\u547d\u4ee4\u53c2\u6570\uff1a(rx ry x-axis-rotation large-arc-flag,sweep-flag x y)+\n * \u753b\u5706\u65b9\u6cd5\n * \x3c!--\n        <path d=\"\n            M cx, cy\n            m -r, 0\n            a r,r 0 1,0 (r * 2),0\n            a r,r 0 1,0 -(r * 2),0\n        \"/>\n        \u6216\u8005\n        <path d=\"\n            M cx - r, cy\n            a r,r 0 1,0 (r * 2),0\n            a r,r 0 1,0 -(r * 2),0\n        \"/>\n     --\x3e\n */\nconst pathProps1 = {\n    d: 'M450 300 a150 150 0 0,1 -150 150 v50 a200 200 0 0,0 200 -200 z',\n    fill: 'none',\n    stroke: 'blue',\n    style: {\n        transformOrigin: 'center',\n    },\n};\n\nconst pathProps2 = {\n    d: 'M300 150 a150 150 0 0,0 -150 150 h-50 a200 200 0 0,1 200 -200 z',\n    fill: 'none',\n    stroke: 'red',\n    style: {\n        transformOrigin: 'center',\n    },\n};\n\nconst animateTransformProps1 = {\n    attributeName: 'transform',\n    attributeType: 'XML',\n    type: 'rotate',\n    from: '0',\n    to: '360',\n    dur: '3',\n    repeatCount: 'indefinite',\n};\n\nconst animateTransformProps2 = {\n    ...animateTransformProps1,\n    begin: 'ce2.mouseover',\n};\n\nconst circleProps1 = {\n    id: 'ce1',\n    cx: 300,\n    cy: 300,\n    r: 140,\n    fill: '#0d1117',\n    stroke: 'Gold',\n};\n\nconst circleProps2 = {\n    id: 'ce2',\n    cx: 300,\n    cy: 300,\n    r: 140,\n    fill: '#0d1117',\n    stroke: 'Gold',\n};\n\nconst textProps = {\n    x: '50%',\n    y: '50%',\n    fill: 'Gold',\n    style: {\n        fontSize: '22px',\n        fontWeight: '700',\n    },\n    alignmentBaseline: 'middle',\n    textAnchor: 'middle',\n};\n\n// 45/2 === 360/16 \u5c06\u5706360\xb016\u7b49\u5206\uff0c\u6bcf\u7b49\u5206\u7684\u5706\u5fc3\u89d2\uff0c\u7136\u540e\u8ba1\u7b97\u51fa\u5f27\u957f:\u516c\u5f0f\uff1a n\u03c0r/180\nconst arcLength = (45 / 2) * Math.PI * (100 / 180);\nconst d1 = 2;\nconst d2 = arcLength - 2;\nconst lineCircleProps = {\n    id: 'linecircle',\n    fill: 'none',\n    strokeWidth: 100,\n    cx: 300,\n    cy: 300,\n    r: 150,\n    stroke: 'white',\n    strokeDasharray: `${d1} ${d2}`,\n    style: {\n        transformOrigin: 'center',\n    },\n};\n\nconst lineAnimateProps1 = {\n    attributeName: 'transform',\n    attributeType: 'XML',\n    type: 'rotate',\n    from: 0,\n    to: 360,\n    dur: 9,\n    repeatCount: 'indefinite',\n};\n\nconst lineAnimateProps2 = {\n    ...lineAnimateProps1,\n    begin: 'ce2.mouseover',\n};\n\nconst Demo2 = () => {\n    return (\n        <div>\n            <svg {...svgProps}>\n                <circle {...lineCircleProps}>\n                    <animateTransform {...lineAnimateProps1} />\n                </circle>\n                <circle {...circleProps1} />\n                <path {...pathProps1}>\n                    <animateTransform {...animateTransformProps1} />\n                </path>\n                <path {...pathProps2}>\n                    <animateTransform {...animateTransformProps1} />\n                </path>\n            </svg>\n            <svg {...svgProps}>\n                <circle {...lineCircleProps}>\n                    <animateTransform {...lineAnimateProps2} />\n                </circle>\n                <circle {...circleProps2} />\n                <text {...textProps}>hover me!</text>\n                <path {...pathProps1}>\n                    <animateTransform {...animateTransformProps2} />\n                </path>\n                <path {...pathProps2}>\n                    <animateTransform {...animateTransformProps2} />\n                </path>\n            </svg>\n        </div>\n    );\n};\n\nexport default Demo2;\n".trim(),B='\nimport { useState } from \'react\';\n\nconst Demo3 = () => {\n    const [cx1, setCx1] = useState(120);\n    const [cx2, setCx2] = useState(400);\n    const [r1, setR1] = useState(50);\n    const [r2, setR2] = useState(90);\n    const [turn, setTurn] = useState(true);\n\n    const onClick = () => {\n        const move = document.getElementById(\'move\');\n        const scale = document.getElementById(\'scale\');\n\n        if (turn) {\n            setCx1(120);\n            setCx2(400);\n            setR1(50);\n            setR2(90);\n            move.beginElement();\n            scale.beginElement();\n            setTurn(false);\n        } else {\n            setCx1(400);\n            setCx2(120);\n            setR1(90);\n            setR2(50);\n            move.beginElement();\n            scale.beginElement();\n            setTurn(true);\n        }\n    };\n\n    return (\n        <div>\n            <div>\n                <button onClick={onClick}>\u6309\u94ae</button>\n            </div>\n            <svg width="100%" height="400">\n                <circle cx="120" cy="100" r="50" fill="none" stroke="red">\n                    <animate\n                        id="move"\n                        attributeType="XML"\n                        attributeName="cx"\n                        from={cx1}\n                        to={cx2}\n                        begin="click"\n                        dur="1s"\n                        fill="freeze"\n                    />\n                    <animate\n                        id="scale"\n                        attributeType="XML"\n                        attributeName="r"\n                        from={r1}\n                        to={r2}\n                        begin="click"\n                        dur="1s"\n                        fill="freeze"\n                    />\n                </circle>\n            </svg>\n        </div>\n    );\n};\n\nexport default Demo3;\n'.trim(),z=t(12),L=t.n(z),V=function(e){var n=e.onClick;return Object(u.jsx)("div",{className:L.a.viewCodeButton,onClick:n,children:"VIEW CODE"})},R=function(e){var n=e.show,t=e.code;return Object(u.jsx)("pre",{style:{display:n?"block":"none"},children:Object(u.jsx)("code",{children:t})})},X=function(){var e=Object(r.useState)({demo1:!1,demo2:!1,demo3:!1}),n=Object(j.a)(e,2),t=n[0],c=n[1];return Object(u.jsxs)("div",{className:p.a.weekone,children:[Object(u.jsxs)("div",{id:"demo1",className:p.a.demoWrapper,children:[Object(u.jsx)(g,{}),Object(u.jsx)(V,{onClick:function(){return c(Object(m.a)(Object(m.a)({},t),{},{demo1:!t.demo1}))}}),Object(u.jsx)(R,{show:t.demo1,code:N})]}),Object(u.jsxs)("div",{id:"demo2",className:p.a.demoWrapper,children:[Object(u.jsx)(A,{}),Object(u.jsx)(V,{onClick:function(){return c(Object(m.a)(Object(m.a)({},t),{},{demo2:!t.demo2}))}}),Object(u.jsx)(R,{show:t.demo2,code:_})]}),Object(u.jsxs)("div",{id:"demo3",className:p.a.demoWrapper,children:[Object(u.jsx)(I,{}),Object(u.jsx)(V,{onClick:function(){return c(Object(m.a)(Object(m.a)({},t),{},{demo3:!t.demo3}))}}),Object(u.jsx)(R,{show:t.demo3,code:B})]})]})};var G=function(){return Object(r.useEffect)((function(){!function(){var e=document.title;document.addEventListener("visibilitychange",(function(n){document.hidden?document.title="\u5feb\u56de\u6765~ (\u0ca5 _ \u0ca5)":(document.title="hello~ (*^_^*)",setTimeout((function(){document.title=e}),2e3))}),!1)}(),d.a.highlightAll()}),[]),Object(u.jsx)("div",{className:s.a.home,children:Object(u.jsx)(X,{})})};t(229);a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(G,{})}),document.getElementById("root"))},4:function(e,n,t){e.exports={weekone:"WeekOne_weekone__1AkEX",demoWrapper:"WeekOne_demoWrapper__EYVxS"}}},[[230,1,2]]]);
//# sourceMappingURL=main.e162d146.chunk.js.map