class LoginPage {

  visit() {
    cy.visit('/web/index.php/auth/login')
  }

  enterUsername(username: string) {
    cy.get('input[name="username"]').type(username)
  }

  enterPassword(password: string) {
    cy.get('input[name="password"]').type(password)
  }

  clickLogin() {
    cy.get('button[type="submit"]').click()
  }

  getErrorMessage() {
    return cy.get('.oxd-alert-content-text')
  }

  getDashboard() {
    return cy.get('.oxd-topbar-header-breadcrumb')
  }
}

export default new LoginPage();