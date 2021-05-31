(this["webpackJsonplearn-svg"]=this["webpackJsonplearn-svg"]||[]).push([[0],{10:function(e,n,t){e.exports={home:"Home_home__1JXvv"}},12:function(e,n,t){e.exports={viewCodeButton:"ViewCodeButton_viewCodeButton__28WQQ"}},229:function(e,n,t){},230:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),o=t(9),i=t.n(o),s=t(10),a=t.n(s),l=t(11),d=t.n(l),m=(t(227),t(2)),u=t(3),j=t(4),b=t.n(j),f=t(0),h={id:"bottom-circle",cx:50,cy:50,r:45,stroke:"#D1D3D7",strokeWidth:2,fill:"none"},x={id:"top-circle",cx:50,cy:50,r:45,stroke:"#00A5E0",strokeWidth:5,fill:"none",strokeDasharray:"0 ".concat(Math.ceil(2*Math.PI*45)),style:{transform:"rotate(-90deg)",transformOrigin:"center"}},p={x:"50%",y:"50%",fill:"#00A5E0",style:{fontSize:"22px",fontWeight:"700"},alignmentBaseline:"middle",textAnchor:"middle"},O=2*Math.PI*x.r,g=function(e){var n=e.initValue,t=void 0===n?0:n,r=Object(c.useState)(t),o=Object(u.a)(r,2),i=o[0],s=o[1],a=Object(c.useState)(x),l=Object(u.a)(a,2),d=l[0],j=l[1];return Object(f.jsxs)("div",{children:[Object(f.jsxs)("svg",{width:"100",height:"100",children:[Object(f.jsx)("circle",Object(m.a)({},h)),Object(f.jsx)("circle",Object(m.a)({},d)),Object(f.jsx)("text",Object(m.a)(Object(m.a)({},p),{},{children:i}))]}),Object(f.jsx)("input",{onChange:function(e){var n=e.target.value;s(n);var t=n/100,c=(1-t)*O,r="".concat(t*O," ").concat(c);j(Object(m.a)(Object(m.a)({},d),{},{strokeDasharray:r}))},value:i,type:"range",min:"0",max:"100",step:"0.01"})]})},v=function(){var e=Object(c.useRef)(null);return Object(c.useEffect)((function(){}),[]),Object(f.jsx)("div",{children:Object(f.jsx)("img",{ref:e,id:"img",width:"200",src:"https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png",alt:""})})},k=function(){var e=Object(c.useState)(120),n=Object(u.a)(e,2),t=n[0],r=n[1],o=Object(c.useState)(400),i=Object(u.a)(o,2),s=i[0],a=i[1],l=Object(c.useState)(50),d=Object(u.a)(l,2),m=d[0],j=d[1],b=Object(c.useState)(90),h=Object(u.a)(b,2),x=h[0],p=h[1],O=Object(c.useState)(!0),g=Object(u.a)(O,2),v=g[0],k=g[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:Object(f.jsx)("button",{onClick:function(){var e=document.getElementById("move"),n=document.getElementById("scale");v?(r(120),a(400),j(50),p(90),e.beginElement(),n.beginElement(),k(!1)):(r(400),a(120),j(90),p(50),e.beginElement(),n.beginElement(),k(!0))},children:"\u6309\u94ae"})}),Object(f.jsx)("svg",{width:"100%",height:"400",children:Object(f.jsxs)("circle",{cx:"120",cy:"100",r:"50",fill:"none",stroke:"red",children:[Object(f.jsx)("animate",{id:"move",attributeType:"XML",attributeName:"cx",from:t,to:s,begin:"click",dur:"1s",fill:"freeze"}),Object(f.jsx)("animate",{id:"scale",attributeType:"XML",attributeName:"r",from:m,to:x,begin:"click",dur:"1s",fill:"freeze"})]})})]})},y="\nimport { useState } from 'react';\n\nconst bottomCircleProps = {\n    id: 'bottom-circle',\n    cx: 50,\n    cy: 50,\n    r: 50 - 5,\n    stroke: '#D1D3D7',\n    strokeWidth: 2,\n    fill: 'none',\n};\n\nconst topCircleInitProps = {\n    id: 'top-circle',\n    cx: 50,\n    cy: 50,\n    r: 50 - 5,\n    stroke: '#00A5E0',\n    strokeWidth: 5,\n    fill: 'none',\n    strokeDasharray: `0 ${Math.ceil(2 * Math.PI * (50 - 5))}`,\n    style: {\n        transform: 'rotate(-90deg)',\n        transformOrigin: 'center',\n    },\n};\n\nconst textProps = {\n    x: '50%',\n    y: '50%',\n    fill: '#00A5E0',\n    style: {\n        fontSize: '22px',\n        fontWeight: '700',\n    },\n    alignmentBaseline: 'middle',\n    textAnchor: 'middle',\n};\n\n// \u5916\u5706\u5468\u957f\nconst perimeter = 2 * Math.PI * topCircleInitProps.r;\n\nconst Demo1 = ({ initValue = 0 }) => {\n    const [rangeValue, setRangeValue] = useState(initValue);\n    const [topCircleProps, setTopCircleProps] = useState(topCircleInitProps);\n    /**\n     * @description \u6539\u53d8\u5706strokeDasharray\n     * @param {*} e\n     */\n    const onRangeChange = (e) => {\n        const {\n            target: { value },\n        } = e;\n\n        setRangeValue(value);\n        const percent = value / 100;\n        const d1 = percent * perimeter;\n        const d2 = (1 - percent) * perimeter;\n        const strokeDasharray = `${d1} ${d2}`;\n\n        setTopCircleProps({\n            ...topCircleProps,\n            strokeDasharray,\n        });\n    };\n\n    return (\n        <div>\n            <svg width=\"100\" height=\"100\">\n                <circle {...bottomCircleProps} />\n                <circle {...topCircleProps} />\n                <text {...textProps}>{rangeValue}</text>\n            </svg>\n            <input onChange={onRangeChange} value={rangeValue} type=\"range\" min=\"0\" max=\"100\" step=\"0.01\" />\n        </div>\n    );\n};\n\nexport default Demo1;\n".trim(),C='\nimport { useRef, useEffect } from \'react\';\n\nconst Demo2 = () => {\n    const ref = useRef(null);\n\n    useEffect(() => {\n        // console.log(\'ref.current :>> \', ref.current);\n    }, []);\n\n    return (\n        <div>\n            <img\n                ref={ref}\n                id="img"\n                width="200"\n                src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png"\n                alt=""\n            />\n        </div>\n    );\n};\n\nexport default Demo2;\n'.trim(),E='\nimport { useState } from \'react\';\n\nconst Demo3 = () => {\n    const [cx1, setCx1] = useState(120);\n    const [cx2, setCx2] = useState(400);\n    const [r1, setR1] = useState(50);\n    const [r2, setR2] = useState(90);\n    const [turn, setTurn] = useState(true);\n\n    const onClick = () => {\n        const move = document.getElementById(\'move\');\n        const scale = document.getElementById(\'scale\');\n\n        if (turn) {\n            setCx1(120);\n            setCx2(400);\n            setR1(50);\n            setR2(90);\n            move.beginElement();\n            scale.beginElement();\n            setTurn(false);\n        } else {\n            setCx1(400);\n            setCx2(120);\n            setR1(90);\n            setR2(50);\n            move.beginElement();\n            scale.beginElement();\n            setTurn(true);\n        }\n    };\n\n    return (\n        <div>\n            <div>\n                <button onClick={onClick}>\u6309\u94ae</button>\n            </div>\n            <svg width="100%" height="400">\n                <circle cx="120" cy="100" r="50" fill="none" stroke="red">\n                    <animate\n                        id="move"\n                        attributeType="XML"\n                        attributeName="cx"\n                        from={cx1}\n                        to={cx2}\n                        begin="click"\n                        dur="1s"\n                        fill="freeze"\n                    />\n                    <animate\n                        id="scale"\n                        attributeType="XML"\n                        attributeName="r"\n                        from={r1}\n                        to={r2}\n                        begin="click"\n                        dur="1s"\n                        fill="freeze"\n                    />\n                </circle>\n            </svg>\n        </div>\n    );\n};\n\nexport default Demo3;\n'.trim(),S=t(12),_=t.n(S),w=function(e){var n=e.onClick;return Object(f.jsx)("div",{className:_.a.viewCodeButton,onClick:n,children:"VIEW CODE"})},D=function(e){var n=e.show,t=e.code;return Object(f.jsx)("pre",{style:{display:n?"block":"none"},children:Object(f.jsx)("code",{children:t})})},P=function(){var e=Object(c.useState)({demo1:!1,demo2:!1,demo3:!1}),n=Object(u.a)(e,2),t=n[0],r=n[1];return Object(f.jsxs)("div",{className:b.a.weekone,children:[Object(f.jsxs)("div",{id:"demo1",className:b.a.demoWrapper,children:[Object(f.jsx)(g,{}),Object(f.jsx)(w,{onClick:function(){return r(Object(m.a)(Object(m.a)({},t),{},{demo1:!t.demo1}))}}),Object(f.jsx)(D,{show:t.demo1,code:y})]}),Object(f.jsxs)("div",{id:"demo2",className:b.a.demoWrapper,children:[Object(f.jsx)(v,{}),Object(f.jsx)(w,{onClick:function(){return r(Object(m.a)(Object(m.a)({},t),{},{demo2:!t.demo2}))}}),Object(f.jsx)(D,{show:t.demo2,code:C})]}),Object(f.jsxs)("div",{id:"demo3",className:b.a.demoWrapper,children:[Object(f.jsx)(k,{}),Object(f.jsx)(w,{onClick:function(){return r(Object(m.a)(Object(m.a)({},t),{},{demo3:!t.demo3}))}}),Object(f.jsx)(D,{show:t.demo3,code:E})]})]})};var W=function(){return Object(c.useEffect)((function(){!function(){var e=document.title;document.addEventListener("visibilitychange",(function(n){document.hidden?document.title="\u5feb\u56de\u6765~ (\u0ca5 _ \u0ca5)":(document.title="hello~ (*^_^*)",setTimeout((function(){document.title=e}),2e3))}),!1)}(),d.a.highlightAll()}),[]),Object(f.jsx)("div",{className:a.a.home,children:Object(f.jsx)(P,{})})};t(229);i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(W,{})}),document.getElementById("root"))},4:function(e,n,t){e.exports={weekone:"WeekOne_weekone__1AkEX",demoWrapper:"WeekOne_demoWrapper__EYVxS"}}},[[230,1,2]]]);
//# sourceMappingURL=main.10aa34c2.chunk.js.map