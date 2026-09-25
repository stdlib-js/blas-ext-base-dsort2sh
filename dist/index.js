"use strict";var k=function(f,c){return function(){try{return c||f((c={exports:{}}).exports,c),c.exports}catch(a){throw (c=0, a)}};};var t=k(function(U,O){O.exports=[701,301,132,57,23,10,4,1]});var S=k(function(V,P){
var w=require('@stdlib/math-base-assert-is-negative-zero/dist'),y=require('@stdlib/math-base-assert-is-nan/dist'),G=t(),z=G.length;function B(f,c,a,v,g,o){var e,q,h,u,n,j,l,p,i,r;if(f<=0||c===0)return a;for(c<0&&(v*=-1,o*=-1),v<0?e=(1-f)*v:e=0,o<0?q=(1-f)*o:q=0,p=0;p<z;p++)for(u=G[p],i=u;i<f;i++)if(n=a[e+i*v],!y(n)){for(j=g[q+i*o],h=w(n),r=i;r>=u&&(l=a[e+(r-u)*v],!(l<=n&&!(h&&l===n)));r-=u)a[e+r*v]=l,g[q+r*o]=g[q+(r-u)*o];a[e+r*v]=n,g[q+r*o]=j}return a}P.exports=B
});var s=k(function(W,b){
var C=require('@stdlib/math-base-assert-is-negative-zero/dist'),D=require('@stdlib/math-base-assert-is-nan/dist'),m=t(),F=m.length;function H(f,c,a,v,g,o,e,q){var h,u,n,j,l,p,i,r;if(f<=0||c===0)return a;for(c<0&&(v*=-1,e*=-1,g-=(f-1)*v,q-=(f-1)*e),p=0;p<F;p++)for(u=m[p],i=u;i<f;i++)if(n=a[g+i*v],!D(n)){for(j=o[q+i*e],h=C(n),r=i;r>=u&&(l=a[g+(r-u)*v],!(l<=n&&!(h&&l===n)));r-=u)a[g+r*v]=l,o[q+r*e]=o[q+(r-u)*e];a[g+r*v]=n,o[q+r*e]=j}return a}b.exports=H
});var _=k(function($,Z){
var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=S(),J=s();I(R,"ndarray",J);Z.exports=R
});var K=require("path").join,L=require('@stdlib/utils-try-require/dist'),M=require('@stdlib/assert-is-error/dist'),Q=_(),A,E=L(K(__dirname,"./native.js"));M(E)?A=Q:A=E;module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
