(this["webpackJsonpmemory-card-project"]=this["webpackJsonpmemory-card-project"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(17),r=n.n(o),i=(n(25),n(20)),s=n(3),d=(n(26),n(5)),l=n.n(d),u=n(8),j=n.n(u),b=n(18),p=n(19),h=n.n(p),m=(n(48),n(0)),O=function(e){var t=Object(c.useState)(null),n=Object(s.a)(t,2),a=n[0],o=n[1];return Object(c.useEffect)((function(){(function(){var t=Object(b.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h()("https://pokeapi.co/api/v2/pokemon/".concat(e.id,"/"));case 2:n=t.sent,o(n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.id]),Object(m.jsxs)("div",{className:"card",style:{backgroundImage:"url(/static/img/card-background.jpg)"},onClick:e.handleClick,id:e.id,children:[Object(m.jsx)("img",{src:(null===a||void 0===a?void 0:a.sprites.front_default)||"./static/img/card-background.jpg",alt:(null===a||void 0===a?void 0:a.name)||"Loading",width:"300px",height:"300px"}),Object(m.jsx)("div",{children:Object(m.jsx)("h3",{children:l.a.upperCase(null===a||void 0===a?void 0:a.name)||"Loading"})})]})},g=(n(50),function(e){var t=Object(c.useState)([]),n=Object(s.a)(t,2),a=n[0],o=n[1];return Object(c.useEffect)((function(){!function t(n){n&&e.handleClick(n.target.parentElement.id);for(var c=[],a=0;a<e.amount;a++)c.push(Object(m.jsx)(O,{handleClick:t,id:l.a.random(1,25)},l.a.uniqueId("pokemon_")));o(c)}()}),[e]),Object(m.jsx)("div",{className:"cardsList",onClick:e.handleClick,children:a})}),f=(n(51),function(){return Object(m.jsx)("footer",{children:"Made by Carlos Gonzalez carlossgv@gmail.com"})}),x=(n(52),function(e){return Object(m.jsxs)("div",{className:"scoreBoard",children:[Object(m.jsxs)("div",{className:"title",children:[Object(m.jsx)("img",{height:"80px",alt:"Pokemon Logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png"})," ",Object(m.jsx)("h1",{children:"Memory Game!"})]}),Object(m.jsxs)("h3",{children:["Points in this run: ",e.score]}),Object(m.jsxs)("h3",{children:["Personal record: ",e.maxScore]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"How to play:"})," Select a card a remember it! As long as you keep selecting non-repeating cards you'll score points."]})]})});var v=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(0),r=Object(s.a)(o,2),d=r[0],l=r[1],u=Object(c.useState)([]),j=Object(s.a)(u,2),b=j[0],p=j[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(x,{score:n,maxScore:d}),Object(m.jsx)(g,{amount:"6",handleClick:function(e){var t=Object(i.a)(b);"string"===typeof e&&(t.includes(e)?(p([]),alert("Game Finished! Points in this run: ".concat(n,". Personal record: ").concat(d)),a(0)):(t.push(e),p(t),a(n+1),console.log(n),n>=d&&l(n+1)))}}),Object(m.jsx)(f,{})]})};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.05f234cc.chunk.js.map