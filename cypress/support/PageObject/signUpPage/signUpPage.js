class signUpPage {
  inputUsername() {
    cy.xpath('//*[@id="sign-username"]').type["diana12345@testcom"];
    cy.wait(5000); // explicit wait secara terang-terangan
  }

  inputPassword() {
    cy.xpath('//*[@id="sign-username"]').type["diana12345@testcom"];
    cy.wait(5000);
  }

  clickRegisterButton() {
    cy.wait(5000);
    cy.xpath('//*[@id="signInModal"]/div/div/div[3]/button[2]');
  }

  verifyRegistrationSuccess() {
    cy.on("window:alert", (a) => {
      expect(a).to.eq("Sign up successful.");
    });
    cy.wait(5000);
  }
}

module.exports = new signUpPage();
