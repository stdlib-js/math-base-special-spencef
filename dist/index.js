"use strict";var o=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var p=o(function(I,s){
var a=require('@stdlib/number-float64-base-to-float32/dist');function O(r){return r===0?1:a(1+a(r*a(3.2977135181427+a(r*a(4.25697135925293+a(r*a(2.711498498916626+a(r*a(.8796913027763367+a(r*a(.13384763896465302+a(r*a(.007315890397876501+a(r*4651285780710168e-20))))))))))))))}s.exports=O
});var q=o(function(L,c){
var i=require('@stdlib/number-float64-base-to-float32/dist');function A(r){return r===0?1:i(1+i(r*i(3.5477135181427+i(r*i(5.0327887535095215+i(r*i(3.638005256652832+i(r*i(1.4117259979248047+i(r*i(.28297486901283264+i(r*i(.025404376909136772+i(r*.0006909904768690467))))))))))))))}c.exports=A
});var N=o(function(P,F){
var E=require('@stdlib/math-base-assert-is-nanf/dist'),l=require('@stdlib/math-base-special-lnf/dist'),e=require('@stdlib/number-float64-base-to-float32/dist'),T=p(),g=q(),y=e(1.6449340668482264),m=e(0),w=e(.5),v=e(1);function z(r){var t,u,f,n;return r=e(r),E(r)||r<0?NaN:r===1?m:r===0?y:(t=0,r>2&&(r=e(v/r),t|=2),r>1.5?(u=e(e(v/r)-v),t|=2):r<.5?(u=e(-r),t|=1):u=e(r-v),f=e(-u*e(T(u)/g(u))),t&1&&(f=e(e(y-e(l(r)*l(v-r)))-f)),t&2&&(n=l(r),f=e(-e(e(w*e(n*n))+f))),f)}F.exports=z
});var B=N();module.exports=B;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
