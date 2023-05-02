!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.TOC=t():e.TOC=t()}(self,(()=>(()=>{"use strict";var e={424:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"a:link { text-decoration: none; }\na:hover { text-decoration: underline; }\n\n.toc-wrapper {\n  padding: 0.6em 0 3px;\n}\n\n.toc-paragraph {\n    line-height: 0.6;\n}\n\n.toc-l-1 {\n    padding-left: 0;\n}\n\n.toc-l-2 {\n    padding-left: 1.0em;\n}\n\n.toc-l-3 {\n    padding-left: 2.0em;\n}\n\n.toc-l-4 {\n    padding-left: 3.0em;\n}\n\n.toc-l-5 {\n    padding-left: 4.0em;\n}\n\n.toc-l-6 {\n    padding-left: 5.0em;\n}\n",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=n(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var f=o(h,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r={};return(()=>{n.d(r,{default:()=>m});var e=n(379),t=n.n(e),o=n(795),a=n.n(o),i=n(569),s=n.n(i),c=n(565),d=n.n(c),l=n(216),p=n.n(l),u=n(589),h=n.n(u),f=n(424),v={};v.styleTagTransform=h(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=p(),t()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;class m{static get toolbox(){return{title:"TOC",icon:'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="4" y="4" width="16" height="16" rx="3" stroke="#000000" stroke-width="2"></rect> <path d="M16 10L8 10" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> <path d="M16 14L8 14" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> \n                      </g></svg>'}}constructor({data:e,api:t,block:n}){this.api=t,this.data=e,this.block=n,this.wrapper=void 0,this.data.items=e.items||[]}render(){return this.wrapper=document.createElement("div"),this.wrapper.id=this.block.id,this.wrapper.classList.add("toc-wrapper"),this.data.items.length<1&&this._getHeadings(),this._createTOC(),this.wrapper}static get isReadOnlySupported(){return!0}_getHeadings(){this.data.items=[];for(var e=this.api.blocks.getBlocksCount(),t=0;t<e;t++){var n=this.api.blocks.getBlockByIndex(t);if("header"==n.name&&n.holder.innerText){var r=n.holder.childNodes[0].childNodes[0].nodeName;r=parseInt(r.replace("H",""));var o={id:Math.random().toString(36).substring(2,12),reference:n.id,text:n.holder.innerText,level:r};this.data.items.push(o)}}this._createTOC()}_createTOC(){const e=new URL(window.location.href),t=e.origin+e.search,n=this.data.items;var r=document.createElement("div");if(n.length<1)r.innerHTML="<p>No headings found</p>";else for(const e of n){var o=document.createElement("p");o.classList.add("toc-paragraph"),o.classList.add("toc-l-"+e.level),o.innerHTML=e.text;var a=document.createElement("a");a.setAttribute("href",t+"#"+e.reference),a.addEventListener("click",(e=>{e.preventDefault(),document.getElementById(e.target.hash.substring(1))?.scrollIntoView({behavior:"smooth",block:"start",inline:"start"}),location.hash=e.target.hash})),a.appendChild(o),r.appendChild(a)}this.wrapper.innerHTML="",this.wrapper.appendChild(r)}renderSettings(){return[{icon:'<svg width="17" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.645 489.645">\n                      <path d="M460.656,132.911c-58.7-122.1-212.2-166.5-331.8-104.1c-9.4,5.2-13.5,16.6-8.3,27c5.2,9.4,16.6,13.5,27,8.3\n                          c99.9-52,227.4-14.9,276.7,86.3c65.4,134.3-19,236.7-87.4,274.6c-93.1,51.7-211.2,17.4-267.6-70.7l69.3,14.5\n                          c10.4,2.1,21.8-4.2,23.9-15.6c2.1-10.4-4.2-21.8-15.6-23.9l-122.8-25c-20.6-2-25,16.6-23.9,22.9l15.6,123.8\n                          c1,10.4,9.4,17.7,19.8,17.7c12.8,0,20.8-12.5,19.8-23.9l-6-50.5c57.4,70.8,170.3,131.2,307.4,68.2\n                          C414.856,432.511,548.256,314.811,460.656,132.911z"/>\n                  </svg>',name:"refresh",label:this.api.i18n.t("Refresh"),toggle:"toc",onActivate:()=>{this._getHeadings()}}]}save(e){return{items:this.data.items}}}})(),r.default})()));