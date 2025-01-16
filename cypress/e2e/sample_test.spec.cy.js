const homePage = require("../support/PageObject/Homepage/homepage");
const signUpPage = require("../support/PageObject/signUpPage /signUpPage");

//import di file ini //

describe("Signup", () => {
  it("With Valid Data", () => {
    homePage.goToHomePage();
    homePage.clickSignUpMenu();

    //     //Go to url
    //     //Open the sign up
    //     //Input Username
    //     //Input Password
    //     //Verify the user registered succesfully
    //     cy.visit("https://demoblaze.com/index.html");
    //     cy.xpath('//*[@id="signin2"]').click();
    //     cy.wait(5000);
    //     cy.xpath('//*[@id="sign-username"]').type["diana12345@testcom"];
    //     cy.wait(5000); // explicit wait secara terang-terangan
    //     cy.xpath('//*[@id="sign-password"]').type["12345"];
    //     cy.wait(5000);
    //     cy.xpath('//*[@id="signInModal"]/div/div/div[3]/button[2]');

    signUpPage.inputUsername();
    signUpPage.inputPassword();
    signUpPage.clickRegisterButton();
  });
});
