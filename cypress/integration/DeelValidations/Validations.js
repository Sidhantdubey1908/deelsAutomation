import {
    getDeelLoginPage, getDeelEmail, getDeelPassword, getDeelLoginButton, getContractorTax
    , getContractorName, getContractorJob, getContractorSeniority, getContractorScope, getState,
    btnNext, getCurrency, getRate, getPaymentFrequency, getContractCreated, getDeelMenu, btnCreateContract
} from "../DeelWebElemets/WebElements";

export const loginDeel = (email, password) => {

    cy.visit('/');
    getDeelLoginPage().contains('Log in').should('be.visible');
    getDeelEmail().type(email);
    getDeelPassword().type(password);
    getDeelLoginButton().click();
    cy.wait(5000);
    cy.get('#CybotCookiebotDialogBodyButtonAccept').click();
    cy.wait(1000);
    cy.get('h4').contains('Account activation').should('be.visible');

}

export const validateContractCreation = (name, taxCountry, Job, Seniority, Scope, State, Currency, Rate, Frequency) => {

    //cy.get('button div').contains('create a contract').click();
    getDeelMenu().click();
    btnCreateContract().contains('Create A Contract').click();
    cy.contains('Contract Type').should('be.visible');
    cy.get('h4').contains('Fixed Rate').should('be.visible');
    cy.get('h4').contains('Fixed Rate').click();
    cy.contains('Creating a fixed contract').should('be.visible');
    getContractorName().type(name);
    getContractorTax().click({ force: true });
    getContractorTax().type(''+taxCountry+'{enter}');
    getContractorJob().type(Job);
    getContractorSeniority().click();
    getContractorSeniority().type(''+Seniority+'{enter}');
    getContractorScope().type(Scope);
    getState().type(''+State+'{enter}');
    btnNext().click();
    getCurrency().type(''+Currency+'{enter}');
    getRate().type(Rate);
    getPaymentFrequency().type(''+Frequency+'{enter}');
    btnNext().click();
    cy.contains('Define first payment date').should('be.visible');
    btnNext().click();
    cy.contains('add a termination date').should('be.visible');
    cy.get('button div').contains('next').click();
    cy.contains('Contract compliance').should('be.visible');
    cy.get('button div').contains('create contract').click();
    getContractCreated().should('be.visible');

}