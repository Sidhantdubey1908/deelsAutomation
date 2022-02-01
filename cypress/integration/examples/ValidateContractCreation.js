/// <reference types ='Cypress'/>

import {loginDeel, validateContractCreation} from "../DeelValidations/Validations"

describe('Validate Contract Creation', ()=>{


    it('Verify if User is able to create Contract successully', ()=>{

        loginDeel('sidhantdubey08@gmail.com','Mdnov2021#');
        validateContractCreation('Sidhant Dubey', 'United States','QA Automation','Senior (Individual Contributor Level 3)','QA Automation',
        'Colorado', 'GBP - British Pound', '1000','Weekly');
      
    })


})


