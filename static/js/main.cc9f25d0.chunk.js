(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n(46)},37:function(e,t,n){},38:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),i=n.n(o),l=(n(37),n(38),n(63)),c=n(3),u=n(47),s=n(64),m=n(61);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var h=r.a.createElement("path",{d:"M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z"}),v=function(e){var t=e.svgRef,n=d(e,["svgRef"]);return r.a.createElement("svg",f({width:24,height:24,fillRule:"evenodd",clipRule:"evenodd",ref:t},n),h)},p=r.a.forwardRef(function(e,t){return r.a.createElement(v,f({svgRef:t},e))});n.p;function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var O=r.a.createElement("path",{d:"M0 12v1h23v-1h-23z"}),j=function(e){var t=e.svgRef,n=b(e,["svgRef"]);return r.a.createElement("svg",g({width:24,height:24,fillRule:"evenodd",clipRule:"evenodd",ref:t},n),O)},y=r.a.forwardRef(function(e,t){return r.a.createElement(j,g({svgRef:t},e))}),E=(n.p,n(29));function w(e){var t=e.children,n=Object(E.a)(e,["children"]);return r.a.createElement(s.a,Object.assign({style:{backgroundColor:"transparent",boxShadow:"none"}},n),t)}var x=n(5),V=n(15),z=n(14),R=n.n(z);function _(e){var t=Object(c.a)(e.controller,2),n=t[0],a=n.zoom,o=n.minZoom,i=n.maxZoom,l=t[1],s=function(e){var t=Math.sign(e)*(.1*a.getValue()+1);l({zoom:Object(z.clamp)(a.getValue()+t,o.getValue(),i.getValue())})};return r.a.createElement("div",{className:"Control",style:{width:70,display:"flex",zIndex:2}},r.a.createElement(u.a,{style:{borderRadius:"5em",maxHeight:240,margin:"auto",display:"flex",flexDirection:"column-reverse",justifyContent:"space-between"}},r.a.createElement(w,{onClick:function(e){e.preventDefault(),s(-1)}},r.a.createElement(y,null)),r.a.createElement("div",{style:{height:70,position:"relative"}},r.a.createElement(k,{diameter:70,zoom:a,zoomControl:l,minZoom:o,maxZoom:i})),r.a.createElement(w,{onClick:function(e){e.preventDefault(),s(1)}},r.a.createElement(p,null))))}function k(e){var t=Object(x.c)(function(){return{y:0,config:{friction:30,tension:400}}}),n=Object(c.a)(t,2),o=n[0].y,i=n[1],l=[e.zoom,e.zoomControl],u=l[0],f=l[1],d=Object(a.useState)(!1),h=Object(c.a)(d,2),v=h[0],p=h[1],g=Object(a.useState)(1),b=Object(c.a)(g,2),O=b[0],j=b[1],y=r.a.useRef(null);!function(e,t){var n=Object(a.useRef)();Object(a.useEffect)(function(){n.current=e}),Object(a.useEffect)(function(){if(null!==t){var e=setInterval(function(){n.current()},t);return function(){return clearInterval(e)}}},[t])}(function(){var t=u.getValue(),n=Object(z.clamp)(t+6e-5*Math.pow(t,.8)*O,e.minZoom.getValue(),e.maxZoom.getValue());f({zoom:n}),j(1.02*O)},v?100:null);var E=Object(V.b)(function(e){var t=e.down,n=Object(c.a)(e.movement,2),a=(n[0],n[1]),r=e.event,o=e.first,l=e.last;!o&&!l&&r.preventDefault(),p(t);var u=Object(z.clamp)(a,-80,80);j(t?-Math.sign(u)*Math.pow(Math.abs(u/8),4):0),i({y:t?u:0})},{event:{passive:!1,capture:!1},domTarget:y});return r.a.useEffect(E,[E]),r.a.createElement(x.a.div,{ref:y,style:{transform:o.interpolate(function(e){return"translateY(".concat(e,"px)")}),borderRadius:"50rem",width:e.diameter,height:e.diameter,marginLeft:-e.diameter/2,marginTop:-e.diameter/2,top:"50%",left:"50%",position:"absolute",zIndex:1}},r.a.createElement(s.a,{onClick:function(e){0===o.getValue()&&f({zoom:100})},style:{backgroundColor:"#2196f3",width:e.diameter,height:e.diameter}},r.a.createElement(m.a,{style:{color:"#fff"}},r.a.createElement(x.a.span,null,u.interpolate(function(e){return(e/100).toPrecision(5)})))))}function C(e){var t=Object(c.a)(e.controller,2),n=t[0],o=n.theta,i=n.itheta,l=t[1],f=function(e){return(e%360+360)%360},d=function(e){return 360*e/(2*Math.PI)},h={x:0,y:0,width:0,height:0},v=Object(a.useState)([0,0]),p=Object(c.a)(v,2),g=(p[0],p[1]),b=Object(V.b)(function(e){var t=Object(c.a)(e.xy,2),n=t[0],a=t[1],r=Object(c.a)(e.initial,2),u=r[0],s=r[1],m=Object(c.a)(e.previous,2),v=(m[0],m[1],e.first),p=(e.last,e.memo),b=void 0===p?o.getValue():p,O=h.x+h.width/2,j=h.y+h.height/2;if(v)return g([O,j]),l({theta:b,itheta:d(Math.atan2(-(u-O),s-j))}),b;var y=d(Math.atan2(-(n-O),a-j));return l({theta:b+f(y-i.getValue()),immediate:!0}),b});return r.a.createElement("div",Object.assign({},e,{style:{width:160,height:160,display:"flex",position:"relative"}}),r.a.createElement(u.a,Object.assign({},b(),{ref:function(e){if(e){var t=e.getBoundingClientRect();h={x:t.x,y:t.y,width:t.width,height:t.height}}},style:{borderRadius:"50rem",width:160,height:160}}),r.a.createElement(x.a.div,{style:{transform:o.interpolate(function(e){return"rotate(".concat(e,"deg)")}),width:"100%",height:"100%",display:"flex",justifyContent:"center"}},r.a.createElement(m.a,{style:{userSelect:"none"}},"(N)"))),r.a.createElement(s.a,{style:{width:70,height:70,borderRadius:"50rem",backgroundColor:"#2196f3",display:"flex",position:"absolute",left:"50%",top:"50%",margin:-35}},r.a.createElement(m.a,{style:{color:"#fff",margin:"auto"}},r.a.createElement(x.a.span,null,o.interpolate(function(e){return f(e).toFixed(0)})),"\xb0")))}n(45),n(24);var M=n(62),S=n(65),I=n(28);function P(e){var t=Object(a.useRef)(null),n=Object(a.useRef)(null),o=Object(a.useState)(23),i=Object(c.a)(o,2),l=i[0],u=i[1],s=Object(x.c)(function(){return{x:0,y:0,dx:0,dy:0,theta:0,zoom:100}}),f=Object(c.a)(s,2),d=f[0];f[1];var h=Object(c.a)(e.pos,2),v=h[0].pos,p=h[1],g=Object(c.a)(e.rot,2),b=g[0],O=b.theta,j=b.last_pointer_angle,y=g[1],E=Object(c.a)(e.zoom,2),w=E[0],z=w.zoom,_=w.last_pointer_dist,k=w.minZoom,C=w.maxZoom,P=E[1],D=Object(x.c)(function(){return{newVd_test:0}}),Z=Object(c.a)(D,2),F=Z[0].newVd_test,N=Z[1],B=Object(V.c)({onPinchStart:function(e){return e.event.preventDefault()},onPinch:function(e){var t=Object(c.a)(e.offset,2),n=t[0],a=t[1],r=e.down,o=Object(c.a)(e.vdva,2),i=(o[0],o[1],e.last,e.memo),l=void 0===i?[O.getValue(),j.getValue(),z.getValue(),_.getValue()]:i,u=Object(c.a)(l,4),s=u[0],m=u[1],f=u[2],d=u[3];console.log(n);var h=n/250,v=z.getValue();return P({zoom:R.a.clamp(f+(h-d)*Math.sign(v)*Math.abs(Math.pow(v,.9)),k.getValue(),C.getValue()),last_pointer_dist:h,immediate:r}),y({theta:s+(a-m),last_pointer_angle:a,immediate:r}),l},onPinchEnd:function(e){var t=Object(c.a)(e.vdva,2),n=t[0],a=t[1],r=R.a.clamp(z.getValue()+n,k.getValue(),C.getValue());N({newVd_test:n*(r-50)}),y({theta:a,config:{velocity:a,decay:!0}})},onDragStart:function(e){return e.event.preventDefault()},onDrag:function(e){var t=e.down,n=e.movement,a=e.velocity,r=e.direction,o=e.memo,i=void 0===o?v.getValue():o;return p({pos:Object(V.a)(n,i),immediate:t,config:{velocity:Object(I.scale)(r,a),decay:!0}}),i},onDragEnd:function(){}},{event:{passive:!1,capture:!1},domTarget:t});return Object(a.useEffect)(B,[B]),r.a.createElement("div",Object.assign({className:"fullSize"},e,{ref:t}),r.a.createElement(x.a.canvas,{id:"mandelbrot",width:200,height:200,alt:d.x.interpolate(function(e){return d.x.value+e}),style:{width:600,height:600,transform:Object(x.b)([v],function(e){var t=Object(c.a)(e,2);t[0],t[1];return"matrix3d(\n              1, 0, 0, 0,\n              0, 1, 0, 0,\n              0, 0, 1, 0,\n              0, 0, 0, 1\n            )"})},ref:n}),r.a.createElement(x.a.div,{id:"touch-test",style:{position:"absolute",top:0,width:500,height:500,zIndex:-1,transform:Object(x.b)([v,O,z],function(e,t,n){var a=Object(c.a)(e,2),r=a[0],o=a[1];return"\n            translate(".concat(r,"px, ").concat(o,"px)\n            rotate(").concat(t,"deg)\n            scale(").concat(n/100,")\n            ")})}},r.a.createElement("div",{style:{display:"flex-column",position:"relative"}},r.a.createElement(m.a,null,"pos: ",r.a.createElement(x.a.span,null,v.interpolate(function(e,t){return"x=".concat(e.toFixed(3),", y=").concat(t.toFixed(3))})),"; theta = ",r.a.createElement(x.a.span,null,O.interpolate(function(e){return e.toFixed(3)})),","),r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/2/21/Mandel_zoom_00_mandelbrot_set.jpg",style:{maxWidth:"100%",maxHeight:"100%"}}))),r.a.createElement(M.a,null,r.a.createElement(m.a,{style:{zIndex:1}},"theta: ",r.a.createElement(x.a.span,null,O.interpolate(function(e){return e.toFixed(3)})),", zoom: ",r.a.createElement(x.a.span,null,z.interpolate(function(e){return e.toFixed(3)})),", vd: ",r.a.createElement(x.a.span,null,F.interpolate(function(e){return e.toFixed(3)})),",")),r.a.createElement("hr",null),r.a.createElement(S.a,{defaultValue:l,valueLabelDisplay:"on",step:1,min:1,max:100,style:{width:200,margin:30},onChange:function(e,t){return u(t)}}))}var D=function(){var e={mass:1,tension:100,friction:200},t=Object(x.c)(function(){return{pos:[0,0],config:e}}),n=Object(x.c)(function(){return{theta:0,last_pointer_angle:0,itheta:0,config:e}}),o=Object(x.c)(function(){return{zoom:100,last_pointer_dist:0,minZoom:50,maxZoom:1e6,config:{mass:1,tension:600,friction:50}}});return r.a.createElement(a.Fragment,null,r.a.createElement(P,{style:{position:"absolute",zIndex:0},pos:t,rot:n,zoom:o}),r.a.createElement(l.a,{container:!0,direction:"column",justify:"space-evenly",alignItems:"flex-end"},r.a.createElement(_,{controller:o}),r.a.createElement(C,{className:"Control",controller:n})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.cc9f25d0.chunk.js.map