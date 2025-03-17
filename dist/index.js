"use strict";var k=function(f,c){return function(){return c||f((c={exports:{}}).exports,c),c.exports}};var t=k(function(U,O){O.exports=[701,301,132,57,23,10,4,1]});var S=k(function(V,P){
var w=require('@stdlib/math-base-assert-is-negative-zero/dist'),y=require('@stdlib/math-base-assert-is-nan/dist'),G=t(),z=G.length;function B(f,c,v,a,g,o){var e,q,h,u,n,j,l,p,i,r;if(f<=0||c===0)return v;for(c<0&&(a*=-1,o*=-1),a<0?e=(1-f)*a:e=0,o<0?q=(1-f)*o:q=0,p=0;p<z;p++)for(u=G[p],i=u;i<f;i++)if(n=v[e+i*a],!y(n)){for(j=g[q+i*o],h=w(n),r=i;r>=u&&(l=v[e+(r-u)*a],!(l<=n&&!(h&&l===n)));r-=u)v[e+r*a]=l,g[q+r*o]=g[q+(r-u)*o];v[e+r*a]=n,g[q+r*o]=j}return v}P.exports=B
});var s=k(function(W,b){
var C=require('@stdlib/math-base-assert-is-negative-zero/dist'),D=require('@stdlib/math-base-assert-is-nan/dist'),m=t(),F=m.length;function H(f,c,v,a,g,o,e,q){var h,u,n,j,l,p,i,r;if(f<=0||c===0)return v;for(c<0&&(a*=-1,e*=-1,g-=(f-1)*a,q-=(f-1)*e),p=0;p<F;p++)for(u=m[p],i=u;i<f;i++)if(n=v[g+i*a],!D(n)){for(j=o[q+i*e],h=C(n),r=i;r>=u&&(l=v[g+(r-u)*a],!(l<=n&&!(h&&l===n)));r-=u)v[g+r*a]=l,o[q+r*e]=o[q+(r-u)*e];v[g+r*a]=n,o[q+r*e]=j}return v}b.exports=H
});var _=k(function($,Z){
var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=S(),J=s();I(R,"ndarray",J);Z.exports=R
});var K=require("path").join,L=require('@stdlib/utils-try-require/dist'),M=require('@stdlib/assert-is-error/dist'),Q=_(),A,E=L(K(__dirname,"./native.js"));M(E)?A=Q:A=E;module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
