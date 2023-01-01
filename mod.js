// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,l=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var c,f,_,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(i.call(r,e)||l.call(r,e)?(c=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=c):r[e]=t.value),_="get"in t,p="set"in t,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r};var c=e;var f=Number.NEGATIVE_INFINITY;function _(r){return 0===r&&1/r===f}function p(r){return r!=r}var b=[701,301,132,57,23,10,4,1],v=b.length;function y(r,e,t,n,o,a){var u,i,l,c,f,y,d,s,g,j;if(r<=0||0===e)return t;for(e<0&&(n*=-1,a*=-1),u=n<0?(1-r)*n:0,i=a<0?(1-r)*a:0,s=0;s<v;s++)for(g=c=b[s];g<r;g++)if(!p(f=t[u+g*n])){for(y=o[i+g*a],l=_(f),j=g;j>=c&&(!((d=t[u+(j-c)*n])<=f)||l&&d===f);j-=c)t[u+j*n]=d,o[i+j*a]=o[i+(j-c)*a];t[u+j*n]=f,o[i+j*a]=y}return t}var d=b.length;function s(r,e,t,n,o,a,u,i){var l,c,f,v,y,s,g,j;if(r<=0||0===e)return t;for(e<0&&(o-=(r-1)*(n*=-1),i-=(r-1)*(u*=-1)),s=0;s<d;s++)for(g=c=b[s];g<r;g++)if(!p(f=t[o+g*n])){for(v=a[i+g*u],l=_(f),j=g;j>=c&&(!((y=t[o+(j-c)*n])<=f)||l&&y===f);j-=c)t[o+j*n]=y,a[i+j*u]=a[i+(j-c)*u];t[o+j*n]=f,a[i+j*u]=v}return t}c(y,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:s});export{y as default,s as ndarray};
//# sourceMappingURL=mod.js.map
