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


    get errorMessage (){ 
        const errorMessage = browser.$('rx-alert[type="danger"]');
        return errorMessage;
    }



}
export default new ResetPage();