export class ForgotPasswordModel {
    emailAddress: string;
    password: string;
    isInError: boolean;
    errorCode: string;
    errorMessage: string;
    isAuthInitiated: boolean;
}