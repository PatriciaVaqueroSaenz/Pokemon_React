(this.webpackJsonpplantilla=this.webpackJsonpplantilla||[]).push([[0],{14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var n=s(1),o=s.n(n),r=s(8),i=s.n(r),a=(s(14),s(6)),c=s(7),p=(s(5),s(0)),l=function(e){return Object(p.jsxs)("article",{className:"pokemon__card",onClick:function(t){e.handlePokemon(e.pokemon.id)},children:[Object(p.jsx)("img",{className:"pokemon__card-image",src:e.pokemon.url,alt:e.pokemon.name}),Object(p.jsx)("h3",{className:"pokemon__card-title",children:e.pokemon.name}),Object(p.jsx)("ul",{className:"pokemon__card-typeList",children:e.pokemon.types.map((function(e,t){return Object(p.jsx)("li",{className:"typeList__item",children:e},t)}))})]})},m=function(e){var t=e.pokemonInfo.map((function(t){var s=t.id.toString();return Object(p.jsx)("li",{className:"pokelist__item",children:Object(p.jsx)(l,{pokemon:t,handlePokemon:e.handlePokemon})},s)}));return Object(p.jsx)("ul",{className:"pokelist",children:t})},u=s(9),h=s.p+"static/media/pokeball.8956d521.png",d=function(){var e=Object(n.useState)(u),t=Object(c.a)(e,1)[0],s=Object(n.useState)([]),o=Object(c.a)(s,2),r=o[0],i=o[1],l=function(e){console.log(e);var s=r.findIndex((function(t){return t.id===e}));if(-1===s){var n=t.find((function(t){return t.id===e}));r.push(n),i(Object(a.a)(r))}else r.splice(s,1),i(Object(a.a)(r))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("header",{className:"header__section",children:[Object(p.jsx)("h1",{className:"title__header",children:"Mi lista de pokemon"}),Object(p.jsx)("img",{className:"image__header",src:h,alt:"pokeball"})]}),Object(p.jsxs)("main",{className:"main__section",children:[Object(p.jsx)("section",{className:"pokelist__section",children:Object(p.jsx)(m,{pokemonInfo:t,handlePokemon:l})}),Object(p.jsxs)("section",{children:[Object(p.jsx)("h2",{children:"Favoritos"}),Object(p.jsx)(m,{pokemonInfo:r,handlePokemon:l})]})]})]})};i.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(d,{})}),document.getElementById("root"))},5:function(e,t,s){},9:function(e){e.exports=JSON.parse('[{"id":1,"name":"bulbasaur","types":["poison","grass"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{"id":2,"name":"ivysaur","types":["poison","grass"],"evolution":"bulbasaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},{"id":3,"name":"venusaur","types":["poison","grass"],"evolution":"ivysaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},{"id":4,"name":"charmander","types":["fire"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{"id":5,"name":"charmeleon","types":["fire"],"evolution":"charmander","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},{"id":6,"name":"charizard","types":["flying","fire"],"evolution":"charmeleon","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},{"id":7,"name":"squirtle","types":["water"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{"id":8,"name":"wartortle","types":["water"],"evolution":"squirtle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},{"id":9,"name":"blastoise","types":["water"],"evolution":"wartortle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},{"id":10,"name":"caterpie","types":["bug"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.f84b3749.chunk.js.map