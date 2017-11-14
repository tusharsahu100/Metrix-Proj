import { Environment } from '../../environment';


export class Constants {

    static uiRoutes = {
        login: 'login',
        resetpassword: 'resetpassword',
        shop: 'shop',
        cart: 'cart',
        shopresult: 'shopresult',
        noncatalog: 'noncatalog',
        checkout: 'checkout',
        pendingcheckout: 'pendingcheckout'
    };
    
    static businessExceptions = {
        SessionExpired: "SessionExpired",
        SessionKilled: "SessionKilled",
        ErrorCode: "ErrorCode",
        IsIntegratedCart: "IsIntegratedCart",
        MessageCode: "MessageCode"
    }

    static webApis = {
        getSharedData: Environment.apiUrl + 'account/getUserData',
        getConfigureNewProjectData: Environment.apiUrl + 'configureProject'
    };

    static queryString = {
        SessionExpired: "SessionExpired=true"
    }

    static sessionStorageKeys = {    
        sessionId: "sessionId"
    }
    
    static cookies =
    {   
        sessionId: "SessionId",
        apiContext: "apiContext"
    }
    
}