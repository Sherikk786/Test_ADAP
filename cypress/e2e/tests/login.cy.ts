import LoginPage from "../pages/LoginPage";

describe('OrangeHRM Login Tests', () => {

  beforeEach(() => {
    LoginPage.visit();
  });

  it('TC01 - Valid Login', () => {
    LoginPage.enterUsername('Admin');
    LoginPage.enterPassword('admin123');
    LoginPage.clickLogin();
    LoginPage.getDashboard().should('contain', 'Dashboard');
  });

  it('TC02 - Invalid Password', () => {
    LoginPage.enterUsername('Admin');
    LoginPage.enterPassword('wrong123');
    LoginPage.clickLogin();
    LoginPage.getErrorMessage().should('be.visible');
  });

  it('TC03 - Invalid Username', () => {
    LoginPage.enterUsername('WrongUser');
    LoginPage.enterPassword('admin123');
    LoginPage.clickLogin();
    LoginPage.getErrorMessage().should('be.visible');
  });

  it('TC04 - Empty Fields', () => {
    LoginPage.clickLogin();
    LoginPage.getErrorMessage().should('be.visible');
  });

  it('TC05 - Empty Username', () => {
    LoginPage.enterPassword('admin123');
    LoginPage.clickLogin();
    LoginPage.getErrorMessage().should('be.visible');
  });

  it('TC06 - Empty Password', () => {
    LoginPage.enterUsername('Admin');
    LoginPage.clickLogin();
    LoginPage.getErrorMessage().should('be.visible');
  });

  it('TC07 - Special Characters', () => {
    LoginPage.enterUsername('@#$%');
    LoginPage.enterPassword('@#$%');
    LoginPage.clickLogin();
    LoginPage.getErrorMessage().should('be.visible');
  });

  it('TC08 - Long Input', () => {
    LoginPage.enterUsername('a'.repeat(30));
    LoginPage.enterPassword('b'.repeat(30));
    LoginPage.clickLogin();
    LoginPage.getErrorMessage().should('be.visible');
  });

  it('TC09 - Case Sensitivity', () => {
    LoginPage.enterUsername('admin');
    LoginPage.enterPassword('admin123');
    LoginPage.clickLogin();
    LoginPage.getErrorMessage().should('be.visible');
  });

  it('TC10 - Direct Dashboard Access Without Login', () => {
    cy.visit('/web/index.php/dashboard/index');
    cy.url().should('include', 'auth/login');
  });

});