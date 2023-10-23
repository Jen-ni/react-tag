import{r as B,R as hn}from"./index-76fb7be0.js";import{H as ue}from"./styled-components.browser.esm-9c250ae8.js";import{P as b}from"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";var yn={exports:{}},De={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ea=B,ta=Symbol.for("react.element"),na=Symbol.for("react.fragment"),aa=Object.prototype.hasOwnProperty,ra=ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ia={key:!0,ref:!0,__self:!0,__source:!0};function xn(e,t,n){var a,r={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(a in t)aa.call(t,a)&&!ia.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)r[a]===void 0&&(r[a]=t[a]);return{$$typeof:ta,type:e,key:i,ref:o,props:r,_owner:ra.current}}De.Fragment=na;De.jsx=xn;De.jsxs=xn;yn.exports=De;var kn=yn.exports;const Q=kn.jsx,wn=kn.jsxs;function At(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?At(Object(n),!0).forEach(function(a){C(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):At(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Me(e){"@babel/helpers - typeof";return Me=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Me(e)}function oa(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ot(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function sa(e,t,n){return t&&Ot(e.prototype,t),n&&Ot(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ct(e,t){return fa(e)||ua(e,t)||An(e,t)||da()}function me(e){return la(e)||ca(e)||An(e)||ma()}function la(e){if(Array.isArray(e))return Ve(e)}function fa(e){if(Array.isArray(e))return e}function ca(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ua(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(e);!(r=(o=n.next()).done)&&(a.push(o.value),!(t&&a.length===t));r=!0);}catch(l){i=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function An(e,t){if(e){if(typeof e=="string")return Ve(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ve(e,t)}}function Ve(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function ma(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function da(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var St=function(){},ut={},On={},Sn=null,Tn={mark:St,measure:St};try{typeof window<"u"&&(ut=window),typeof document<"u"&&(On=document),typeof MutationObserver<"u"&&(Sn=MutationObserver),typeof performance<"u"&&(Tn=performance)}catch{}var pa=ut.navigator||{},Tt=pa.userAgent,Ct=Tt===void 0?"":Tt,Y=ut,A=On,It=Sn,ge=Tn;Y.document;var z=!!A.documentElement&&!!A.head&&typeof A.addEventListener=="function"&&typeof A.createElement=="function",Cn=~Ct.indexOf("MSIE")||~Ct.indexOf("Trident/"),be,he,ye,xe,ke,R="___FONT_AWESOME___",Ge=16,In="fa",En="svg-inline--fa",V="data-fa-i2svg",Ze="data-fa-pseudo-element",va="data-fa-pseudo-element-pending",mt="data-prefix",dt="data-icon",Et="fontawesome-i2svg",ga="async",ba=["HTML","HEAD","STYLE","SCRIPT"],Pn=function(){try{return!0}catch{return!1}}(),w="classic",T="sharp",pt=[w,T];function de(e){return new Proxy(e,{get:function(n,a){return a in n?n[a]:n[w]}})}var oe=de((be={},C(be,w,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),C(be,T,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),be)),se=de((he={},C(he,w,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),C(he,T,{solid:"fass",regular:"fasr",light:"fasl"}),he)),le=de((ye={},C(ye,w,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),C(ye,T,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ye)),ha=de((xe={},C(xe,w,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),C(xe,T,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),xe)),ya=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Nn="fa-layers-text",xa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ka=de((ke={},C(ke,w,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),C(ke,T,{900:"fass",400:"fasr",300:"fasl"}),ke)),_n=[1,2,3,4,5,6,7,8,9,10],wa=_n.concat([11,12,13,14,15,16,17,18,19,20]),Aa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],q={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fe=new Set;Object.keys(se[w]).map(fe.add.bind(fe));Object.keys(se[T]).map(fe.add.bind(fe));var Oa=[].concat(pt,me(fe),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",q.GROUP,q.SWAP_OPACITY,q.PRIMARY,q.SECONDARY]).concat(_n.map(function(e){return"".concat(e,"x")})).concat(wa.map(function(e){return"w-".concat(e)})),re=Y.FontAwesomeConfig||{};function Sa(e){var t=A.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ta(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(A&&typeof A.querySelector=="function"){var Ca=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ca.forEach(function(e){var t=ct(e,2),n=t[0],a=t[1],r=Ta(Sa(n));r!=null&&(re[a]=r)})}var Ln={styleDefault:"solid",familyDefault:"classic",cssPrefix:In,replacementClass:En,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};re.familyPrefix&&(re.cssPrefix=re.familyPrefix);var te=u(u({},Ln),re);te.autoReplaceSvg||(te.observeMutations=!1);var d={};Object.keys(Ln).forEach(function(e){Object.defineProperty(d,e,{enumerable:!0,set:function(n){te[e]=n,ie.forEach(function(a){return a(d)})},get:function(){return te[e]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(t){te.cssPrefix=t,ie.forEach(function(n){return n(d)})},get:function(){return te.cssPrefix}});Y.FontAwesomeConfig=d;var ie=[];function Ia(e){return ie.push(e),function(){ie.splice(ie.indexOf(e),1)}}var $=Ge,M={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ea(e){if(!(!e||!z)){var t=A.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=A.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return A.head.insertBefore(t,a),e}}var Pa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ce(){for(var e=12,t="";e-- >0;)t+=Pa[Math.random()*62|0];return t}function ne(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function vt(e){return e.classList?ne(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Mn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Na(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Mn(e[n]),'" ')},"").trim()}function ze(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function gt(e){return e.size!==M.size||e.x!==M.x||e.y!==M.y||e.rotate!==M.rotate||e.flipX||e.flipY}function _a(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:c}}function La(e){var t=e.transform,n=e.width,a=n===void 0?Ge:n,r=e.height,i=r===void 0?Ge:r,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Cn?l+="translate(".concat(t.x/$-a/2,"em, ").concat(t.y/$-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/$,"em), calc(-50% + ").concat(t.y/$,"em)) "):l+="translate(".concat(t.x/$,"em, ").concat(t.y/$,"em) "),l+="scale(".concat(t.size/$*(t.flipX?-1:1),", ").concat(t.size/$*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Ma=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Fn(){var e=In,t=En,n=d.cssPrefix,a=d.replacementClass,r=Ma;if(n!==e||a!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var Pt=!1;function Ue(){d.autoAddCss&&!Pt&&(Ea(Fn()),Pt=!0)}var Fa={mixout:function(){return{dom:{css:Fn,insertCss:Ue}}},hooks:function(){return{beforeDOMElementCreation:function(){Ue()},beforeI2svg:function(){Ue()}}}},j=Y||{};j[R]||(j[R]={});j[R].styles||(j[R].styles={});j[R].hooks||(j[R].hooks={});j[R].shims||(j[R].shims=[]);var _=j[R],Rn=[],Ra=function e(){A.removeEventListener("DOMContentLoaded",e),Fe=1,Rn.map(function(t){return t()})},Fe=!1;z&&(Fe=(A.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(A.readyState),Fe||A.addEventListener("DOMContentLoaded",Ra));function ja(e){z&&(Fe?setTimeout(e,0):Rn.push(e))}function pe(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?Mn(e):"<".concat(t," ").concat(Na(a),">").concat(i.map(pe).join(""),"</").concat(t,">")}function Nt(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Da=function(t,n){return function(a,r,i,o){return t.call(n,a,r,i,o)}},He=function(t,n,a,r){var i=Object.keys(t),o=i.length,s=r!==void 0?Da(n,r):n,l,c,f;for(a===void 0?(l=1,f=t[i[0]]):(l=0,f=a);l<o;l++)c=i[l],f=s(f,t[c],c,t);return f};function za(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function Ke(e){var t=za(e);return t.length===1?t[0].toString(16):null}function $a(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function _t(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function Je(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=_t(t);typeof _.hooks.addPack=="function"&&!r?_.hooks.addPack(e,_t(t)):_.styles[e]=u(u({},_.styles[e]||{}),i),e==="fas"&&Je("fa",t)}var we,Ae,Oe,Z=_.styles,Wa=_.shims,Ya=(we={},C(we,w,Object.values(le[w])),C(we,T,Object.values(le[T])),we),bt=null,jn={},Dn={},zn={},$n={},Wn={},Ua=(Ae={},C(Ae,w,Object.keys(oe[w])),C(Ae,T,Object.keys(oe[T])),Ae);function Ha(e){return~Oa.indexOf(e)}function Ba(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!Ha(r)?r:null}var Yn=function(){var t=function(i){return He(Z,function(o,s,l){return o[l]=He(s,i,{}),o},{})};jn=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),Dn=t(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),Wn=t(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in Z||d.autoFetchSvg,a=He(Wa,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});zn=a.names,$n=a.unicodes,bt=$e(d.styleDefault,{family:d.familyDefault})};Ia(function(e){bt=$e(e.styleDefault,{family:d.familyDefault})});Yn();function ht(e,t){return(jn[e]||{})[t]}function qa(e,t){return(Dn[e]||{})[t]}function X(e,t){return(Wn[e]||{})[t]}function Un(e){return zn[e]||{prefix:null,iconName:null}}function Xa(e){var t=$n[e],n=ht("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function U(){return bt}var yt=function(){return{prefix:null,iconName:null,rest:[]}};function $e(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,a=n===void 0?w:n,r=oe[a][e],i=se[a][e]||se[a][r],o=e in _.styles?e:null;return i||o||null}var Lt=(Oe={},C(Oe,w,Object.keys(le[w])),C(Oe,T,Object.keys(le[T])),Oe);function We(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(t={},C(t,w,"".concat(d.cssPrefix,"-").concat(w)),C(t,T,"".concat(d.cssPrefix,"-").concat(T)),t),o=null,s=w;(e.includes(i[w])||e.some(function(c){return Lt[w].includes(c)}))&&(s=w),(e.includes(i[T])||e.some(function(c){return Lt[T].includes(c)}))&&(s=T);var l=e.reduce(function(c,f){var m=Ba(d.cssPrefix,f);if(Z[f]?(f=Ya[s].includes(f)?ha[s][f]:f,o=f,c.prefix=f):Ua[s].indexOf(f)>-1?(o=f,c.prefix=$e(f,{family:s})):m?c.iconName=m:f!==d.replacementClass&&f!==i[w]&&f!==i[T]&&c.rest.push(f),!r&&c.prefix&&c.iconName){var p=o==="fa"?Un(c.iconName):{},h=X(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||h||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!Z.far&&Z.fas&&!d.autoFetchSvg&&(c.prefix="fas")}return c},yt());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===T&&(Z.fass||d.autoFetchSvg)&&(l.prefix="fass",l.iconName=X(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=U()||"fas"),l}var Va=function(){function e(){oa(this,e),this.definitions={}}return sa(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=u(u({},n.definitions[s]||{}),o[s]),Je(s,o[s]);var l=le[w][s];l&&Je(l,o[s]),Yn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),Mt=[],K={},ee={},Ga=Object.keys(ee);function Za(e,t){var n=t.mixoutsTo;return Mt=e,K={},Object.keys(ee).forEach(function(a){Ga.indexOf(a)===-1&&delete ee[a]}),Mt.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Me(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){K[o]||(K[o]=[]),K[o].push(i[o])})}a.provides&&a.provides(ee)}),n}function Qe(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=K[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(a))}),t}function G(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=K[e]||[];r.forEach(function(i){i.apply(null,n)})}function D(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ee[e]?ee[e].apply(null,t):void 0}function et(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||U();if(t)return t=X(n,t)||t,Nt(Hn.definitions,n,t)||Nt(_.styles,n,t)}var Hn=new Va,Ka=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,G("noAuto")},Ja={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return z?(G("beforeI2svg",t),D("pseudoElements2svg",t),D("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,ja(function(){er({autoReplaceSvgRoot:n}),G("watch",t)})}},Qa={icon:function(t){if(t===null)return null;if(Me(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:X(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=$e(t[0]);return{prefix:a,iconName:X(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(d.cssPrefix,"-"))>-1||t.match(ya))){var r=We(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||U(),iconName:X(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=U();return{prefix:i,iconName:X(i,t)||t}}}},P={noAuto:Ka,config:d,dom:Ja,parse:Qa,library:Hn,findIconDefinition:et,toHtml:pe},er=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?A:n;(Object.keys(_.styles).length>0||d.autoFetchSvg)&&z&&d.autoReplaceSvg&&P.dom.i2svg({node:a})};function Ye(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return pe(a)})}}),Object.defineProperty(e,"node",{get:function(){if(z){var a=A.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function tr(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(gt(o)&&n.found&&!a.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};r.style=ze(u(u({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function nr(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(d.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:a}]}]}function xt(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,m=e.extra,p=e.watchable,h=p===void 0?!1:p,O=a.found?a:n,x=O.width,k=O.height,I=r==="fak",S=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(E){return m.classes.indexOf(E)===-1}).filter(function(E){return E!==""||!!E}).concat(m.classes).join(" "),g={children:[],attributes:u(u({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:S,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(k)})},y=I&&!~m.classes.indexOf("fa-fw")?{width:"".concat(x/k*16*.0625,"em")}:{};h&&(g.attributes[V]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(f||ce())},children:[l]}),delete g.attributes.title);var v=u(u({},g),{},{prefix:r,iconName:i,main:n,mask:a,maskId:c,transform:o,symbol:s,styles:u(u({},y),m.styles)}),N=a.found&&n.found?D("generateAbstractMask",v)||{children:[],attributes:{}}:D("generateAbstractIcon",v)||{children:[],attributes:{}},L=N.children,F=N.attributes;return v.children=L,v.attributes=F,s?nr(v):tr(v)}function Ft(e){var t=e.content,n=e.width,a=e.height,r=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[V]="");var f=u({},o.styles);gt(r)&&(f.transform=La({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);var m=ze(f);m.length>0&&(c.style=m);var p=[];return p.push({tag:"span",attributes:c,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function ar(e){var t=e.content,n=e.title,a=e.extra,r=u(u(u({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=ze(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Be=_.styles;function tt(e){var t=e[0],n=e[1],a=e.slice(4),r=ct(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(q.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(q.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(q.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var rr={found:!1,width:512,height:512};function ir(e,t){!Pn&&!d.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function nt(e,t){var n=t;return t==="fa"&&d.styleDefault!==null&&(t=U()),new Promise(function(a,r){if(D("missingIconAbstract"),n==="fa"){var i=Un(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Be[t]&&Be[t][e]){var o=Be[t][e];return a(tt(o))}ir(e,t),a(u(u({},rr),{},{icon:d.showMissingIcons&&e?D("missingIconAbstract")||{}:{}}))})}var Rt=function(){},at=d.measurePerformance&&ge&&ge.mark&&ge.measure?ge:{mark:Rt,measure:Rt},ae='FA "6.4.2"',or=function(t){return at.mark("".concat(ae," ").concat(t," begins")),function(){return Bn(t)}},Bn=function(t){at.mark("".concat(ae," ").concat(t," ends")),at.measure("".concat(ae," ").concat(t),"".concat(ae," ").concat(t," begins"),"".concat(ae," ").concat(t," ends"))},kt={begin:or,end:Bn},_e=function(){};function jt(e){var t=e.getAttribute?e.getAttribute(V):null;return typeof t=="string"}function sr(e){var t=e.getAttribute?e.getAttribute(mt):null,n=e.getAttribute?e.getAttribute(dt):null;return t&&n}function lr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(d.replacementClass)}function fr(){if(d.autoReplaceSvg===!0)return Le.replace;var e=Le[d.autoReplaceSvg];return e||Le.replace}function cr(e){return A.createElementNS("http://www.w3.org/2000/svg",e)}function ur(e){return A.createElement(e)}function qn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?cr:ur:n;if(typeof e=="string")return A.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(qn(o,{ceFn:a}))}),r}function mr(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Le={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(qn(r),n)}),n.getAttribute(V)===null&&d.keepOriginalSource){var a=A.createComment(mr(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~vt(n).indexOf(d.replacementClass))return Le.replace(t);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,l){return l===d.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return pe(s)}).join(`
`);n.setAttribute(V,""),n.innerHTML=o}};function Dt(e){e()}function Xn(e,t){var n=typeof t=="function"?t:_e;if(e.length===0)n();else{var a=Dt;d.mutateApproach===ga&&(a=Y.requestAnimationFrame||Dt),a(function(){var r=fr(),i=kt.begin("mutate");e.map(r),i(),n()})}}var wt=!1;function Vn(){wt=!0}function rt(){wt=!1}var Re=null;function zt(e){if(It&&d.observeMutations){var t=e.treeCallback,n=t===void 0?_e:t,a=e.nodeCallback,r=a===void 0?_e:a,i=e.pseudoElementsCallback,o=i===void 0?_e:i,s=e.observeMutationsRoot,l=s===void 0?A:s;Re=new It(function(c){if(!wt){var f=U();ne(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!jt(m.addedNodes[0])&&(d.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&jt(m.target)&&~Aa.indexOf(m.attributeName))if(m.attributeName==="class"&&sr(m.target)){var p=We(vt(m.target)),h=p.prefix,O=p.iconName;m.target.setAttribute(mt,h||f),O&&m.target.setAttribute(dt,O)}else lr(m.target)&&r(m.target)})}}),z&&Re.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function dr(){Re&&Re.disconnect()}function pr(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function vr(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=We(vt(e));return r.prefix||(r.prefix=U()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=qa(r.prefix,e.innerText)||ht(r.prefix,Ke(e.innerText))),!r.iconName&&d.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function gr(e){var t=ne(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return d.autoA11y&&(n?t["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||ce()):(t["aria-hidden"]="true",t.focusable="false")),t}function br(){return{iconName:null,title:null,titleId:null,prefix:null,transform:M,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function $t(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=vr(e),a=n.iconName,r=n.prefix,i=n.rest,o=gr(e),s=Qe("parseNodeAttributes",{},e),l=t.styleParser?pr(e):[];return u({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:M,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var hr=_.styles;function Gn(e){var t=d.autoReplaceSvg==="nest"?$t(e,{styleParser:!1}):$t(e);return~t.extra.classes.indexOf(Nn)?D("generateLayersText",e,t):D("generateSvgReplacementMutation",e,t)}var H=new Set;pt.map(function(e){H.add("fa-".concat(e))});Object.keys(oe[w]).map(H.add.bind(H));Object.keys(oe[T]).map(H.add.bind(H));H=me(H);function Wt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!z)return Promise.resolve();var n=A.documentElement.classList,a=function(m){return n.add("".concat(Et,"-").concat(m))},r=function(m){return n.remove("".concat(Et,"-").concat(m))},i=d.autoFetchSvg?H:pt.map(function(f){return"fa-".concat(f)}).concat(Object.keys(hr));i.includes("fa")||i.push("fa");var o=[".".concat(Nn,":not([").concat(V,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(V,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=ne(e.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=kt.begin("onTree"),c=s.reduce(function(f,m){try{var p=Gn(m);p&&f.push(p)}catch(h){Pn||h.name==="MissingIcon"&&console.error(h)}return f},[]);return new Promise(function(f,m){Promise.all(c).then(function(p){Xn(p,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(p){l(),m(p)})})}function yr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Gn(e).then(function(n){n&&Xn([n],t)})}function xr(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:et(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:et(r||{})),e(a,u(u({},n),{},{mask:r}))}}var kr=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?M:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,m=n.title,p=m===void 0?null:m,h=n.titleId,O=h===void 0?null:h,x=n.classes,k=x===void 0?[]:x,I=n.attributes,S=I===void 0?{}:I,g=n.styles,y=g===void 0?{}:g;if(t){var v=t.prefix,N=t.iconName,L=t.icon;return Ye(u({type:"icon"},t),function(){return G("beforeDOMElementCreation",{iconDefinition:t,params:n}),d.autoA11y&&(p?S["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(O||ce()):(S["aria-hidden"]="true",S.focusable="false")),xt({icons:{main:tt(L),mask:l?tt(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:v,iconName:N,transform:u(u({},M),r),symbol:o,title:p,maskId:f,titleId:O,extra:{attributes:S,styles:y,classes:k}})})}},wr={mixout:function(){return{icon:xr(kr)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Wt,n.nodeCallback=yr,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?A:a,i=n.callback,o=i===void 0?function(){}:i;return Wt(r,o)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,l=a.transform,c=a.symbol,f=a.mask,m=a.maskId,p=a.extra;return new Promise(function(h,O){Promise.all([nt(r,s),f.iconName?nt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(x){var k=ct(x,2),I=k[0],S=k[1];h([n,xt({icons:{main:I,mask:S},prefix:s,iconName:r,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:p,watchable:!0})])}).catch(O)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,l=ze(s);l.length>0&&(r.style=l);var c;return gt(o)&&(c=D("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(c||i.icon),{children:a,attributes:r}}}},Ar={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Ye({type:"layer"},function(){G("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(me(i)).join(" ")},children:o}]})}}}},Or={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,c=l===void 0?{}:l,f=a.styles,m=f===void 0?{}:f;return Ye({type:"counter",content:n},function(){return G("beforeDOMElementCreation",{content:n,params:a}),ar({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(me(s))}})})}}}},Sr={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?M:r,o=a.title,s=o===void 0?null:o,l=a.classes,c=l===void 0?[]:l,f=a.attributes,m=f===void 0?{}:f,p=a.styles,h=p===void 0?{}:p;return Ye({type:"text",content:n},function(){return G("beforeDOMElementCreation",{content:n,params:a}),Ft({content:n,transform:u(u({},M),i),title:s,extra:{attributes:m,styles:h,classes:["".concat(d.cssPrefix,"-layers-text")].concat(me(c))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,l=null;if(Cn){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ft({content:n.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},Tr=new RegExp('"',"ug"),Yt=[1105920,1112319];function Cr(e){var t=e.replace(Tr,""),n=$a(t,0),a=n>=Yt[0]&&n<=Yt[1],r=t.length===2?t[0]===t[1]:!1;return{value:Ke(r?t[0]:t),isSecondary:a||r}}function Ut(e,t){var n="".concat(va).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var i=ne(e.children),o=i.filter(function(L){return L.getAttribute(Ze)===t})[0],s=Y.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(xa),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),a();if(l&&f!=="none"&&f!==""){var m=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?T:w,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?se[p][l[2].toLowerCase()]:ka[p][c],O=Cr(m),x=O.value,k=O.isSecondary,I=l[0].startsWith("FontAwesome"),S=ht(h,x),g=S;if(I){var y=Xa(x);y.iconName&&y.prefix&&(S=y.iconName,h=y.prefix)}if(S&&!k&&(!o||o.getAttribute(mt)!==h||o.getAttribute(dt)!==g)){e.setAttribute(n,g),o&&e.removeChild(o);var v=br(),N=v.extra;N.attributes[Ze]=t,nt(S,h).then(function(L){var F=xt(u(u({},v),{},{icons:{main:L,mask:yt()},prefix:h,iconName:g,extra:N,watchable:!0})),E=A.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(E,e.firstChild):e.appendChild(E),E.outerHTML=F.map(function(Qn){return pe(Qn)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Ir(e){return Promise.all([Ut(e,"::before"),Ut(e,"::after")])}function Er(e){return e.parentNode!==document.head&&!~ba.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ze)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ht(e){if(z)return new Promise(function(t,n){var a=ne(e.querySelectorAll("*")).filter(Er).map(Ir),r=kt.begin("searchPseudoElements");Vn(),Promise.all(a).then(function(){r(),rt(),t()}).catch(function(){r(),rt(),n()})})}var Pr={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ht,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?A:a;d.searchPseudoElements&&Ht(r)}}},Bt=!1,Nr={mixout:function(){return{dom:{unwatch:function(){Vn(),Bt=!0}}}},hooks:function(){return{bootstrap:function(){zt(Qe("mutationObserverCallbacks",{}))},noAuto:function(){dr()},watch:function(n){var a=n.observeMutationsRoot;Bt?rt():zt(Qe("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},qt=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},_r={mixout:function(){return{parse:{transform:function(n){return qt(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=qt(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(f)},p={transform:"translate(".concat(o/2*-1," -256)")},h={outer:s,inner:m,path:p};return{tag:"g",attributes:u({},h.outer),children:[{tag:"g",attributes:u({},h.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),h.path)}]}]}}}},qe={x:0,y:0,width:"100%",height:"100%"};function Xt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Lr(e){return e.tag==="g"?e.children:[e]}var Mr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?We(r.split(" ").map(function(o){return o.trim()})):yt();return i.prefix||(i.prefix=U()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,m=o.width,p=o.icon,h=_a({transform:l,containerWidth:m,iconWidth:c}),O={tag:"rect",attributes:u(u({},qe),{},{fill:"white"})},x=f.children?{children:f.children.map(Xt)}:{},k={tag:"g",attributes:u({},h.inner),children:[Xt(u({tag:f.tag,attributes:u(u({},f.attributes),h.path)},x))]},I={tag:"g",attributes:u({},h.outer),children:[k]},S="mask-".concat(s||ce()),g="clip-".concat(s||ce()),y={tag:"mask",attributes:u(u({},qe),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[O,I]},v={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:Lr(p)},y]};return a.push(v,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(S,")")},qe)}),{children:a,attributes:r}}}},Fr={provides:function(t){var n=!1;Y.matchMedia&&(n=Y.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Rr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},jr=[Fa,wr,Ar,Or,Sr,Pr,Nr,_r,Mr,Fr,Rr];Za(jr,{mixoutsTo:P});P.noAuto;P.config;P.library;P.dom;var it=P.parse;P.findIconDefinition;P.toHtml;var Dr=P.icon;P.layer;P.text;P.counter;function Vt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vt(Object(n),!0).forEach(function(a){J(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vt(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function je(e){"@babel/helpers - typeof";return je=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},je(e)}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zr(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function $r(e,t){if(e==null)return{};var n=zr(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function ot(e){return Wr(e)||Yr(e)||Ur(e)||Hr()}function Wr(e){if(Array.isArray(e))return st(e)}function Yr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ur(e,t){if(e){if(typeof e=="string")return st(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return st(e,t)}}function st(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Hr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Br(e){var t,n=e.beat,a=e.fade,r=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,l=e.spin,c=e.spinPulse,f=e.spinReverse,m=e.pulse,p=e.fixedWidth,h=e.inverse,O=e.border,x=e.listItem,k=e.flip,I=e.size,S=e.rotation,g=e.pull,y=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":m,"fa-fw":p,"fa-inverse":h,"fa-border":O,"fa-li":x,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},J(t,"fa-".concat(I),typeof I<"u"&&I!==null),J(t,"fa-rotate-".concat(S),typeof S<"u"&&S!==null&&S!==0),J(t,"fa-pull-".concat(g),typeof g<"u"&&g!==null),J(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(y).map(function(v){return y[v]?v:null}).filter(function(v){return v})}function qr(e){return e=e-0,e===e}function Zn(e){return qr(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Xr=["style"];function Vr(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Gr(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=Zn(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?t[Vr(r)]=i:t[r]=i,t},{})}function Kn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(l){return Kn(e,l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var f=t.attributes[c];switch(c){case"class":l.attrs.className=f,delete t.attributes.class;break;case"style":l.attrs.style=Gr(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=f:l.attrs[Zn(c)]=f}return l},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=$r(n,Xr);return r.attrs.style=W(W({},r.attrs.style),o),e.apply(void 0,[t.tag,W(W({},r.attrs),s)].concat(ot(a)))}var Jn=!1;try{Jn=!0}catch{}function Zr(){if(!Jn&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Gt(e){if(e&&je(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(it.icon)return it.icon(e);if(e===null)return null;if(e&&je(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Xe(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?J({},e,t):{}}var ve=hn.forwardRef(function(e,t){var n=e.icon,a=e.mask,r=e.symbol,i=e.className,o=e.title,s=e.titleId,l=e.maskId,c=Gt(n),f=Xe("classes",[].concat(ot(Br(e)),ot(i.split(" ")))),m=Xe("transform",typeof e.transform=="string"?it.transform(e.transform):e.transform),p=Xe("mask",Gt(a)),h=Dr(c,W(W(W(W({},f),m),p),{},{symbol:r,title:o,titleId:s,maskId:l}));if(!h)return Zr("Could not find icon",c),null;var O=h.abstract,x={ref:t};return Object.keys(e).forEach(function(k){ve.defaultProps.hasOwnProperty(k)||(x[k]=e[k])}),Kr(O[0],x)});ve.displayName="FontAwesomeIcon";ve.propTypes={beat:b.bool,border:b.bool,beatFade:b.bool,bounce:b.bool,className:b.string,fade:b.bool,flash:b.bool,mask:b.oneOfType([b.object,b.array,b.string]),maskId:b.string,fixedWidth:b.bool,inverse:b.bool,flip:b.oneOf([!0,!1,"horizontal","vertical","both"]),icon:b.oneOfType([b.object,b.array,b.string]),listItem:b.bool,pull:b.oneOf(["right","left"]),pulse:b.bool,rotation:b.oneOf([0,90,180,270]),shake:b.bool,size:b.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:b.bool,spinPulse:b.bool,spinReverse:b.bool,symbol:b.oneOfType([b.bool,b.string]),title:b.string,titleId:b.string,transform:b.oneOfType([b.string,b.object]),swapOpacity:b.bool};ve.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Kr=Kn.bind(null,hn.createElement),Jr={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};const Qr=ue.span`
  text-overflow: ellipsis;
  overflow: hidden;
`,ei=ue.span`
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${({minWidth:e})=>e||"50px"};
  max-width: ${({maxWidth:e})=>e||"200px"};
  text-wrap: nowrap;
  padding: 5px;
  background: honeydew;
  color: grey;
  border: 1px solid lightslategrey;
  border-radius: 4px;
  span,
  button {
    height: 16px;
  }
  button {
    background: honeydew;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    border: none;
    margin-left: 5px;
    cursor: pointer;
    &:focus {
      border: 1px solid grey;
      svg {
        color: grey;
      }
    }
    &:focus-visible {
      outline: none;
    }
  }
  svg {
    color: grey;
    width: 10px;
  }
  &:hover button {
    svg {
      color: grey;
    }
  }
`,lt=({tag:e,onClick:t,tagOptions:n})=>{const{id:a,className:r="tag"}=e;return wn(ei,{id:a,className:r,...n,children:[Q(Qr,{children:e.label}),Q("button",{onClick:t,children:Q(ve,{icon:Jr})})]})};try{lt.displayName="Tag",lt.__docgenInfo={description:"",displayName:"Tag",props:{tag:{defaultValue:null,description:"",name:"tag",required:!0,type:{name:"Tag"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(e: MouseEvent<HTMLButtonElement, MouseEvent>) => void"}},tagOptions:{defaultValue:null,description:"",name:"tagOptions",required:!0,type:{name:"TagOptions"}}}}}catch{}const ti=ue.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: ${({width:e})=>e?`${e}px`:"100%"};
`,ni=ue.input`
  border: 1px solid grey;
  outline: none;
  padding: 0.5rem;
  text-transform: ${({upperCase:e})=>e?"uppercase":"none"};
  ::placeholder {
    text-transform: none;
  }
  width: 100%;
  &.error {
    background-image: linear-gradient(45deg, white calc(100% - 1rem), red 1rem);
    border: 1px solid red;
    outline: none;
    &:hover {
      border-color: red;
    }
    &:focus,
    &:active {
      background-image: linear-gradient(45deg, white calc(100% - 1rem), red 1rem);
      border-color: red;
      // outline: 4px solid red;
    }
  }
`,ai=ue.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`,ft=({id:e,caseInsensitive:t=!1,className:n="tag",onChange:a,placeholder:r="Type and press enter to add",tagOptions:i={minWidth:"50px",maxWidth:"200px",tooltipDelay:350},initialTags:o=[],upperCase:s=!1,validate:l,validationMessage:c="Tag value must be unique",width:f})=>{const m=B.useCallback(g=>({className:`${n}-${g}`,id:`${e}-${g}`,label:g}),[n,e]),p=B.useCallback(()=>{let g;if(t){const y=o.map(v=>v==null?void 0:v.trim().toLocaleLowerCase());g=(v,N)=>v&&y.indexOf(v.toLocaleLowerCase())===N}else g=(y,v)=>y&&o.indexOf(y)===v;return o.map(y=>s?y==null?void 0:y.trim().toLocaleUpperCase():y==null?void 0:y.trim()).filter(g).filter(y=>!(l&&l(y))).map(y=>m(y))},[t,m,o,s,l]),[h,O]=B.useState(),[x,k]=B.useState(p()),I=B.useCallback(g=>()=>{const y=x.filter(v=>v.label!==g);k(y),a&&a(y.map(v=>v.label))},[x,k,a]),S=B.useCallback(g=>{var N;const y=g.target;let v=(N=y.value)==null?void 0:N.trim();if(O(void 0),v&&g.key==="Enter"){g.preventDefault();const L=l&&l(v);if(s&&(v=v.toLocaleUpperCase()),t&&x.some(F=>{var E;return((E=F.label)==null?void 0:E.toLowerCase())===v.toLowerCase()})||x.some(F=>F.label===v))O(c);else if(L)O(L);else{const F=m(v);k(E=>[...E,F]),y.value="",a&&a([...x.map(E=>E.label),v])}}},[t,m,a,x,s,l,c]);return wn(ti,{className:n,id:e,width:f,children:[Q(ni,{className:`${n}-input${h&&" error"}`,id:`${e}-input`,onKeyDown:S,placeholder:r,upperCase:s}),x.length>0&&Q(ai,{children:x.map(g=>Q(lt,{onClick:I(g.label),tag:g,tagOptions:i},g.id))})]})};try{ft.displayName="TagContainer",ft.__docgenInfo={description:"",displayName:"TagContainer",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},caseInsensitive:{defaultValue:{value:"false"},description:"",name:"caseInsensitive",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:"tag"},description:"",name:"className",required:!1,type:{name:"string"}},initialTags:{defaultValue:{value:"[]"},description:"",name:"initialTags",required:!1,type:{name:"string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((tags: string[]) => void)"}},placeholder:{defaultValue:{value:"Type and press enter to add"},description:"",name:"placeholder",required:!1,type:{name:"string"}},tagOptions:{defaultValue:{value:"{ minWidth: '50px', maxWidth: '200px', tooltipDelay: 350 }"},description:"",name:"tagOptions",required:!1,type:{name:"TagOptions"}},upperCase:{defaultValue:{value:"false"},description:"",name:"upperCase",required:!1,type:{name:"boolean"}},validate:{defaultValue:null,description:"",name:"validate",required:!1,type:{name:"((label: string) => string)"}},validationMessage:{defaultValue:{value:"Tag value must be unique"},description:"",name:"validationMessage",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}}}}}catch{}const li={title:"Components/Tag",component:ft,parameters:{},tags:["autodocs"]},Se={name:"Tag, default props",args:{caseInsensitive:!1,className:"tag",id:"tag",onChange:()=>{console.log("onChange")},placeholder:"Type and press enter to add",tagOptions:{minWidth:"50px",maxWidth:"200px",tooltipDelay:350},initialTags:["Tag"],width:200}},Te={name:"Tag, initial tags",args:{id:"tag-2",onChange:e=>{console.log(e)},initialTags:["Ready to Rumble","Let's Have My Story Told","Live A Little","1.000.000 Fahrenheit","The Voice You Need To Hear","Life Is A Hurricane","If I","Fear Of Missing Out","Too Old For Fairy Tales"]}},Ce={name:"Tag, tooltip",args:{id:"tag-3",onChange:e=>{console.log(e)},initialTags:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur, tortor in eleifend tincidunt, neque arcu blandit massa, ut pellentesque tellus leo at velit. Etiam imperdiet finibus gravida."],tagOptions:{maxWidth:"250px",minWidth:"50px",tooltipDelay:1e3}}},Ie={name:"Tag, placeholder",args:{id:"tag-4",onChange:e=>{console.log(e)},placeholder:"Skriv och tryck på enter för att lägga till",tagOptions:{maxWidth:"250px",minWidth:"50px"}}},Ee={name:"Tag, no duplicates",args:{id:"tag-5",onChange:e=>{console.log(e)},initialTags:[" Only once? ","Only once? "," Only once?","Only once?"],tagOptions:{maxWidth:"250px",minWidth:"50px"}}},Pe={name:"Tag, case insensitive",args:{id:"tag-6",caseInsensitive:!0,onChange:e=>{console.log(e)},initialTags:[" Only once? ","ONLY ONCE?"],tagOptions:{maxWidth:"250px",minWidth:"50px"}}},Ne={name:"Tag, BIC validator",args:{id:"tag-7",caseInsensitive:!0,onChange:e=>{console.log(e)},initialTags:["AABAFI22","HANDFIHH","helsfihh","This should be filtered away"],tagOptions:{maxWidth:"250px",minWidth:"50px"},upperCase:!0,validate:e=>/^([A-Z]{6}[A-Z2-9][A-NP-Z1-2])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(e.toUpperCase())?void 0:"Only valid BIC allowed"}};var Zt,Kt,Jt;Se.parameters={...Se.parameters,docs:{...(Zt=Se.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
  name: 'Tag, default props',
  args: {
    caseInsensitive: false,
    className: 'tag',
    id: 'tag',
    onChange: () => {
      console.log('onChange');
    },
    placeholder: 'Type and press enter to add',
    tagOptions: {
      minWidth: '50px',
      maxWidth: '200px',
      tooltipDelay: 350
    },
    initialTags: ['Tag'],
    width: 200
  }
}`,...(Jt=(Kt=Se.parameters)==null?void 0:Kt.docs)==null?void 0:Jt.source}}};var Qt,en,tn;Te.parameters={...Te.parameters,docs:{...(Qt=Te.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
  name: 'Tag, initial tags',
  args: {
    id: 'tag-2',
    onChange: tags => {
      console.log(tags);
    },
    initialTags: ['Ready to Rumble', "Let's Have My Story Told", 'Live A Little', '1.000.000 Fahrenheit', 'The Voice You Need To Hear', 'Life Is A Hurricane', 'If I', 'Fear Of Missing Out', 'Too Old For Fairy Tales']
  }
}`,...(tn=(en=Te.parameters)==null?void 0:en.docs)==null?void 0:tn.source}}};var nn,an,rn;Ce.parameters={...Ce.parameters,docs:{...(nn=Ce.parameters)==null?void 0:nn.docs,source:{originalSource:`{
  name: 'Tag, tooltip',
  args: {
    id: 'tag-3',
    onChange: tags => {
      console.log(tags);
    },
    initialTags: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur, tortor in eleifend tincidunt, neque arcu blandit massa, ut pellentesque tellus leo at velit. Etiam imperdiet finibus gravida.'],
    tagOptions: {
      maxWidth: '250px',
      minWidth: '50px',
      tooltipDelay: 1000
    }
  }
}`,...(rn=(an=Ce.parameters)==null?void 0:an.docs)==null?void 0:rn.source}}};var on,sn,ln;Ie.parameters={...Ie.parameters,docs:{...(on=Ie.parameters)==null?void 0:on.docs,source:{originalSource:`{
  name: 'Tag, placeholder',
  args: {
    id: 'tag-4',
    onChange: tags => {
      console.log(tags);
    },
    placeholder: 'Skriv och tryck på enter för att lägga till',
    tagOptions: {
      maxWidth: '250px',
      minWidth: '50px'
    }
  }
}`,...(ln=(sn=Ie.parameters)==null?void 0:sn.docs)==null?void 0:ln.source}}};var fn,cn,un;Ee.parameters={...Ee.parameters,docs:{...(fn=Ee.parameters)==null?void 0:fn.docs,source:{originalSource:`{
  name: 'Tag, no duplicates',
  args: {
    id: 'tag-5',
    onChange: tags => {
      console.log(tags);
    },
    initialTags: [' Only once? ', 'Only once? ', ' Only once?', 'Only once?'],
    tagOptions: {
      maxWidth: '250px',
      minWidth: '50px'
    }
  }
}`,...(un=(cn=Ee.parameters)==null?void 0:cn.docs)==null?void 0:un.source}}};var mn,dn,pn;Pe.parameters={...Pe.parameters,docs:{...(mn=Pe.parameters)==null?void 0:mn.docs,source:{originalSource:`{
  name: 'Tag, case insensitive',
  args: {
    id: 'tag-6',
    caseInsensitive: true,
    onChange: tags => {
      console.log(tags);
    },
    initialTags: [' Only once? ', 'ONLY ONCE?'],
    tagOptions: {
      maxWidth: '250px',
      minWidth: '50px'
    }
  }
}`,...(pn=(dn=Pe.parameters)==null?void 0:dn.docs)==null?void 0:pn.source}}};var vn,gn,bn;Ne.parameters={...Ne.parameters,docs:{...(vn=Ne.parameters)==null?void 0:vn.docs,source:{originalSource:`{
  name: 'Tag, BIC validator',
  args: {
    id: 'tag-7',
    caseInsensitive: true,
    onChange: tags => {
      console.log(tags);
    },
    initialTags: ['AABAFI22', 'HANDFIHH', 'helsfihh', 'This should be filtered away'],
    tagOptions: {
      maxWidth: '250px',
      minWidth: '50px'
    },
    upperCase: true,
    /**\r
     * BIC is the business identifier code (ISO 9362). This BIC check is not a guarantee for authenticity.\r
     *\r
     * BIC pattern: BBBBCCLLbbb (8 or 11 characters long; bbb is optional)\r
     *\r
     * BIC definition in detail:\r
     * - First 4 characters - bank code (only letters)\r
     * - Next 2 characters - ISO 3166-1 alpha-2 country code (only letters)\r
     * - Next 2 characters - location code (letters and digits)\r
     *   a. shall not start with '0' or '1'\r
     *   b. second character must be a letter ('O' is not allowed) or one of the following digits ('0' for test (therefore not allowed), '1' for passive participant and '2' for active participant)\r
     * - Last 3 characters - branch code, optional (shall not start with 'X' except in case of 'XXX' for primary office) (letters and digits)\r
     */
    validate: value => {
      return /^([A-Z]{6}[A-Z2-9][A-NP-Z1-2])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(value.toUpperCase()) ? undefined : 'Only valid BIC allowed';
    }
  }
}`,...(bn=(gn=Ne.parameters)==null?void 0:gn.docs)==null?void 0:bn.source}}};const fi=["TagStory1","TagStory2","TagStory3","TagStory4","TagStory5","TagStory6","TagStory7"];export{Se as TagStory1,Te as TagStory2,Ce as TagStory3,Ie as TagStory4,Ee as TagStory5,Pe as TagStory6,Ne as TagStory7,fi as __namedExportsOrder,li as default};
//# sourceMappingURL=tag.stories-47c162b1.js.map
