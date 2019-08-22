(window["webpackJsonpreact-tetris"]=window["webpackJsonpreact-tetris"]||[]).push([[0],{15:function(n,e,t){n.exports=t(26)},20:function(n,e,t){n.exports=t.p+"static/media/bg.2810fe6b.png"},26:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(9),c=t.n(a),i=(t(8),t(1)),u=function(){return Array.from(Array(20),function(){return new Array(12).fill([0,"clear"])})},l=function(n,e,t){for(var r=t.x,o=t.y,a=0;a<n.tetromino.length;++a)for(var c=0;c<n.tetromino[0].length;++c)if(0!==n.tetromino[a][c]&&(!e[a+n.pos.y+o]||!e[a+n.pos.y+o][c+n.pos.x+r]||"clear"!==e[a+n.pos.y+o][c+n.pos.x+r][1]))return!0},f=t(2),d=t(3);t(20);function s(){var n=Object(f.a)(["\n    display: flex;\n    align-items: center;\n    // padding: .5rem;\n    margin: 0 auto;\n    max-width: 100vw;\n    justify-content: center;\n    height: 100%;\n\n    aside {\n        width: 100%;\n        max-width: 200px;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-evenly;\n        height: 100%;\n        padding: 20px 0 20px 20px;\n        // height: 90%;\n\n        @media only screen and (max-width: 426px) {\n            max-width: 150px;\n        }\n    }\n"]);return s=function(){return n},n}function p(){var n=Object(f.a)(["\n    width: 100vw;\n    height: 100vh;\n    background: #FC466B;  /* fallback for old browsers */\n    background: -webkit-radial-gradient(circle farthest-corner at 10% 20%, #3F5EFB, #FC466B);  /* Chrome 10-25, Safari 5.1-6 */\n    background: radial-gradient(circle farthest-corner at 10% 20%, #3F5EFB, #FC466B); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */    \n    overflow: hidden;\n"]);return p=function(){return n},n}var m=d.a.div(p()),h=d.a.div(s()),b=t(12),g={0:{shape:[[0]],color:"0, 0, 0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"255,72,196"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"43,209,252"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"243,234,95"},O:{shape:[["O","O"],["O","O"]],color:"192,77,249"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"255, 7, 58"},T:{shape:[["T","T","T"],[0,"T",0],[0,0,0]],color:"255, 103, 0"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"57,255,20"}},v=function(){var n="IJLOSTZ"[Math.floor(Math.random()*"IJLOSTZ".length)];return g[n]};function x(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,r)}return t}var w=function(){var n=Object(r.useState)({pos:{x:0,y:0},tetromino:g[0].shape,collided:!1}),e=Object(i.a)(n,2),t=e[0],o=e[1],a=function(n,e){var t=n.map(function(e,t){return n.map(function(n){return n[t]})});return e>0?t.map(function(n){return n.reverse()}):t.reverse()},c=Object(r.useCallback)(function(){o({pos:{x:4,y:0},tetromino:v().shape,collided:!1})},[]);return[t,function(n){var e=n.x,t=n.y,r=n.collided;o(function(n){return function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?x(t,!0).forEach(function(e){Object(b.a)(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):x(t).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}({},n,{pos:{x:n.pos.x+=e,y:n.pos.y+=t},collided:r})})},c,function(n,e){var r=JSON.parse(JSON.stringify(t));r.tetromino=a(r.tetromino,e);for(var c=r.pos.x,i=1;l(r,n,{x:0,y:0});)if(r.pos.x+=i,(i=-(i+(i>0?1:-1)))>r.tetromino[0].length)return a(r.tetromino,-e),void(r.pos.x=c);o(r)}]},O=function(n,e){var t=Object(r.useState)(u()),o=Object(i.a)(t,2),a=o[0],c=o[1],l=Object(r.useState)(0),f=Object(i.a)(l,2),d=f[0],s=f[1];return Object(r.useEffect)(function(){s(0);var t=function(t){var r=t.map(function(n){return n.map(function(n){return"clear"===n[1]?[0,"clear"]:n})});return n.tetromino.forEach(function(e,t){e.forEach(function(e,o){0!==e&&(r[t+n.pos.y][o+n.pos.x]=[e,"".concat(n.collided?"merged":"clear")])})}),n.collided?(e(),function(n){return n.reduce(function(e,t){return-1===t.findIndex(function(n){return 0===n[0]})?(s(function(n){return++n}),e.unshift(new Array(n[0].length).fill([0,"clear"])),e):(e.push(t),e)},[])}(r)):r};c(function(n){return t(n)})},[n,e]),[a,c,d]};function y(){var n=Object(f.a)(["\n    display: grid;\n    grid-template-rows: repeat(\n    ",",\n    calc(46.875vw / ",")\n    );\n    grid-template-columns: repeat(",", 1fr);\n    grid-gap: 1px;\n    border: 2px solid #333;\n    width: 100%;\n    max-width: 46.875vw;\n    background: rgba(27, 27, 27, 0.4);\n\n    @media only screen and (min-width: 768px) {\n        grid-template-rows: repeat(\n        ",",\n        calc(38.5vw / ",")\n        );\n        max-width: 38.5vw;\n    }\n\n    @media only screen and (min-width: 1024px) {\n        grid-template-rows: repeat(\n        ",",\n        calc(30.75vw / ",")\n        );\n        max-width: 30.75vw;\n    }\n\n    @media only screen and (min-width: 1440px) {\n        grid-template-rows: repeat(\n        ",",\n        calc(26vw / ",")\n        );\n        max-width: 26vw;\n    }\n"]);return y=function(){return n},n}var j=d.a.div(y(),function(n){return n.height},function(n){return n.width},function(n){return n.width},function(n){return n.height},function(n){return n.width},function(n){return n.height},function(n){return n.width},function(n){return n.height},function(n){return n.width});function E(){var n=Object(f.a)(["\n    width: auto;\n    background: rgba(",", ",");\n    border: ",";\n    border-bottom-color: rgba(",", 0.1);\n    border-right-color: rgba(",", 1);\n    border-top-color: rgba(",", 1);\n    border-left-color: rgba(",", 0.3);\n"]);return E=function(){return n},n}var S=d.a.div(E(),function(n){return n.color},function(n){return 0===n.type?"0.25":"0.85"},function(n){return 0===n.type?"0px solid":"4px solid"},function(n){return n.color},function(n){return n.color},function(n){return n.color},function(n){return n.color}),k=o.a.memo(function(n){var e=n.type;return o.a.createElement(S,{type:e,color:g[e].color})}),I=function(n){var e=n.stage;return o.a.createElement(j,{width:e[0].length,height:e.length},e.map(function(n){return n.map(function(n,e){return o.a.createElement(k,{key:e,type:n[0]})})}))};function C(){var n=Object(f.a)(["\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    justify-content: ",";\n    margin: 0 0 20px 0;\n    padding: 25px;\n    border: 4px solid;\n    border-color: ",";\n    // min-height: 26px;\n    width: 100%;\n    border-radius: 20px;\n    color: ",";\n    background: rgba(27, 27, 27, 0.4);\n    // font-family: Pixel, Arial, Helvetica, sans-serif;\n    font-size: .9rem;\n    text-align: right;\n    font-weight: 100;\n\n    @media only screen and (max-width: 426px) {\n        padding: 18px;\n        margin: 0 0 10px 0;\n        font-size: .8rem;\n    }\n"]);return C=function(){return n},n}var J=d.a.div(C(),function(n){return n.gameOver?"center":"flex-end"},function(n){return n.gameOver?"red":"#333"},function(n){return n.gameOver?"red":"#999"}),P=function(n){var e=n.gameOver,t=n.text;return o.a.createElement(J,{gameOver:e},t)};function T(){var n=Object(f.a)(["\n  box-sizing: border-box;\n  // margin: 0 0 20px 0;\n  padding: 20px;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 20px;\n  border: 1px solid #333;\n  color: #ccc;\n  background: #333;\n  font-size: 1rem;\n  outline: none;\n  cursor: pointer;\n  transition: all .4s ease-in-out;\n  font-family: 'Heebo', sans-serif;\n  font-weight: 100;\n\n  :hover {\n    box-shadow: 0 5px 15px 0px rgba(27, 27, 27, 0.65);\n    color: #333;\n    background: #ccc;\n    // font-weight: 400;\n  }\n"]);return T=function(){return n},n}var F=d.a.button(T()),L=function(n){var e=n.callback;return o.a.createElement(F,{onClick:e},"Start Game")},N=function(){var n=Object(r.useState)(null),e=Object(i.a)(n,2),t=e[0],a=e[1],c=Object(r.useState)(!1),f=Object(i.a)(c,2),d=f[0],s=f[1],p=w(),b=Object(i.a)(p,4),g=b[0],v=b[1],x=b[2],y=b[3],j=O(g,x),E=Object(i.a)(j,3),S=E[0],k=E[1],C=function(n){var e=Object(r.useState)(0),t=Object(i.a)(e,2),o=t[0],a=t[1],c=Object(r.useState)(0),u=Object(i.a)(c,2),l=u[0],f=u[1],d=Object(r.useState)(0),s=Object(i.a)(d,2),p=s[0],m=s[1],h=[40,100,300,1200],b=Object(r.useCallback)(function(){n>0&&(a(function(e){return e+h[n-1]*(p+1)}),f(function(e){return e+n}))},[p,h,n]);return Object(r.useEffect)(function(){b()},[b,n,o]),[o,a,l,f,p,m]}(E[2]),J=Object(i.a)(C,6),T=J[0],F=J[1],N=J[2],A=J[3],B=J[4],Z=J[5];console.log("re-render"),console.log(t);var z=function(n){l(g,S,{x:n,y:0})||v({x:n,y:0})},D=function(){N>10*(B+1)&&(Z(function(n){return n+1}),a(1e3/(B+1)+200)),l(g,S,{x:0,y:1})?(g.pos.y<1&&(console.log("GAME OVER"),s(!0),a(null)),v({x:0,y:0,collided:!0})):v({x:0,y:1,collided:!1})},R=function(n){var e=n.keyCode;d||(37===e?z(-1):39===e?z(1):40===e?(console.log("interval off"),a(null),D()):38===e||88===e?y(S,1):90===e&&y(S,-1))};return function(n,e){var t=Object(r.useRef)();Object(r.useEffect)(function(){t.current=n},[n]),Object(r.useEffect)(function(){if(null!==e){var n=setInterval(function(){t.current()},e);return function(){clearInterval(n)}}},[e])}(function(){D()},t),o.a.createElement(m,{role:"button",tabIndex:"0",onKeyDown:function(n){return R(n)},onKeyUp:function(n){var e=n.keyCode;d||40===e&&(console.log("interval on"),a(1e3/(B+1)+200))}},o.a.createElement(h,null,o.a.createElement(I,{stage:S}),o.a.createElement("aside",null,o.a.createElement("div",{className:"heading"},o.a.createElement("h1",null,"TETRIS"),o.a.createElement("h2",null,"Rumeet Goradia")),o.a.createElement("div",{className:"buttons"},d?o.a.createElement(P,{gameOver:d,text:"Game Over"}):o.a.createElement("div",null,o.a.createElement("div",{className:"display"},o.a.createElement(P,{text:"".concat(T)}),o.a.createElement("h3",null,"Score")),o.a.createElement("div",{className:"display"},o.a.createElement(P,{text:"".concat(N)}),o.a.createElement("h3",null,"Rows")),o.a.createElement("div",{className:"display"},o.a.createElement(P,{text:"".concat(B)}),o.a.createElement("h3",null,"Level"))),o.a.createElement(L,{callback:function(){console.log("test"),k(u()),a(1e3),x(),s(!1),F(0),A(0),Z(0)}})))))},A=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},8:function(n,e,t){}},[[15,1,2]]]);
//# sourceMappingURL=main.ed324cbd.chunk.js.map