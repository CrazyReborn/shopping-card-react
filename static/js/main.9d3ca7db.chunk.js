(this["webpackJsonpshopping-cart-react"]=this["webpackJsonpshopping-cart-react"]||[]).push([[0],{17:function(t,e,c){},18:function(t,e,c){"use strict";c.r(e);var s=c(1),a=c.n(s),n=c(9),i=c.n(n),r=c(5),d=c(2),j=c(3),o=(c(14),c(8),{added:[],add:function(t){Math.random(),Math.random(),Math.random();this.added=this.added.concat(t),this.totalCost=this.totalCost+t.price,console.log(this.added)},remove:function(t){if(console.log(this.added),console.log(t),this.added.includes(t)){var e=this.added.indexOf(t);this.added.splice(e,1),this.totalCost=this.totalCost-t.price}},totalCost:0}),l=c(0),b=function(t){var e=t.className,c=t.items;return Object(l.jsxs)("nav",{className:e,children:[Object(l.jsx)(r.b,{to:"/shopping-cart-react",children:"HOME"}),Object(l.jsx)(r.b,{to:"/shopping-cart-react/xbox",children:"XBOX"}),Object(l.jsx)(r.b,{to:"/shopping-cart-react/playstation",children:"PLAYSTATION"}),Object(l.jsx)(r.b,{to:"/shopping-cart-react/switch",children:"SWITCH"}),Object(l.jsxs)(r.b,{to:"/shopping-cart-react/cart",children:["CART: ",c]})]})};c(17);var h=function(){var t=Object(s.useState)(o.added.length),e=Object(j.a)(t,2),c=e[0];return e[1],Object(l.jsxs)("div",{children:[Object(l.jsx)(b,{items:c,className:"nav home"}),Object(l.jsx)("div",{className:"greeting",children:"WHERE THE GAME BEGINS"})]})},m=function(){var t=Object(s.useState)(o.totalCost),e=Object(j.a)(t,2),c=e[0],a=e[1],n=Object(s.useState)(o.added.length),i=Object(j.a)(n,2),r=i[0],d=i[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(b,{items:r,className:"nav home"}),Object(l.jsxs)("div",{className:"cart",children:[c>0?o.added.map((function(t,e){return Object(l.jsxs)("div",{className:"cart entry",children:[Object(l.jsx)("img",{src:t.img,alt:"Picture of "+t.name}),Object(l.jsx)("h2",{children:t.name}),Object(l.jsxs)("p",{children:["Price: $",t.price]}),Object(l.jsx)("button",{onClick:function(e){o.remove(t),a(o.totalCost),d(o.added.length)},children:"Remove from Cart"})]},e)})):Object(l.jsx)("div",{className:"total",children:"You have no products in your cart"}),r>0&&Object(l.jsxs)("div",{className:"total",children:["Total: $",c]})]})]})},p=c.p+"static/media/xboxX.a839f513.png",O=c.p+"static/media/seriess.3de03349.png",x=c.p+"static/media/ps5.9a49df01.png",u=c.p+"static/media/switch.ad3e3140.png",v=c.p+"static/media/switch-oled.f045170c.png",g={name:"Xbox Series X",price:399,img:p,notAvalible:!1},N={name:"Xbox Series S",price:299,img:O,notAvalible:!1},f={name:"Sony Playstation 5",price:499,img:x,notAvalible:!1},y={name:"Nintendo Switch",price:299,img:u,notAvalible:!1},S={name:"Nintendo Switch OLED",price:349,img:v,notAvalible:!1},E=function(t){var e=t.setItems,c=t.className,s=t.productEntry;return Object(l.jsxs)("div",{className:c,children:[Object(l.jsx)("h2",{children:s.name}),Object(l.jsx)("img",{src:s.img,alt:"Picture of "+s.name}),Object(l.jsxs)("p",{className:"price",children:["$",s.price]}),Object(l.jsx)("button",{onClick:function(t){o.add(s),e(o.added.length)},className:"add button",children:"Add"})]})},C=function(){var t=Object(s.useState)(o.added.length),e=Object(j.a)(t,2),c=e[0],a=e[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(b,{items:c,className:"nav playstation"}),Object(l.jsx)("div",{className:"products",children:Object(l.jsx)(E,{setItems:a,className:"entry ps",productEntry:f})})]})},w=function(){var t=Object(s.useState)(o.added.length),e=Object(j.a)(t,2),c=e[0],a=e[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(b,{items:c,className:"nav switch"}),Object(l.jsxs)("div",{className:"products",children:[Object(l.jsx)(E,{setItems:a,className:"entry switch regular",productEntry:y}),Object(l.jsx)(E,{setItems:a,className:"entry switch oled",productEntry:S})]})]})},A=function(){var t=Object(s.useState)(o.added.length),e=Object(j.a)(t,2),c=e[0],a=e[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(b,{items:c,className:"nav xbox"}),Object(l.jsxs)("div",{className:"products xbox",children:[Object(l.jsx)(E,{setItems:a,className:"entry",productEntry:N}),Object(l.jsx)(E,{setItems:a,className:"entry",productEntry:g})]})]})},I=function(){return Object(l.jsx)("div",{className:"navbar",children:Object(l.jsx)(r.a,{children:Object(l.jsxs)(d.c,{children:[Object(l.jsx)(d.a,{path:"/shopping-cart-react",element:Object(l.jsx)(h,{})}),Object(l.jsx)(d.a,{path:"/shopping-cart-react/xbox",element:Object(l.jsx)(A,{})}),Object(l.jsx)(d.a,{path:"/shopping-cart-react/playstation",element:Object(l.jsx)(C,{})}),Object(l.jsx)(d.a,{path:"/shopping-cart-react/switch",element:Object(l.jsx)(w,{})}),Object(l.jsx)(d.a,{path:"/shopping-cart-react/cart",element:Object(l.jsx)(m,{})})]})})})};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(I,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.9d3ca7db.chunk.js.map