(function(_,f){typeof exports=="object"&&typeof module<"u"?f(exports):typeof define=="function"&&define.amd?define(["exports"],f):(_=typeof globalThis<"u"?globalThis:_||self,f(_.MyLib={}))})(this,function(_){"use strict";var __vite_style__=document.createElement("style");__vite_style__.innerHTML=`.btn.svelte-dpmtep{border:8px solid #35eb9a}
`;document.head.appendChild(__vite_style__);function f(){}function N(t){return t()}function S(){return Object.create(null)}function h(t){t.forEach(N)}function I(t){return typeof t=="function"}function A(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function q(t){return Object.keys(t).length===0}function m(t,e){t.appendChild(e)}function G(t,e,n){const o=J(t);if(!o.getElementById(e)){const c=x("style");c.id=e,c.textContent=n,K(o,c)}}function J(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function K(t,e){m(t.head||t,e)}function v(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function x(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function Q(){return p(" ")}function w(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function L(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function U(t){return Array.from(t.childNodes)}function C(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function V(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const c=document.createEvent("CustomEvent");return c.initCustomEvent(t,n,o,e),c}let g;function y(t){g=t}function W(){if(!g)throw new Error("Function called outside component initialization");return g}function X(){const t=W();return(e,n,{cancelable:o=!1}={})=>{const c=t.$$.callbacks[e];if(c){const u=V(e,n,{cancelable:o});return c.slice().forEach(s=>{s.call(t,u)}),!u.defaultPrevented}return!0}}const $=[],O=[],k=[],P=[],Y=Promise.resolve();let j=!1;function Z(){j||(j=!0,Y.then(D))}function T(t){k.push(t)}const M=new Set;let E=0;function D(){const t=g;do{for(;E<$.length;){const e=$[E];E++,y(e),tt(e.$$)}for(y(null),$.length=0,E=0;O.length;)O.pop()();for(let e=0;e<k.length;e+=1){const n=k[e];M.has(n)||(M.add(n),n())}k.length=0}while($.length);for(;P.length;)P.pop()();j=!1,M.clear(),y(t)}function tt(t){if(t.fragment!==null){t.update(),h(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const et=new Set;function nt(t,e){t&&t.i&&(et.delete(t),t.i(e))}function ot(t,e,n,o){const{fragment:c,on_mount:u,on_destroy:s,after_update:i}=t.$$;c&&c.m(e,n),o||T(()=>{const l=u.map(N).filter(I);s?s.push(...l):h(l),t.$$.on_mount=[]}),i.forEach(T)}function ct(t,e){const n=t.$$;n.fragment!==null&&(h(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function rt(t,e){t.$$.dirty[0]===-1&&($.push(t),Z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(t,e,n,o,c,u,s,i=[-1]){const l=g;y(t);const r=t.$$={fragment:null,ctx:null,props:u,update:f,not_equal:c,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:S(),dirty:i,skip_bound:!1,root:e.target||l.$$.root};s&&s(r.root);let a=!1;if(r.ctx=n?n(t,e.props||{},(d,z,...F)=>{const H=F.length?F[0]:z;return r.ctx&&c(r.ctx[d],r.ctx[d]=H)&&(!r.skip_bound&&r.bound[d]&&r.bound[d](H),a&&rt(t,d)),z}):[],r.update(),a=!0,h(r.before_update),r.fragment=o?o(r.ctx):!1,e.target){if(e.hydrate){const d=U(e.target);r.fragment&&r.fragment.l(d),d.forEach(b)}else r.fragment&&r.fragment.c();e.intro&&nt(t.$$.fragment),ot(t,e.target,e.anchor,e.customElement),D()}y(l)}class R{$destroy(){ct(this,1),this.$destroy=f}$on(e,n){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}$set(e){this.$$set&&!q(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function st(t){let e,n,o,c,u,s,i,l;return{c(){e=x("button"),n=p("count is "),o=p(t[1]),c=p(t[0]),u=Q(),s=x("button"),s.textContent="\u89E6\u53D1\u7236\u7EC4\u4EF6\u65B9\u6CD5",L(e,"class","bg-black text-white")},m(r,a){v(r,e,a),m(e,n),m(e,o),m(e,c),v(r,u,a),v(r,s,a),i||(l=[w(e,"click",t[2]),w(s,"click",t[3])],i=!0)},p(r,[a]){a&2&&C(o,r[1]),a&1&&C(c,r[0])},i:f,o:f,d(r){r&&b(e),r&&b(u),r&&b(s),i=!1,h(l)}}}function ut(t,e,n){const o=X();let{content:c="hhh "}=e,u=0;const s=()=>{n(1,u+=1)},i=()=>{console.log("children"),o("changeContentParent",{val:"children"})};return t.$$set=l=>{"content"in l&&n(0,c=l.content)},[c,u,s,i]}class it extends R{constructor(e){super(),B(this,e,ut,st,A,{content:0})}}const _t="";function lt(t){G(t,"svelte-dpmtep",".btn.svelte-dpmtep{border:8px solid #35eb9a}")}function ft(t){let e,n,o,c,u;return{c(){e=x("button"),n=p("count is "),o=p(t[0]),L(e,"class","btn bg-red text-white svelte-dpmtep")},m(s,i){v(s,e,i),m(e,n),m(e,o),c||(u=w(e,"click",t[1]),c=!0)},p(s,[i]){i&1&&C(o,s[0])},i:f,o:f,d(s){s&&b(e),c=!1,u()}}}function at(t,e,n){let o=0;return[o,()=>{n(0,o+=2)}]}class dt extends R{constructor(e){super(),B(this,e,at,ft,A,{},lt)}}_.Counter=it,_.Counter2=dt,Object.defineProperties(_,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});