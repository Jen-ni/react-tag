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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3RhZy5jb21wb25lbnQudHN4IiwiLi4vLi4vLi4vc3JjL2NvbnRhaW5lcnMvdGFnLmNvbnRhaW5lci50c3giLCIuLi8uLi8uLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm5hbWVzIjpbIlNwYW5PdmVyZmxvd0hpZGRlbiIsInN0eWxlZCIsInNwYW4iLCJTdHlsZWRUYWciLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwiVGFnIiwidGFnIiwib25DbGljayIsInRhZ09wdGlvbnMiLCJpZCIsImNsYXNzTmFtZSIsIl9qc3hzIiwiY2hpbGRyZW4iLCJfanN4IiwibGFiZWwiLCJGb250QXdlc29tZUljb24iLCJpY29uIiwiZmFYbWFyayIsIkNvbnRhaW5lciIsImRpdiIsIndpZHRoIiwiSW5wdXQiLCJpbnB1dCIsInVwcGVyQ2FzZSIsIlRhZ3MiLCJUYWdDb250YWluZXIiLCJjYXNlSW5zZW5zaXRpdmUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwidG9vbHRpcERlbGF5IiwiaW5pdGlhbFRhZ3MiLCJ2YWxpZGF0ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwiY3JlYXRlVGFnIiwidXNlQ2FsbGJhY2siLCJpbml0VGFncyIsImZpbHRlckR1cGxpY2F0ZXMiLCJsb3dlckNhc2VMYWJlbHMiLCJtYXAiLCJpdGVtIiwidHJpbSIsInRvTG9jYWxlTG93ZXJDYXNlIiwiaW5kZXgiLCJpbmRleE9mIiwidG9Mb2NhbGVVcHBlckNhc2UiLCJmaWx0ZXIiLCJlcnJvciIsInNldEVycm9yIiwidXNlU3RhdGUiLCJ0YWdzIiwic2V0VGFncyIsIm9uVGFnQ2xpY2siLCJuZXdTZWxlY3Rpb25TdGF0ZSIsImIiLCJvbklucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsIl9hIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInZhbGlkYXRpb25FcnJvciIsInNvbWUiLCJ0b0xvd2VyQ2FzZSIsIm9uS2V5RG93biIsImxlbmd0aCIsImNvbmZpZyIsImF1dG9BZGRDc3MiXSwibWFwcGluZ3MiOiJrWEFXQSxNQUFNQSxFQUFxQkMsRUFBT0MsSUFBSTs7O0VBS2hDQyxFQUFZRixFQUFPQyxJQUFnQjs7Ozs7OztlQU8xQixFQUFHRSxjQUFlQSxHQUFZO2VBQzlCLEVBQUdDLGNBQWVBLEdBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXFEaENDLEVBQU0sRUFBR0MsTUFBS0MsVUFBU0MsaUJBQ2xDLE1BQU1DLEdBQUVBLEVBQUVDLFVBQUVBLEVBQVksT0FBVUosRUFFbEMsT0FDRUssRUFBQ1QsRUFBVSxDQUFBTyxHQUFJQSxFQUFJQyxVQUFXQSxLQUFlRixFQUMzQ0ksU0FBQSxDQUFBQyxFQUFDZCxFQUFvQixDQUFBYSxTQUFBTixFQUFJUSxRQUN6QkQsRUFBQSxTQUFBLENBQVFOLFFBQVNBLEVBQ2ZLLFNBQUFDLEVBQUNFLEVBQWUsQ0FBQ0MsS0FBTUMsUUFHM0IsRUM3REVDLEVBQVlsQixFQUFPbUIsR0FBbUI7Ozs7V0FJakMsRUFBR0MsV0FBYUEsRUFBUSxHQUFHQSxNQUFZO0VBRzVDQyxFQUFRckIsRUFBT3NCLEtBQWlCOzs7O29CQUlsQixFQUFHQyxlQUFpQkEsRUFBWSxZQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBcUI1REMsRUFBT3hCLEVBQU9tQixHQUFHOzs7OztFQVdWTSxFQUFlLEVBQzFCaEIsS0FDQWlCLG1CQUFrQixFQUNsQmhCLFlBQVksTUFDWmlCLFdBQ0FDLGNBQWMsOEJBQ2RwQixhQUFhLENBQUVMLFNBQVUsT0FBUUMsU0FBVSxRQUFTeUIsYUFBYyxLQUNsRUMsY0FBYyxHQUNkUCxhQUFZLEVBQ1pRLFdBQ0FDLG9CQUFvQiwyQkFDcEJaLFlBRUEsTUFBTWEsRUFBWUMsR0FDZnBCLElBQW1CLENBQ2xCSixVQUFXLEdBQUdBLEtBQWFJLElBQzNCTCxHQUFJLEdBQUdBLEtBQU1LLElBQ2JBLFdBRUYs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
