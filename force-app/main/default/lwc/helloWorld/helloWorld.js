import { LightningElement, api } from 'lwc';

export default class HelloWorld extends LightningElement {
    firstName = '1';
    lastName = '';

    handleFirstName(event){
        debugger;
        this.firstName = event.target.value; 
    }
    handleLastName(event){
        debugger;
        this.lastName = event.target.value;
    }
    get fullName() {
        debugger;
        const fullnamestring =  `${this.firstName} ${this.lastName}`;
        // or const fullnamestring = ''+this.firstName+' '+this.lastName;
        return fullnamestring.toUpperCase();
    }
}