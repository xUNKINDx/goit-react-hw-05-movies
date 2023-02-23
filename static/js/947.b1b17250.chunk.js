"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[947],{947:function(e,n,t){t.r(n);var r=t(861),c=t(439),a=t(757),s=t.n(a),i=t(791),u=t(689),o=t(87),p=t(967),l=t(474),f=t(184);n.default=function(){var e=(0,i.useState)(null),n=(0,c.Z)(e,2),t=n[0],a=n[1],h=(0,i.useState)(!1),v=(0,c.Z)(h,2),d=v[0],x=v[1],m=(0,i.useState)(null),j=(0,c.Z)(m,2),w=j[0],y=j[1],k=(0,u.UO)().movieId,_=(0,u.TH)();return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.prev=1,e.next=4,(0,p.Pg)(k);case 4:return n=e.sent,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:return e.prev=11,x(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e().then((function(e){return a(e)}))}),[]),(0,i.useEffect)((function(){var e,n;w||y(null!==(e=null===(n=_.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/")}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{children:(0,f.jsx)(o.rU,{to:w,children:"Go back"})}),d&&(0,f.jsx)(l.Z,{}),!d&&t&&(0,f.jsxs)("div",{children:[(0,f.jsxs)("section",{className:"section",children:[(0,f.jsx)("img",{className:"section__img",src:"https://image.tmdb.org/t/p/w300/".concat(t.poster_path),alt:t.title}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{className:"title-info",children:t.title}),(0,f.jsxs)("p",{className:"info",children:["User Score: ",t.vote_average]}),(0,f.jsx)("h3",{className:"title-info",children:"Overview"}),(0,f.jsx)("p",{className:"info",children:t.overview}),(0,f.jsx)("h3",{className:"title-info",children:"Genres"}),(0,f.jsx)("p",{className:"info",children:t.genres.map((function(e){return e.name})).join(", ")})]})]}),(0,f.jsx)("hr",{}),(0,f.jsxs)("section",{children:[(0,f.jsx)("h3",{children:"Additional infromation"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"cast",children:"Cast"})},"cast"),(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"reviews",children:"Reviews"})},"Reviews")]})]}),(0,f.jsx)(u.j3,{})]})]})}},967:function(e,n,t){t.d(n,{DC:function(){return o},IQ:function(){return d},Jh:function(){return m},Pg:function(){return h},z1:function(){return l}});var r=t(861),c=t(757),a=t.n(c),s=t(912),i="bc23d88e8c379b88dcc9e69c75bc8f78",u="https://api.themoviedb.org/3";function o(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(u,"/trending/movie/day?api_key=").concat(i,"&page=").concat(n),e.next=3,w(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e,n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function e(n,t){var r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=encodeURIComponent(n),c="".concat(u,"/search/movie?api_key=").concat(i,"&page=").concat(t,"&query=").concat(r),e.next=4,w(c);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(u,"/movie/").concat(n,"?api_key=").concat(i),e.next=3,w(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(u,"/movie/").concat(n,"/credits?api_key=").concat(i),e.next=3,w(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return j.apply(this,arguments)}function j(){return(j=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(u,"/movie/").concat(n,"/reviews?api_key=").concat(i),e.next=3,w(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get(n);case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=947.b1b17250.chunk.js.map