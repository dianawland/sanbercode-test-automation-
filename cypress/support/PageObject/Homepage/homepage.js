class homePage {
  goToHomePage() {
    cy.visit("https://demoblaze.com/index.html");
  }

  clickSignUpMenu() {
    cy.xpath('//a[@id="signin2"]').click({ timeout: 5000 });
  }
}

module.exports = new homePage();
// agar bisa diakses di file lainnya atau kelas lainnya //

// export di file ini //
