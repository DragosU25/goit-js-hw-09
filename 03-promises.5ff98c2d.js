!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequire24a9;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequire24a9=r);var i=r("ejkSG"),a=document.querySelector(".form");function u(n,t){var o=Math.random()>.3;new Promise((function(e,r){setTimeout((function(){o?e("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms")):r("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}),t)})).then((function(n){e(i).Notify.success(n)})).catch((function(n){e(i).Notify.failure(n)}))}a.addEventListener("submit",(function(e){e.preventDefault();for(var n=parseInt(a.elements.delay.value),t=parseInt(a.elements.amount.value),o=parseInt(a.elements.step.value),r=0;r<t;r++){u(r+1,n+r*o)}}))}();
//# sourceMappingURL=03-promises.5ff98c2d.js.map