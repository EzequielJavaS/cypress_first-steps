/// <reference types="cypress" />

describe('Test NuevaCuenta Component', () => {
    it('Validation and alerts', ()=>{

        cy.visit('/nueva-cuenta'); //probamos visitar página

        cy.get('[data-cy=submit-nueva-cuenta]').click(); //Simulamos un click en este elemento

        cy.get('[data-cy=alerta]')
            .should('exist') //Cuando simulo el click con los caampos vacíos, debe de existir esta alerta.
            .invoke('text') //Invocamos el texto de la alerta.
            .should('equal', 'Todos los campos son obligatorios'); //Lo checkeamos que sea el texto correcto

        cy.get('[data-cy=alerta]')
            .should('have.class', 'alerta-error') //Comprobamos la clase del elemento.  
    });

    //LLENADO DE FORMULARIOS
    it('Escritura de formularios', ()=>{
        cy.get('[data-cy=nombre-input]').type('Ezequiel'); //Estoy simulando la escritura de Ezequiel en el input.
        cy.get('[data-cy=email-input]').type('Ezespejo@gmail.com'); 
        cy.get('[data-cy=password-input]').type('123'); //Simulo una introducción de password errónea para que salte alerta
        cy.get('[data-cy=repPass-input]').type('123');

        cy.get('[data-cy=submit-nueva-cuenta]').click(); //Simulo click en botón "Registrarme".

        cy.get('[data-cy=alerta]')
            .should('exist') //Cuando simulo el click con los password<6 , debe de existir esta alerta.
            .invoke('text') //Invocamos el texto de la alerta.
            .should('equal', 'El password debe ser de al menos 6 caracteres'); //Lo checkeamos
    })

    it('Writins diferents pasword', ()=>{
        cy.get('[data-cy=password-input]').clear().type('123456'); //.clear() Hace que se borre el campo y lo vuelve a escribir.
        cy.get('[data-cy=repPass-input]').clear().type('123458');
        cy.get('[data-cy=submit-nueva-cuenta]').click(); //Simulamos un click en este elemento
        //Control de mensaje de respuesta
        cy.get('[data-cy=alerta]')
            .should('exist') //Cuando simulo el click con los password<6 , debe de existir esta alerta.
            .invoke('text') //Invocamos el texto de la alerta.
            .should('equal', 'Los passwords no son iguales'); //Lo checkeamos

    });

    it('Writins equals password', ()=>{
        cy.get('[data-cy=repPass-input]').clear().type('123456');
        cy.get('[data-cy=submit-nueva-cuenta]').click(); //Simulamos un click en este elemento
    });

    it('Open ListadoTareas', ()=>{
        cy.get('[data-cy=selecciona]')
            .should('exist')
            .invoke('text')
            .should('equal', 'Selecciona un proyecto');
    });

    it('Close session', ()=>{
        cy.get('[data-cy=cerrar-sesion]').click();
    });

    it

    //En este punto está cerrada la sesión. Hay que volver a abrirla para seguir coprobando.
    //Comprobamos que detecte que el usuaro existe intentando dar de alta un usuaro ya existente.
    //Podemos verificar el texto de alerta como anteriormente.



})
