(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/index.js
  var require_index = __commonJS({
    "src/index.js"(exports) {
      (function(global) {
        const CryptoPaySDK = {
          init: function(options) {
            if (!options || !options.apiKey) {
              console.error("CryptoPaySDK Error: API key is required to initialize the SDK.");
              return;
            }
            console.log("CryptoPaySDK initialized with options:", options);
            this.options = options;
            this.apiKey = options.apiKey;
            this.addCryptoButton();
          },
          // Example async validation method
          // validateApiKey: async function () {
          //   try {
          //     const res = await fetch("https://your-server.com/validate", {
          //       method: "POST",
          //       headers: { "Content-Type": "application/json" },
          //       body: JSON.stringify({ apiKey: this.apiKey })
          //     });
          //     const data = await res.json();
          //     return data.valid;
          //   } catch (error) {
          //     console.error("CryptoPaySDK Error: API validation failed.", error);
          //     return false;
          //   }
          // },
          addCryptoButton: function() {
            const btn = document.createElement("button");
            btn.innerText = "Pay with Crypto";
            btn.style.cssText = `
        background-color: #1e1e1e;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
        margin-top: 20px;
      `;
            btn.onclick = () => this.openPaymentModal();
            const target = document.querySelector("form[action*='checkout'], .checkout-button");
            if (target) {
              target.parentNode.insertBefore(btn, target.nextSibling);
            } else {
              document.body.appendChild(btn);
            }
          },
          openPaymentModal: function() {
            alert("Here we will open the crypto payment modal.");
          }
        };
        global.CryptoPaySDK = CryptoPaySDK;
      })(typeof window !== "undefined" ? window : exports);
    }
  });
  require_index();
})();
