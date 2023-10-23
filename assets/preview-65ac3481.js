import{R as r}from"./index-76fb7be0.js";import{W as b}from"./styled-components.browser.esm-9c250ae8.js";import"./_commonjsHelpers-de833af9.js";const{useParameter:T,addons:p,useEffect:$,useMemo:y}=__STORYBOOK_MODULE_PREVIEW_API__;var R=Object.defineProperty,v=(t,e)=>{for(var n in e)R(t,n,{get:e[n],enumerable:!0})},S={};v(S,{initializeThemeState:()=>f,pluckThemeFromContext:()=>c,useThemeParameters:()=>u});var _="@storybook/addon-styling",x=`${_}/theme-switcher`,O="theming",z="theme",P={},k={REGISTER_THEMES:`${x}/REGISTER_THEMES`};function c({globals:t}){return t[z]||""}function u(){return T(O,P)}function f(t,e){p.getChannel().emit(k.REGISTER_THEMES,{defaultTheme:e,themes:t})}var G=([t,e])=>e,I=({Provider:t,GlobalStyles:e,defaultTheme:n,themes:a={}})=>{let i=Object.keys(a),o=n||i[0];return f(i,o),(s,g)=>{let{themeOverride:l}=u(),m=c(g),d=y(()=>{let E=l||m||o,h=Object.entries(a);return h.length===1?G(h[0]):a[E]},[a,m,l]);return t?r.createElement(t,{theme:d},e&&r.createElement(e,null),s()):r.createElement(r.Fragment,null,e&&r.createElement(e,null),s())}};const M=b`
  html {
    font-size: 10px;
  }

  body {
    background-color: grey;
    font-family: sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    // The line-height is determined by dividing the targeted line-height size by the font-size,
    // where the target line-height is 20px and the font-size is 14px:
    line-height: 1.428571429;
    margin: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`,j=[I({GlobalStyles:M})],C={parameters:{staticDirs:["../public"],actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}};export{j as decorators,C as default};
//# sourceMappingURL=preview-65ac3481.js.map
