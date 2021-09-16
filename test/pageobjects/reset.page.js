import Page from './page';

class ResetPage extends Page {

    openForgotPasswordPage() {
        return super.open('/forgot-password')
    }


    get inputEmail(){
        const inputEmail = browser.$('[placeholder="name@company.com"]');
        return inputEmail;
    }

    get btnResetPassword(){
        const btnResetPassword = browser.$('[data-qa="submit-button"]'); 
        return btnResetPassword;
    }


    errorMessage (){ 
        return $('.ng-tns-c83-6[data-qa=danger]');
    }



}
export default new ResetPage();