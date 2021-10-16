(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{10:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(4),s=n.n(a),r=(n(10),n(5)),o=n(2),l=n(0),d=function(e){var t=e.title,n=e.poster_path,i=e.overview,c=e.vote_average,a=e.release_date,s=e.name,r=e.first_air_date,o=0;return o=a?new Date(a).getFullYear():new Date(r).getFullYear(),Object(l.jsxs)("div",{className:"movie-box",children:[Object(l.jsxs)("div",{className:"movie",children:[Object(l.jsx)("img",{className:"movie-image",src:n?"https://image.tmdb.org/t/p/w1280"+n:"https://media.istockphoto.com/vectors/movie-poster-template-cinema-design-in-flat-style-vector-id535504850",alt:t}),Object(l.jsxs)("div",{className:"movie-overview",children:[Object(l.jsx)("h3",{children:"Overview:"}),Object(l.jsx)("p",{children:i})]})]}),Object(l.jsxs)("div",{className:"movie-info",children:[Object(l.jsx)("h3",{children:t||s}),Object(l.jsxs)("h6",{children:[c,"/10 | ",o]})]})]})},j=function(e){var t=Object(i.useState)(""),n=Object(o.a)(t,2),c=n[0],a=n[1],s=function(e){r(e)},r=function(t){fetch(t).then((function(e){return e.json()})).then((function(t){e.search(t.results)}))};return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("h1",{children:"Discover"}),Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:"nav-list",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"javascript:void(0)",onClick:function(){return s("https://api.themoviedb.org/3/discover/movie?api_key=3a94078fb34b772a31d9a1348035bed7&language=en-US&sort")},children:"popular"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"javascript:void(0)",onClick:function(){return s("https://api.themoviedb.org/3/movie/now_playing?api_key=3a94078fb34b772a31d9a1348035bed7")},children:"newest"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"javascript:void(0)",onClick:function(){return s("https://api.themoviedb.org/3/trending/movie/day?api_key=3a94078fb34b772a31d9a1348035bed7")},children:"trending"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"javascript:void(0)",onClick:function(){return s("https://api.themoviedb.org/3/movie/top_rated?api_key=3a94078fb34b772a31d9a1348035bed7")},children:"top rated"})})]})}),Object(l.jsxs)("div",{className:"search-bar",children:[Object(l.jsx)("span",{className:"search-icon",children:Object(l.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"icon",children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),Object(l.jsx)("form",{onSubmit:function(e){(e.preventDefault(),c)&&(r("https://api.themoviedb.org/3/search/movie?api_key=3a94078fb34b772a31d9a1348035bed7&language=en-US&query="+c),a(""))},children:Object(l.jsx)("input",{type:"text",id:"search",autoComplete:"off",placeholder:"Search",className:"search",value:c,onChange:function(e){a(e.target.value)}})})]})]})},h=function(e){var t=["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"],n=function(t){fetch(t).then((function(e){return e.json()})).then((function(t){console.log(t.results),e.search(t.results)}))},i=function(t){fetch(t).then((function(e){return e.json()})).then((function(t){console.log(t.results),e.filter(t.results)}))};return Object(l.jsxs)("div",{className:"filter-section",children:[Object(l.jsx)("h3",{children:"Discover options"}),Object(l.jsxs)("form",{className:"filter-form",children:[Object(l.jsx)("div",{className:"lable",children:"Type"}),Object(l.jsxs)("select",{id:"type",className:"form-select selection","aria-label":"Default select example",onChange:function(e){"Movies"===e.target.value?n("https://api.themoviedb.org/3/discover/movie?api_key=3a94078fb34b772a31d9a1348035bed7"):i("https://api.themoviedb.org/3/tv/popular?api_key=3a94078fb34b772a31d9a1348035bed7")},children:[Object(l.jsx)("option",{value:"Movies",children:"Movies"}),Object(l.jsx)("option",{value:"TV-Series",children:"TV Series"})]}),Object(l.jsx)("div",{className:"lable",children:"Genre"}),Object(l.jsxs)("select",{id:"genre",className:"form-select selection","aria-label":"Default select example",onChange:function(e){},children:[Object(l.jsx)("option",{value:"Action",children:"Action"}),Object(l.jsx)("option",{value:"Drama",children:"Drama"}),Object(l.jsx)("option",{value:"Comedy",children:"Comedy"}),Object(l.jsx)("option",{value:"Thriller",children:"Thriller"}),Object(l.jsx)("option",{value:"Sci-Fi",children:"Sci-Fi"})]}),Object(l.jsx)("div",{className:"lable",children:"Year"}),Object(l.jsx)("select",{id:"from-year",className:"form-select selection","aria-label":"Default select example",onChange:function(e){},children:t.map((function(e){return Object(l.jsx)("option",{value:"".concat(e),children:e},e)}))}),Object(l.jsx)("select",{id:"to-year",className:"form-select selection","aria-label":"Default select example",onChange:function(e){},children:t.map((function(e){return Object(l.jsx)("option",{value:"".concat(e),children:e},e)}))})]})]})};n(12);var b=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],a=function(e){var t=e.filter((function(e){var t=new Date(e.release_date).getFullYear(),n=e.vote_average,i=e.poster_path;return t>=2e3&&t<=2021&&0!==n&&null!==i}));console.log("movie list:",t),c(t)};Object(i.useEffect)((function(){s("https://api.themoviedb.org/3/discover/movie?api_key=3a94078fb34b772a31d9a1348035bed7&language=en-US&sort")}),[]);var s=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){c(e.results)}))};return Object(l.jsxs)("div",{className:"body",children:[Object(l.jsxs)("div",{className:"movie-section",children:[Object(l.jsx)(j,{search:a}),Object(l.jsx)("div",{className:"movie-container",children:n.length>0&&n.map((function(e){return Object(l.jsx)(d,Object(r.a)({},e),e.id)}))})]}),Object(l.jsx)(h,{search:a,filter:function(e){var t=e.filter((function(e){var t=new Date(e.first_air_date).getFullYear(),n=e.vote_average,i=e.poster_path;return t>=2e3&&t<=2021&&0!==n&&null!==i}));console.log("movie list:",t),c(t)}})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),u()}},[[13,1,2]]]);
//# sourceMappingURL=main.bdda6ae6.chunk.js.map