const {
  generateAccessToken,
  getWorkitem,
  getLineItems,
  getOrderByOrderID,
  getOrderNumberItems,
  currencyFetchDetails,
  paymentFetchDetails,
  getShippingAddress,
  apiKey,
} = require("./lib/api");

function logInvokeEntry(name, args) {
  console.log(`[backend] ${name} entered`, JSON.stringify(args || {}));
}

function logInvokeSuccess(name, response) {
  console.log(`[backend] ${name} response`, typeof response === "string" ? response : JSON.stringify(response));
}

function logInvokeError(name, error) {
  console.log(`[backend] ${name} failed`, error);
}

exports = {
  generateAccessTokenInvoke: async function (args) {
    logInvokeEntry("generateAccessTokenInvoke", args);
    apiKey.arguments = args;
    // console.log("arguments", args);
    try {
      let saveToken = await generateAccessToken();
      logInvokeSuccess("generateAccessTokenInvoke", saveToken);
      renderData(null, saveToken);
    } catch (error) {
      logInvokeError("generateAccessTokenInvoke", error);
      renderData(error);
    }
  },

  getWorkitemInvoke: async function (args) {
    logInvokeEntry("getWorkitemInvoke", args);
    console.log("===== getWorkitemInvoke called =====");
    console.log(args);
    apiKey.arguments = args;
    try {
      let getWork = await getWorkitem(args);
      console.log("getworkitemlog", getWork);

      logInvokeSuccess("getWorkitemInvoke", getWork);
      renderData(null, getWork);
    } catch (error) {
      logInvokeError("getWorkitemInvoke", error);
      renderData(error);
    }
  },

  getLineItemsInvoke: async function (args) {
    logInvokeEntry("getLineItemsInvoke", args);
    apiKey.arguments = args;
    try {
      let lineItem = await getLineItems();
      logInvokeSuccess("getLineItemsInvoke", lineItem);
      renderData(null, lineItem);
    } catch (error) {
      logInvokeError("getLineItemsInvoke", error);
      renderData(error);
    }
  },

  getOrderByOrderIDInvoke: async function (args) {
    logInvokeEntry("getOrderByOrderIDInvoke", args);
    apiKey.arguments = args;
    try {
      let orderDetails = await getOrderByOrderID();
      logInvokeSuccess("getOrderByOrderIDInvoke", orderDetails);
      renderData(null, orderDetails);
    } catch (error) {
      logInvokeError("getOrderByOrderIDInvoke", error);
      renderData(error);
    }
  },

  getOrderNumberItemsInvoke: async function (args) {
    logInvokeEntry("getOrderNumberItemsInvoke", args);
    apiKey.arguments = args;
    try {
      let orderNumber = await getOrderNumberItems();
      logInvokeSuccess("getOrderNumberItemsInvoke", orderNumber);
      renderData(null, orderNumber);
    } catch (error) {
      logInvokeError("getOrderNumberItemsInvoke", error);
      renderData(error);
    }
  },

  currencyFetchDetailsInvoke: async function (args) {
    logInvokeEntry("currencyFetchDetailsInvoke", args);
    apiKey.arguments = args;
    try {
      let currencyDet = await currencyFetchDetails();
      logInvokeSuccess("currencyFetchDetailsInvoke", currencyDet);
      renderData(null, currencyDet);
    } catch (error) {
      logInvokeError("currencyFetchDetailsInvoke", error);
      renderData(error);
    }
  },

  paymentFetchDetailsInvoke: async function (args) {
    logInvokeEntry("paymentFetchDetailsInvoke", args);
    apiKey.arguments = args;
    try {
      let paymentDet = await paymentFetchDetails();
      logInvokeSuccess("paymentFetchDetailsInvoke", paymentDet);
      renderData(null, paymentDet);
    } catch (error) {
      logInvokeError("paymentFetchDetailsInvoke", error);
      renderData(error);
    }
  },

  getShippingAddressInvoke: async function (args) {
    logInvokeEntry("getShippingAddressInvoke", args);
    apiKey.arguments = args;
    try {
      let shippingDet = await getShippingAddress();
      logInvokeSuccess("getShippingAddressInvoke", shippingDet);
      renderData(null, shippingDet);
    } catch (error) {
      logInvokeError("getShippingAddressInvoke", error);
      renderData(error);
    }
  },
};
