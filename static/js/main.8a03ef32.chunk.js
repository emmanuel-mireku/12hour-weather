(this["webpackJsonp12hour-weather"]=this["webpackJsonp12hour-weather"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(2),a=n(10),i=n.n(a),s=n(3),o=n(4),l=n(0),j=function(e){return Math.round(e)},d=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],h=function(e){return 5/9*(e-32)},u=65,b=function(e){var t=e.dt,n=e.tempMin,r=e.tempMax,a=e.main,i=e.icon,s=e.description,b=e.tempType;"C"===b?(n=h(n),r=h(r),u=18):u=65;var m=new Date(t);return Object(c.jsxs)("div",{className:"weather-card",children:[Object(c.jsx)("div",{className:"weather-image",children:Object(c.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(i,"@2x.png"),alt:a})}),Object(c.jsxs)("h2",{className:"high",children:[Object(c.jsx)("span",{children:Object(c.jsx)(l.b.Provider,{value:{color:"".concat(r>u?"red":"blue"),className:"space"},children:Object(c.jsx)(o.c,{})})}),j(r)," ",String.fromCharCode(176)," ",b]}),Object(c.jsxs)("h3",{className:"low",children:[Object(c.jsx)("span",{children:Object(c.jsx)(l.b.Provider,{value:{color:"".concat(n<=u?"blue":"red"),style:{verticalAlign:"middle"},className:"space"},children:Object(c.jsx)(o.b,{})})}),j(n)," ",String.fromCharCode(176)," ",b]}),Object(c.jsxs)("div",{className:"weather-main",children:[Object(c.jsx)("h2",{className:"weather-title",children:a}),Object(c.jsx)("h6",{className:"weather-description",children:s}),Object(c.jsxs)("p",{className:"weather-date",children:[d[m.getDay()]," |"," ",m.toLocaleTimeString([],{hour:"numeric"})]})]})]})},m=function(e){var t=new Date(1e3*e);return{day:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t.getDay()],time:t.toLocaleTimeString([],{hour:"numeric"})}},x=function(e){var t=e.weathers,n=e.city,r=e.tempType,a=t[0].dt,i=m(a),s=m(t[4].dt);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"update",children:Object(c.jsxs)("h3",{children:["Weather update in ",n.name,", ",n.country," from ",i.day,","," ",i.time," to ",s.day,", ",s.time]})}),Object(c.jsx)("div",{className:"container",children:t.map((function(e){var t=e.dt,n=e.main,a=e.weather;return Object(c.jsx)("div",{children:Object(c.jsx)(b,{tempMax:n.temp_max,tempMin:n.temp_min,dt:1e3*t,main:a[0].main,icon:a[0].icon,description:a[0].description,tempType:r})},t)}))})]})},O=n(5),f=n(11);function g(){var e=Object(f.a)(["\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  outline: none;\n}\n\nbody{\n    align-items: center;\n    background-color: ",";\n    color: ",';\n    display: flex;\n    flex-direction: column;\n    font-family: -apple-system, "Nunito", "Roboto", "Lato", sans-serif;\n    justify-content: center;\n    margin: 0;\n    max-width: 100%;\n    padding: 0;\n    transition: all 0.25s linear;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n}\n\na {\n    text-decoration: none;\n}\n  \n\n.weather-card {\n    background-color: ',";\n    color: ","\n}\n\n.search input {\n    color: ",";\n}\n\n.search-icon {\n    color: ","\n}\n\n.page-heading a {\n    color: ","\n}\n\n.temperature-toggler {\n    color: ","\n}\n"]);return g=function(){return e},e}var p=Object(O.b)(g(),(function(e){return e.theme.body}),(function(e){return e.theme.text}),(function(e){return e.theme.cardColor}),(function(e){return e.theme.cardText}),(function(e){return e.theme.searchText}),(function(e){return e.theme.text}),(function(e){return e.theme.title}),(function(e){return e.theme.text})),y="#ffffff",v="#000000",w={body:"#202020",text:y,cardColor:"#8a8a8a",cardText:v,searchText:y,title:"orange"},N={body:"#e3e3e3",text:v,cardColor:y,cardText:v,searchText:v,title:v},C=function(e){var t=e.c,n=e.f,r=e.cf,a=e.cc;return Object(c.jsxs)("div",{className:"temp-wrapper",children:[Object(c.jsx)("span",{className:"toggler",style:{color:r},onClick:n,children:"".concat(String.fromCharCode(176),"F")}),Object(c.jsx)("span",{children:" | "}),Object(c.jsx)("span",{className:"toggler",style:{color:a},onClick:t,children:"".concat(String.fromCharCode(176),"C")})]})},S=function(e){var t=e.toggler;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("label",{className:"switch",children:[Object(c.jsx)("input",{type:"checkbox",onClick:t}),Object(c.jsx)("span",{className:"round-slider"})]})})},T=function(e){var t=e.onSearch,n=Object(r.useState)(""),a=Object(s.a)(n,2),i=a[0],j=a[1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("form",{className:"search",children:[Object(c.jsx)("input",{className:"search-input",autoComplete:"off",placeholder:"Accra,GH",onChange:function(e){e.preventDefault();var t=e.target.value;j(t)},value:i}),Object(c.jsx)("button",{onClick:function(e){e.preventDefault(),t(i)},children:Object(c.jsx)(l.b.Provider,{value:{style:{verticalAlign:"middle",fontSize:"2rem"},className:"search-icon"},children:Object(c.jsx)(o.a,{})})})]})})},k=function(e){var t=e.themeToggler,n=e.search,r=e.celcius,a=e.fahrenheit,i=e.colC,s=e.colF;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"nav-bar",children:Object(c.jsxs)("ul",{className:"nav-bar-list",children:[Object(c.jsx)("li",{children:Object(c.jsx)("h4",{className:"page-heading",children:Object(c.jsx)("a",{href:"/",children:"3 Hr Weather Forecast"})})}),Object(c.jsx)("li",{children:Object(c.jsx)(C,{c:r,f:a,cc:i,cf:s})}),Object(c.jsx)("li",{children:Object(c.jsx)(S,{toggler:t})}),Object(c.jsx)("li",{children:Object(c.jsx)(T,{onSearch:n})})]})})})},F=function(e){var t=Object(r.useState)(null),n=Object(s.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)(null),o=Object(s.a)(i,2),l=o[0],j=o[1],d=Object(r.useState)(null),h=Object(s.a)(d,2),u=h[0],b=h[1],m=Object(r.useState)(e),x=Object(s.a)(m,2),O=x[0],f=x[1];return Object(r.useEffect)((function(){O&&(b(!0),a(null),j(null),fetch(O).then((function(e){return e.json()})).then((function(e){b(!1),e.cod>=400?j(e.message):a(e)})).catch((function(e){b(!1),j(e)})))}),[O]),{data:c,error:l,isLoading:u,setUrl:f}},M=function(){var e=F(),t=e.data,n=e.error,a=e.isLoading,i=e.setUrl,o=Object(r.useState)("light"),l=Object(s.a)(o,2),j=l[0],d=l[1],h=Object(r.useState)("F"),u=Object(s.a)(h,2),b=u[0],m=u[1],f=Object(r.useState)("orange"),g=Object(s.a)(f,2),y=g[0],v=g[1],C=Object(r.useState)(""),S=Object(s.a)(C,2),T=S[0],M=S[1];return Object(c.jsx)(O.a,{theme:"light"===j?N:w,children:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(p,{}),Object(c.jsx)("header",{children:Object(c.jsx)(k,{themeToggler:function(){d("light"===j?"dark":"light")},search:function(e){i("".concat("https://api.openweathermap.org/","/data/2.5/forecast?q=").concat(e,"&cnt=5&appid=").concat("22e8f7a89168dea7870d59235cc1587d","&units=imperial"))},celcius:function(){m("C"),M("orange"),v("")},fahrenheit:function(){m("F"),M(""),v("orange")},colF:y,colC:T})}),Object(c.jsx)("main",{children:n?Object(c.jsxs)("h3",{style:{textAlign:"center"},children:["Error while fetching: ",n]}):!t&&a?Object(c.jsx)("h2",{style:{textAlign:"center"},children:"Loading..."}):t?Object(c.jsx)(x,{weathers:t.list,city:t.city,tempType:b}):null}),Object(c.jsx)("footer",{children:Object(c.jsxs)("p",{children:["by:",Object(c.jsxs)("a",{href:"https://emmanuel-mireku.github.io",target:"_blank",style:{color:"red"},rel:"noreferrer noopener",children:[" ","Emmanuel Mireku"]})]})})]})})};n(22);i.a.render(Object(c.jsx)(M,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.8a03ef32.chunk.js.map