!function(){var e=document.querySelector(".form");function n(e,n){var o=Math.random()>.3;return new Promise((function(t,i){setTimeout((function(){o?t({position:e,delay:n}):i({position:e,delay:n})}),n)}))}e.addEventListener("submit",(function(o){o.preventDefault();for(var t=Number(e.delay.value),i=1;i<=e.amount.value;i+=1)n(i,t).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),t+=Number(e.step.value)}))}();
//# sourceMappingURL=03-promises.cfe5ffc4.js.map