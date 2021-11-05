context("Search", () => {
  it("Can search your zip code on site", () => {
    cy.visit("http://localhost:3000/");
    cy.viewport(1440, 900);
    cy.intercept("GET", "81720050", {
      statusCode: 201,
      body: {
        complemento: "",
        bairro: "Xaxim",
        cidade: "Curitiba",
        logradouro: "Rua Osni Silveira",
        estado_info: "Parana",
        cep: 81720050,
        cidade_info: "Curitiba",
        estado: "PR",
      },
    });
    cy.get("input").type("81720050");
    cy.get("button").click();
    cy.contains("Estado");
    cy.contains("logradouro");
  });
});
