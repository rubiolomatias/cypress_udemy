class AutheticationPage {
    getEmailAddressInput() {
        return cy.get('#email')
    }
 
    getPasswordInput() {
        return cy.get('#passwd')
    }
    
    getSignInButton() {
        return cy.get('#SubmitLogin')
    }
 
}
export default AutheticationPage;