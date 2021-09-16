import Page from './page';

class LoginPage extends Page {
    open() {
        return super.open('/')
    }

    get btnLogin(){
        const btnLogin = browser.$('button[type=submit]');
        return btnLogin;
    }

    emailError() {return $('.ng-tns-c93-0[data-qa=div-error]')}

    passwordError() {return $('.ng-tns-c93-1[data-qa=div-error]')}



}
export default new LoginPage();