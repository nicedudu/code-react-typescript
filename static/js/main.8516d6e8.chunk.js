(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{30:function(e,t,n){e.exports=n(41)},41:function(e,t,n){"use strict";n.r(t);var r,o=n(0),c=n.n(o),a=n(14),l=n.n(a),u=n(6),i=n(9),s=n(11),E=n(10),S=n(24),m=n(26),p=n(27),d=n(18),f=n.n(d),h=n(28),b=n(13),U=n(29),v=function(e){return new Promise((function(t){fetch(e).then((function(e){return e.json()})).then((function(e){t(e)}))}))};!function(e){e.USERS_REQUEST="@@users/USERS_REQUEST",e.USERS_SUCCESS="@@users/USERS_SUCCESS",e.USERS_FAILURE="@@users/USERS_FAILURE"}(r||(r={}));var R={list:[],loading:!1,error:""},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.USERS_REQUEST:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case r.USERS_SUCCESS:return Object(b.a)(Object(b.a)({},e),{},{list:t.payload,loading:!1});default:return e}},y=Object(U.a)((function(e){return e.users}),(function(e){return e.list})),O=function(e,t){return Object(E.createStore)(function(e){return Object(E.combineReducers)({router:Object(s.b)(e),users:j})}(e),t,Object(m.composeWithDevTools)(Object(E.applyMiddleware)(Object(S.a)(e),p.a)))},w=function(){var e=Object(i.f)(y,i.d),t=Object(i.e)();return o.createElement("div",null,o.createElement("button",{type:"button",onClick:function(){return t(function(){var e=Object(h.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:r.USERS_REQUEST}),e.next=3,v("https://jsonplaceholder.typicode.com/users");case 3:n=e.sent,console.log("userList",n),t({type:r.USERS_SUCCESS,payload:n});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"GET USER LIST"),o.createElement("ul",null,e.map((function(e){return o.createElement("li",{key:e.id},e.name)}))))},g=n(21),_=n(2),C=function(){return o.createElement("h1",null,"Home")},k=function(){return o.createElement("h1",null,"Users")},T=function(){return o.createElement("div",null,o.createElement("div",null,o.createElement(g.a,{to:"/home",activeStyle:{color:"red"}},"Home"),o.createElement(g.a,{to:"/users",activeStyle:{color:"red"}},"Users")),o.createElement("div",null,o.createElement(_.c,null,o.createElement(_.a,{path:"/home",component:C}),o.createElement(_.a,{path:"/users",component:k}))),o.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=Object(u.a)(),I=O(x,void 0);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,{store:I,context:i.b},c.a.createElement(s.a,{history:x,context:i.b},c.a.createElement(T,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.8516d6e8.chunk.js.map