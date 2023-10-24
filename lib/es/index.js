import{config as e}from"@fortawesome/fontawesome-svg-core";import"@fortawesome/fontawesome-svg-core/styles.css";import{jsxs as o,jsx as r}from"react/jsx-runtime";import{useCallback as t,useState as i}from"react";import a from"styled-components";import{FontAwesomeIcon as n}from"@fortawesome/react-fontawesome";import{faXmark as l}from"@fortawesome/free-solid-svg-icons";const s=a.span`
  text-overflow: ellipsis;
  overflow: hidden;
`,d=a.span`
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
`,p=({tag:e,onClick:t,tagOptions:i})=>{const{id:a,className:p="tag"}=e;return o(d,{id:a,className:p,...i,children:[r(s,{children:e.label}),r("button",{onClick:t,children:r(n,{icon:l})})]})},c=a.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: ${({width:e})=>e?`${e}px`:"100%"};
`,m=a.input`
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
`,g=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`,u=({id:e,caseInsensitive:a=!1,className:n="tag",onChange:l,placeholder:s="Type and press enter to add",tagOptions:d={minWidth:"50px",maxWidth:"200px",tooltipDelay:350},initialTags:u=[],upperCase:f=!1,validate:h,validationMessage:x="Tag value must be unique",width:w})=>{const v=t((o=>({className:`${n}-${o}`,id:`${e}-${o}`,label:o})),[n,e]),b=t((()=>{let e;if(a){const o=u.map((e=>null==e?void 0:e.trim().toLocaleLowerCase()));e=(e,r)=>e&&o.indexOf(e.toLocaleLowerCase())===r}else e=(e,o)=>e&&u.indexOf(e)===o;return u.map((e=>f?null==e?void 0:e.trim().toLocaleUpperCase():null==e?void 0:e.trim())).filter(e).filter((e=>!(h&&h(e)))).map((e=>v(e)))}),[a,v,u,f,h]),[y,C]=i(),[$,k]=i(b()),L=t((e=>()=>{const o=$.filter((o=>o.label!==e));k(o),l&&l(o.map((e=>e.label)))}),[$,k,l]),N=t((e=>{var o;const r=e.target;let t=null===(o=r.value)||void 0===o?void 0:o.trim();if(C(void 0),t&&"Enter"===e.key){e.preventDefault();const o=h&&h(t);if(f&&(t=t.toLocaleUpperCase()),a&&$.some((e=>{var o;return(null===(o=e.label)||void 0===o?void 0:o.toLowerCase())===t.toLowerCase()}))||$.some((e=>e.label===t)))C(x);else if(o)C(o);else{const e=v(t);k((o=>[...o,e])),r.value="",l&&l([...$.map((e=>e.label)),t])}}}),[a,v,l,$,f,h,x]);return o(c,{className:n,id:e,width:w,children:[r(m,{className:`${n}-input${y&&" error"}`,id:`${e}-input`,onKeyDown:N,placeholder:s,upperCase:f}),$.length>0&&r(g,{children:$.map((e=>r(p,{onClick:L(e.label),tag:e,tagOptions:d},e.id)))})]})};e.autoAddCss=!1;export{u as TagContainer};
//# sourceMappingURL=index.js.map
