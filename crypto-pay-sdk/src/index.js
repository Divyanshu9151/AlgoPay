(function (global) {
  const CryptoPaySDK = {
    init: function (options) {
      if (!options || !options.apiKey) {
        console.error("CryptoPaySDK Error: API key is required to initialize the SDK.");
        return;
      }

      console.log("CryptoPaySDK initialized with options:", options);
      this.options = options;
      this.apiKey = options.apiKey;

      // Optional: Validate API key with your server
      // this.validateApiKey().then(isValid => {
      //   if (isValid) {
      //     this.addCryptoButton();
      //   } else {
      //     console.error("CryptoPaySDK Error: Invalid API key.");
      //   }
      // });

      this.addCryptoButton();
    },

    addCryptoButton: function () {
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

    openPaymentModal: function () {
      alert("Here we will open the crypto payment modal.");
    }
  };

  global.CryptoPaySDK = CryptoPaySDK;
})(typeof window !== "undefined" ? window : this);
