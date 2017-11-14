﻿
export class Constants {
        
    static cookies =
    {
        sessionId: "SessionId"
    }

    static requestHeader =
    {
        authorization: "Authorization",
        sessionId: "SessionId",
        bearer: "Bearer",
        accept: "Accept",
        contentType: "Content-Type"
    }

    static apiToken = {
        refreshToken: "grant_type=refresh_token&client_id=web&refresh_token="
    }

    static contentType =
    {
        json: "application/json",
        formUrlEncoded: "application/x-www-form-urlencoded",
        multiPart: "multipart/form-data"
    }

    static queryString = {
        SessionExpired: "SessionExpired=true",
        SessionKilled: "SessionKilled=true",
        me: "?me"
    }

    static sessionStorageKeys = {
        username : 'userName',
        password : 'password',
        apiToken : "apiToken",
        isLoggedIn : "isLoggedIn",
        sessionId : "sessionId"
    }
    
    static localStorageKeys = {
        username : 'userName',
        password : 'password',
        isRemember : "isRemember"
    }
}