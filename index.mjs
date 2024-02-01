// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";var n=[701,301,132,57,23,10,4,1],s=n.length;function i(r,i,a,o,d,f){var m,l,v,h,j,p,u,b,g,c;if(r<=0||0===i)return a;for(i<0&&(o*=-1,f*=-1),m=o<0?(1-r)*o:0,l=f<0?(1-r)*f:0,b=0;b<s;b++)for(g=h=n[b];g<r;g++)if(j=a[m+g*o],!t(j)){for(p=d[l+g*f],v=e(j),c=g;c>=h&&(!((u=a[m+(c-h)*o])<=j)||v&&u===j);c-=h)a[m+c*o]=u,d[l+c*f]=d[l+(c-h)*f];a[m+c*o]=j,d[l+c*f]=p}return a}var a=n.length;function o(r,s,i,o,d,f,m,l){var v,h,j,p,u,b,g,c;if(r<=0||0===s)return i;for(s<0&&(d-=(r-1)*(o*=-1),l-=(r-1)*(m*=-1)),b=0;b<a;b++)for(g=h=n[b];g<r;g++)if(j=i[d+g*o],!t(j)){for(p=f[l+g*m],v=e(j),c=g;c>=h&&(!((u=i[d+(c-h)*o])<=j)||v&&u===j);c-=h)i[d+c*o]=u,f[l+c*m]=f[l+(c-h)*m];i[d+c*o]=j,f[l+c*m]=p}return i}r(i,"ndarray",o);export{i as default,o as ndarray};
//# sourceMappingURL=index.mjs.map
