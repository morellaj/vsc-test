(window.webpackJsonp=window.webpackJsonp||[]).push([[7,10],{142:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(2),r=n(24),l=n(74),c=n(3),s=n.n(c),m=n(67);function p(e){var t=e.section,n=e.bookList;return a.a.createElement(d,null,a.a.createElement(f,null,t),a.a.createElement(u,null,n))}p.propTypes={section:s.a.string.isRequired,bookList:s.a.arrayOf(s.a.number).isRequired};var d=i.b.div.withConfig({displayName:"Section__Container",componentId:"sc-1tuv2qy-0"})(["padding:20px 20px 0 20px;margin-bottom:20px;border-radius:20px;max-width:1100px;background-color:white;"]),u=i.b.div.withConfig({displayName:"Section__BooksContainer",componentId:"sc-1tuv2qy-1"})(["display:flex;flex-flow:row wrap;justify-content:left;"]),f=i.b.h1.withConfig({displayName:"Section__SectionHeader",componentId:"sc-1tuv2qy-2"})(["margin:0;border-bottom:1px solid ",";"],m.d.LITS.color);function g(e){var t,n=e.images,o=e.images,i=o.thumbnail,r=o.smallThumbnail;return n?i?t=a.a.createElement(h,{src:i.replace("http://","https://")}):r&&(t=a.a.createElement(h,{src:r.replace("http://","https://")})):t=a.a.createElement(y,null,a.a.createElement("div",null,"No Image Available")),a.a.createElement(b,null,t)}g.propTypes={images:s.a.arrayOf(s.a.string).isRequired,thumbnail:s.a.string,smallThumbnail:s.a.string},g.defaultValues={thumbnail:void 0,smallThumbNail:void 0};var b=i.b.div.withConfig({displayName:"BookImage__Container",componentId:"sc-1l0a7sx-0"})(["display:flex;justify-content:center;flex:0 0 170px;border-radius:5px;border:1px solid lightgray;width:170px;height:200px;"]),h=i.b.img.withConfig({displayName:"BookImage__Image",componentId:"sc-1l0a7sx-1"})(["width:100%;height:100%;object-fit:contain;"]),y=i.b.div.withConfig({displayName:"BookImage__ImageMissing",componentId:"sc-1l0a7sx-2"})(["display:flex;justify-content:center;align-items:center;padding:40px;font-size:25px;"]);function x(e){var t,n=e.book,o=e.section,i=e.book,r=i.subtitle,l=i.title,c=i.primary,s=i.authors,m=i.pages,p=i.description,d=i.previewLink,u=i.infoLink,f=[];return n&&(t=r?a.a.createElement(k,null,"".concat(l,": "),a.a.createElement(_,null,r)):a.a.createElement(k,null,l),(c.length>1||c[0]!=o)&&(f.push(a.a.createElement("div",null,"This book is one of our favorites for these units: ")),f.push(a.a.createElement(z,null,"|")),c.forEach((function(e){f.push(a.a.createElement("div",null," ".concat(e,": ")+"text ")),f.push(a.a.createElement(z,null,"|"))})))),a.a.createElement(w,{book:n,onClick:function(){return e.setMoreInfo()}},n&&a.a.createElement(v,{onClick:function(e){return e.stopPropagation()}},a.a.createElement("div",null,t),a.a.createElement(E,null,a.a.createElement(C,null,a.a.createElement(g,{book:n}),a.a.createElement(N,null,"By ".concat(s))),a.a.createElement(I,null,a.a.createElement("div",null,n.pages&&a.a.createElement(N,null,"".concat(m," pages")),a.a.createElement(N,null,p)),a.a.createElement(B,null,d&&a.a.createElement(N,{as:"a",href:d,target:"_blank"},a.a.createElement("img",{src:"./assets/google-preview-logo.png"})),u&&a.a.createElement("a",{href:u,target:"_blank"},"Get more information from Google Books"))))))}var w=i.b.div.withConfig({displayName:"BookDetails__Container",componentId:"m5qznr-0"})(["display:",";justify-content:center;align-items:center;position:fixed;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.65);font-size:20px;"],(function(e){return e.book?"flex":"none"})),v=i.b.div.withConfig({displayName:"BookDetails__InfoContainer",componentId:"m5qznr-1"})(["display:flex;flex-direction:column;border:1px solid gray;border-radius:20px;max-width:80%;background-color:white;"]),k=i.b.div.withConfig({displayName:"BookDetails__Title",componentId:"m5qznr-2"})(["margin:20px 20px 10px 20px;padding-bottom:10px;border-bottom:3px solid lightgray;font-size:35px;font-weight:600;"]),_=i.b.span.withConfig({displayName:"BookDetails__SubTitle",componentId:"m5qznr-3"})(["font-size:30px;font-weight:400;"]),E=i.b.div.withConfig({displayName:"BookDetails__LowerContainer",componentId:"m5qznr-4"})(["display:flex;margin:0 20px 10px 20px;"]),C=i.b.div.withConfig({displayName:"BookDetails__LowerLeftContainer",componentId:"m5qznr-5"})(["color:black;"]),I=i.b.div.withConfig({displayName:"BookDetails__LowerRightContainer",componentId:"m5qznr-6"})(["display:flex;flex-direction:column;justify-content:space-between;margin-left:20px;"]),N=i.b.div.withConfig({displayName:"BookDetails__Text",componentId:"m5qznr-7"})(["margin-bottom:15px;:empty{display:none;}"]),B=i.b.div.withConfig({displayName:"BookDetails__LinksContainer",componentId:"m5qznr-8"})(["display:flex;flex-direction:column;"]),z=(i.b.div.withConfig({displayName:"BookDetails__RecommendationsContainer",componentId:"m5qznr-9"})(["margin:0 20px 0 20px;padding-top:10px;border-top:3px solid lightgray;"]),i.b.div.withConfig({displayName:"BookDetails__Recommendation",componentId:"m5qznr-10"})(["display:flex;align-items:center;flex-wrap:wrap;margin-bottom:15px;"]),i.b.div.withConfig({displayName:"BookDetails__Divider",componentId:"m5qznr-11"})(["margin:0 3px;padding-bottom:3px;color:lightgray;font-weight:900;"]));function q(e){var t=e.value,n=e.currentBook,o=n.subtitle,i=n.title,r=n.imageLinks,l=o?a.a.createElement(D,null,"".concat(i,": "),a.a.createElement(L,null,o)):a.a.createElement(D,null,i);return a.a.createElement(T,{onClick:function(){return e.setMoreInfo(t)}},a.a.createElement(g,{images:r}),l)}var T=i.b.div.withConfig({displayName:"Book__Container",componentId:"sc-9fomu4-0"})(["padding:20px;border-radius:20px;width:170px;:hover{background-color:lightgray;cursor:pointer;}"]),D=i.b.div.withConfig({displayName:"Book__Title",componentId:"sc-9fomu4-1"})(["text-align:center;margin-top:10px;font-size:18px;font-weight:600;"]),L=i.b.span.withConfig({displayName:"Book__SubTitle",componentId:"sc-9fomu4-2"})(["font-size:16px;font-weight:400;"]);function S(e,t,n){return e.map((function(e){return t[e]=m.a[e],a.a.createElement(q,{currentBook:m.a[e],setMoreInfo:n,value:e,key:e})}))}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],o=!0,a=!1,i=void 0;try{for(var r,l=e[Symbol.iterator]();!(o=(r=l.next()).done)&&(n.push(r.value),!t||n.length!==t);o=!0);}catch(e){a=!0,i=e}finally{try{o||null==l.return||l.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"default",(function(){return R}));var O={"hurting-others":"I-1","critical-thinking":"C-1",honesty:"S-1"};function R(){var e=j(Object(o.useState)(),2),t=e[0],n=e[1],i=O[window.location.search.slice(1)],c=m.b[i],s={},d=S(c.primary,s,n),u=S(c.secondary,s,n),f=Object.Prototype.hasOwnProperty.call(s,t)?s[t]:null;return a.a.createElement(a.a.Fragment,null,a.a.createElement(r.a,null),a.a.createElement(P,null,a.a.createElement(F,null,a.a.createElement(M,null,"Book Recommendations"),a.a.createElement(A,null,"".concat(i,": ").concat(m.c[i].title))),a.a.createElement(p,{section:"Our Favorites",bookList:d}),a.a.createElement(p,{section:"Other Recommendations",bookList:u}),a.a.createElement(x,{section:i,book:f,setMoreInfo:n})),a.a.createElement(l.default,null))}var P=i.b.div.withConfig({displayName:"BookPage__Container",componentId:"gsasfl-0"})(["display:flex;flex-direction:column;align-items:center;padding:0 40px;"]),F=i.b.div.withConfig({displayName:"BookPage__Header",componentId:"gsasfl-1"})(["display:flex;flex-direction:column;align-items:center;margin:20px;"]),M=i.b.div.withConfig({displayName:"BookPage__HeaderTitle",componentId:"gsasfl-2"})(["font-size:35px;font-weight:600;"]),A=i.b.div.withConfig({displayName:"BookPage__HeaderSubTitle",componentId:"gsasfl-3"})(["font-size:28px;"])},74:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var o=n(0),a=n.n(o),i=n(2),r=n(9),l=n(22);function c(){var e=l.a.map((function(e){return a.a.createElement(m,{key:e.title},a.a.createElement(r.b,{to:e.link,style:{color:"inherit",textDecoration:"none"}},a.a.createElement("div",null,e.title)))}));return a.a.createElement(s,null,e)}var s=i.b.ul.withConfig({displayName:"Footer__List",componentId:"sc-308fbg-0"})(["display:flex;justify-content:center;margin:50px 0 30px 0;font-size:18px;color:darkgray;list-style-type:none;"]),m=i.b.li.withConfig({displayName:"Footer__FooterItem",componentId:"sc-308fbg-1"})(["margin:0 15px;"])}}]);