/// <reference types="cypress" />

describe('Test NuevaCuenta Component', () => {
    it('Validation and alerts', ()=>{

        cy.visit('/nueva-cuenta'); //probamos visitar página

        cy.get('[data-cy=submit-nueva-cuenta]').click(); //Simulamos un click en este elemento

        cy.get('[data-cy=alarta]')
            .should('exist') //Cuando simulo el click con los capmpos cacíos, debe de existir esta alerta.
            .invoke('text')
            .should('equal', 'Todos los campos son obligatorios')
    });

})
