/// <reference types="cypress" />

describe('Test Login component', ()=>{
    it('Verificacion pantalla de inicio', ()=>{
        cy.visit('/');
    });

    it('Verifier content', ()=>{
        cy.contains('Iniciar Sesión');
    });

    it('Verifier content tag', ()=>{
        cy.get('[data-cy=title]')
            .invoke('text')
            .should('equal', 'Iniciar Sesión');
    });

    it('Verifier form exist', ()=>{
        cy.get('[data-cy="form"]').should('exist');
    });

    it('Verifier button and text  button', ()=>{
        cy.get('[data-cy="submit-login"]')
            .should('exist')
            .should('have.value', 'Iniciar Sesión')
            .and('have.class', 'btn');
    });

    it('Verifier link Obtener Cuenta', ()=>{
        cy.get('[data-cy="link-NuevaCuenta"]')
            .should('have.attr', 'href')
            .should('eq', '/nueva-cuenta');
        
        cy.get('[data-cy="link-NuevaCuenta"]')
            .should('exist')
            .should('have.prop', 'tagName')
            .should('eq', 'A')  
    });

    it('Verifier link to  Nueva Cuenta', ()=>{
        cy.visit('/nueva-cuenta');
    });

    it('Back to login', ()=>{
        cy.get('[data-cy=backToLogin]').click();
    });

    it('Check text Campor Obligatorios',()=>{
        cy.get('[data-cy=submit-login]').click(); //Simulamos un click en este elemento

        cy.get('[data-cy=alerta]')
            .should('exist') //Cuando simulo el click con los caampos vacíos, debe de existir esta alerta.
            .invoke('text') //Invocamos el texto de la alerta.
            .should('equal', 'Todos los campos son obligatorios'); //Lo checkeamos que sea el texto correcto
    });



    

    

});