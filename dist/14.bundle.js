(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{144:function(t,e,a){"use strict";a.r(e);var i=a(0),n=a.n(i),s=a(2),o=a(8),r=a(10),c=a.n(r);function l(t){var e=t.status,a=t.text,i=a.replace(/\s+/g,"-").toLowerCase();return n.a.createElement(p,null,n.a.createElement(d,{src:"./assets/".concat(i,"1.jpg"),status:e}),n.a.createElement(u,null,n.a.createElement(x,null,a),n.a.createElement(m,{status:e},e)))}l.propTypes={status:c.a.string.isRequired,text:c.a.string.isRequired};var p=s.b.div.withConfig({displayName:"Topic__Container",componentId:"sc-696j64-0"})(["display:flex;justify-content:center;align-items:center;position:relative;margin:30px 20px;border-radius:20px;width:250px;height:250px;box-shadow:0 0 20px 0 #000000;background-color:white;"]),d=s.b.img.withConfig({displayName:"Topic__Image",componentId:"sc-696j64-1"})(["max-width:250px;max-height:250px;border-radius:20px;opacity:",";"],(function(t){return"Available"===t.status?1:.7})),u=s.b.div.withConfig({displayName:"Topic__TextContainer",componentId:"sc-696j64-2"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;position:absolute;top:-30px;padding:10px;border:3px solid black;border-radius:20px;max-width:200px;background-color:white;font-weight:700;"]),x=s.b.div.withConfig({displayName:"Topic__Title",componentId:"sc-696j64-3"})(["font-size:20px;margin-bottom:5px;color:black;"]),m=s.b.div.withConfig({displayName:"Topic__Status",componentId:"sc-696j64-4"})(["color:",""],(function(t){return"Available"===t.status?"green":"darkslategray"}));a.d(e,"default",(function(){return f}));var g=[{id:1,text:"Hurting Others",status:"Available"},{id:2,text:"Critical Thinking",status:"Available"},{id:3,text:"Honesty",status:"Available"},{id:4,text:"Thinking for Yourself",status:"Date TBD"},{id:5,text:"Anger",status:"Date TBD"},{id:6,text:"Sharing",status:"Date TBD"},{id:7,text:"Gratitude",status:"Date TBD"},{id:8,text:"Caring",status:"Date TBD"},{id:9,text:"Making the World a Better Place",status:"Date TBD"},{id:10,text:"Diversity",status:"Date TBD"}];function f(){var t=g.map((function(t){return"Available"===t.status?n.a.createElement(o.b,{to:"/units?".concat(t.text.replace(/\s+/g,"-").toLowerCase()),key:t.id},n.a.createElement(l,{status:t.status,text:t.text})):n.a.createElement(l,{status:t.status,text:t.text,key:t.id})}));return n.a.createElement(b,null,n.a.createElement(y,null,t))}var b=s.b.section.withConfig({displayName:"TopicsDisplay__Container",componentId:"sc-1foecoj-0"})(["display:flex;justify-content:center;"]),y=s.b.div.withConfig({displayName:"TopicsDisplay__DisplayContainer",componentId:"sc-1foecoj-1"})(["display:flex;justify-content:center;flex-wrap:wrap;padding:0 50px;"])}}]);