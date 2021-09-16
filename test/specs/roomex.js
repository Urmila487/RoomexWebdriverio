import LoginPage from '../pageobjects/login.page'
import ResetPage from '../pageobjects/reset.page'
import resources from '../resources'

describe('Roomex', () => {
    it('Verify Login Page Email and Password Required Error message', async () => {
        LoginPage.open()  
        expect(browser).toHaveTitle(resources.homeTitle) //Verify title
        LoginPage.btnLogin.click() // Click Login Button
        expect(LoginPage.emailError).toBeDisplayed()   //Email and Password required Error 
        expect(LoginPage.emailError).toHaveTextContaining(resources.emailRequired)
        expect(LoginPage.passwordError).toBeDisplayed()
        expect(LoginPage.passwordError).toHaveTextContaining(resources.passwordRequired)
    });

    it('Verify ResetPassword Page Email does not exist ', async () => {
        ResetPage.openForgotPasswordPage()
        ResetPage.inputEmail.setValue('bob@example.com') //Set Email id in input box
        ResetPage.btnResetPassword.click()  // Click Reset Password button
        expect(ResetPage.errorMessage).toBeDisplayed // Check Email does not exist msg 
        expect(ResetPage.errorMessage).toHaveTextContaining(resources.emaildoesntexist)
    })
});