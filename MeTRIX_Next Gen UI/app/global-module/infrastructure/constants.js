"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../../environment");
var Constants = (function () {
    function Constants() {
    }
    return Constants;
}());
Constants.uiRoutes = {
    login: 'login',
    resetpassword: 'resetpassword',
    shop: 'shop',
    cart: 'cart',
    shopresult: 'shopresult',
    noncatalog: 'noncatalog',
    checkout: 'checkout',
    pendingcheckout: 'pendingcheckout'
};
Constants.businessExceptions = {
    SessionExpired: "SessionExpired",
    SessionKilled: "SessionKilled",
    ErrorCode: "ErrorCode",
    IsIntegratedCart: "IsIntegratedCart",
    MessageCode: "MessageCode"
};
Constants.webApis = {
    getSharedData: environment_1.Environment.apiUrl + 'account/getUserData',
    getConfigureNewProjectData: environment_1.Environment.apiUrl + 'configureProject'
};
Constants.queryString = {
    SessionExpired: "SessionExpired=true"
};
Constants.sessionStorageKeys = {
    sessionId: "sessionId"
};
Constants.cookies = {
    sessionId: "SessionId",
    apiContext: "apiContext"
};
exports.Constants = Constants;
//# sourceMappingURL=constants.js.map