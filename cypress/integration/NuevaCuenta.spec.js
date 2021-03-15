/// <reference types="cypress" />


describe('Test NuevaCuenta Component', () => {
    it('Validation and alerts', ()=>{

        cy.visit('/nueva-cuenta'); //probamos visitar página

        cy.get('[data-cy=submit-nueva-cuenta]').click(); //Simulamos un click en este elemento

        cy.get('[data-cy=alerta]')
            .should('exist') //Cuando simulo el click con los caampos vacíos, debe de existir esta alerta.
            .invoke('text') //Invocamos el texto de la alerta.
            .should('equal', 'Todos los campos son obligatorios'); //Lo checkeamos

            cy.get('[data-cy=alerta]')
                .should('have.class', 'alerta-error') //Comprobamos la clase del elemento.  
    });

    //LLENADO DE FORMULARIOS
    it('Escritura de formularios', ()=>{
        cy.get('[data-cy=nombre-input]').type('Ezequiel'); //Estoy simulando la escritura de Ezequiel en el input.
        cy.get('[data-cy=email-input]').type('ezespejo@gmail.com'); 
        cy.get('[data-cy=password-input]').type('123'); 
        cy.get('[data-cy=repPass-input]').type('123');

        cy.get('[data-cy=submit-nueva-cuenta]').click(); //Simulo click en botón "Registrarme".

        cy.get('[data-cy=alerta]')
            .should('exist') //Cuando simulo el click con los password<6 , debe de existir esta alerta.
            .invoke('text') //Invocamos el texto de la alerta.
            .should('equal', 'El password debe ser de al menos 6 caracteres'); //Lo checkeamos


        
    })

})
