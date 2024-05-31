/// <reference types="Cypress"/>

describe('Teste de login', () => {
    it('Deve realizar login com sucesso', () => {
        cy.visit("https://www.saucedemo.com")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="title"]').should('contain', 'Products')
    });

    it.only('Tentativa de login informando usuario incorreto', () => {
        cy.visit("https://www.saucedemo.com")
        cy.get('[data-test="username"]').type("usuario_incorreto")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    });

    it('Tentativa de login informando senha incorreta', () => {
        cy.visit("https://www.saucedemo.com")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("senha_incorreta")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    });
});