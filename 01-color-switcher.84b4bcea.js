!function(){var e=document.querySelector("body"),t=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");t.addEventListener("click",(function(){a=setInterval((function(){return e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.disabled=!0,n.disabled=!1})),n.addEventListener("click",(function(){clearInterval(a),t.disabled=!1,n.disabled=!0}));var a=null}();
//# sourceMappingURL=01-color-switcher.84b4bcea.js.map