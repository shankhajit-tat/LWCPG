import { LightningElement, api } from 'lwc';
import { FlowAttributeChangeEvent, FlowNavigationNextEvent } from 'lightning/flowSupport';
import GroupEmail from '@salesforce/schema/CollaborationGroup.GroupEmail';

export default class FlowSimple extends LightningElement {
    @api
    accountId;
    @api
    firstName;
    @api
    lastName;
    @api 
    email;

    handleChange(event){

        let fieldDataId = event.target.getAttribute('data-id');
        
        switch(fieldDataId){
        case 'firstname':
            this.firstName = event.target.value;
            this.dispatchEvent(new FlowAttributeChangeEvent('firstName', this.firstName));
            break;
        case 'lastname':
            this.lastName = event.target.value;
            this.dispatchEvent(new FlowAttributeChangeEvent('lastName', this.lastName));
            break;
        case 'email':
            this.email = event.target.value;
            this.dispatchEvent(new FlowAttributeChangeEvent('email', this.email));
            break;
        default : 
        }
    }
    validateAndProceed(){
        let inputList = this.template.querySelectorAll('lightning-input');
        let isValid;
        [...inputList].forEach(input => {
            if(input.value == undefined || input.value == '' || input.value == null)
                input.setCustomValidity('Manadatory Field');
            else
                input.setCustomValidity('');
        });
        isValid = [...this.template.querySelectorAll('lightning-input')].reduce((validsofar,input) => {
            input.reportValidity();
            return validsofar && input.checkValidity();
        },true);
        console.log('isValid=>'+isValid);
        if(isValid){
            // navigate to the next screen
            const navigateNextEvent = new FlowNavigationNextEvent();
            this.dispatchEvent(navigateNextEvent);
        }
    }
    @api
    validate(){
        debugger;
        if(this.accountId == '' || this.accountId == null){
            return { 
                isValid: false, 
                errorMessage: 'Account Id missing' 
             }; 
        }else{
            return {isValid: true};
        }
    }
}