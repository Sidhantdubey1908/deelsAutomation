export const getDeelLoginPage = () => {

    return cy.get('h1');

}

export const getDeelEmail = () => {

    return cy.get("input[name='email']");

}

export const getDeelPassword = () => {

    return cy.get("input[name='password']");

}

export const getDeelLoginButton = () => {

    return cy.get("button[type='submit']");

}

export const getDeelMenu = () => {

    return cy.get("button[class='button mt-4 mr-7']");

}

export const btnCreateContract = () => {

    return cy.get("div p");

}

export const getContractorName=()=>{

    return cy.get("input[name='name']");

}

export const getContractorTax=()=>{

    return cy.get("#react-select-2-input");

}

export const getContractorJob=()=>{

    return cy.get("input[name='jobTitle']");

}

export const getContractorSeniority=()=>{

    return cy.get("#react-select-3-input");

}

export const getContractorScope=()=>{

    return cy.get("textarea[name='scope']");

}

export const getState=()=>{

    return cy.get("#react-select-4-input");

}

export const btnNext=()=>{

    return cy.get("button[type='submit']");
}

export const getCurrency=()=>{

    return cy.get('#react-select-5-input');
}

export const getRate=()=>{

    return cy.get("input[name='rate']");

}

export const getPaymentFrequency=()=>{

    return cy.get("#react-select-6-input");

}

export const getContractCreated=()=>{

    return cy.contains('Waiting For Client Sign');

}






