/// <reference types="cypress" />


describe('Test generales', () => {
    it('Search with results', ()=>{
        cy.visit('http://automationpractice.com/index.php');
        cy.get('#search_query_top').type('dress'); //Simulo la escritura de 'dress' en el elemnto
        cy.get('#searchbox > .btn').click(); //Simulo un click en la lupa de la búsqueda.
        cy.get('.lighter').contains('"dress"'); //Compruebo que el elemeto contiene ese texto.
    })
})
