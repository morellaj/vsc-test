(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{100:function(e,n){},101:function(e,n){},102:function(e,n){},143:function(e,n,t){"use strict";t.r(n);var i=t(0),r=t.n(i),a=t(95),o=t(2),c=t(137),l=t.n(c),u=t(24),s=t(3),d=t.n(s),p=t(73);function f(e){var n=e.full;var t=n?"compress":"expand",i=n?"Exit Full Screen":"Full Screen";return r.a.createElement(m,{onClick:function(){e.setFull(!n)}},r.a.createElement(p.a,{icon:t}),i)}f.propTypes={setFull:d.a.func.isRequired,full:d.a.bool.isRequired};var m=o.b.div.withConfig({displayName:"ScreenButton__Container",componentId:"l2b7or-0"})(["font-size:25px;background-color:rgba(0,0,0,.27);position:absolute;top:10px;right:10px;display:flex;justify-content:center;align-items:center;border-radius:7px;padding:5px;:hover{cursor:pointer;}"]);function g(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],i=!0,r=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(i=(o=c.next()).done)&&(t.push(o.value),!n||t.length!==n);i=!0);}catch(e){r=!0,a=e}finally{try{i||null==c.return||c.return()}finally{if(r)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function b(){var e=g(Object(i.useState)(1),2),n=e[0],t=e[1],a=g(Object(i.useState)(1),2),o=a[0],c=a[1],s=g(Object(i.useState)(!0),2),d=s[0],p=s[1],m=g(Object(i.useState)(1),2),b=m[0],E=m[1],j=g(Object(i.useState)(!1),2),k=j[0],P=j[1],S="/assets/".concat(window.location.search.slice(1),".pdf");function F(){window.innerWidth/window.innerHeight<=16/9?E(window.innerWidth/960):E(window.innerHeight/540)}return Object(i.useEffect)((function(){return window.addEventListener("resize",F),function(){window.removeEventListener("resize",F)}})),r.a.createElement(l.a,{enabled:k,onChange:function(){return P(k)}},r.a.createElement(v,{full:k},r.a.createElement(u.a,null)),r.a.createElement(y,{file:S,loading:"Loading book...",error:"Book not found :(",onLoadSuccess:function(){t(1),c(1),F()},onItemClick:function(e){p(!1),t(e.pageNumber)}},r.a.createElement(w,{display:d,pageNumber:n,scale:b,renderTextLayer:!1,onRenderSuccess:function(){c(n),d||p(1)}},r.a.createElement(f,{full:k,setFull:P})),r.a.createElement(h,{display:d,pageNumber:o,scale:b,renderTextLayer:!1},r.a.createElement(x,null,"Loading..."),r.a.createElement(f,{full:k,setFull:P}))))}t.d(n,"default",(function(){return b}));var y=Object(o.b)(a.Document).withConfig({displayName:"PDFPage__StyledDoc",componentId:"sc-17uat8s-0"})(["display:flex;justify-content:center;height:100%;margin-bottom:20px;"]),w=Object(o.b)(a.Page).withConfig({displayName:"PDFPage__MainPage",componentId:"sc-17uat8s-1"})(["display:",";"],(function(e){return e.display?"block":"none"})),h=Object(o.b)(a.Page).withConfig({displayName:"PDFPage__LastPage",componentId:"sc-17uat8s-2"})(["display:",""],(function(e){return e.display?"none":"block"})),v=o.b.div.withConfig({displayName:"PDFPage__InvisNavbar",componentId:"sc-17uat8s-3"})(["display:",";"],(function(e){return e.full?"none":"block"})),x=o.b.div.withConfig({displayName:"PDFPage__Loading",componentId:"sc-17uat8s-4"})(["font-size:25px;background-color:white;position:absolute;top:10px;left:10px;display:flex;justify-content:center;align-items:center;border-radius:7px;padding:5px;:hover{cursor:pointer;}"])},73:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var i=t(0),r=t.n(i),a=t(3),o=t.n(a),c=t(80),l=t(81),u=t(82),s={book:l.a,expand:l.e,compress:l.d,list:u.a,child:l.c,pretend:l.k,smile:l.k,quiz:l.g,smart:l.g,money:l.i,shake:l.h,reader:l.b,text:l.f,show:l.l,question:l.j};function d(e){var n=e.icon;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{icon:s[n],style:{marginLeft:"5px",marginRight:"5px"}}))}d.propTypes={icon:o.a.string.isRequired}},99:function(e,n){}}]);