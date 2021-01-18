import { LightningElement } from 'lwc';

export default class HelloExpressions extends LightningElement {
    firstName = '';
    lastName = '';

    handleChange(event){
        var eventSource = event.target.name;
        if(eventSource === 'firstName'){
            this.firstName = event.target.value;
        }else if(eventSource === 'lastName'){
            this.lastName = event.target.value;
        }
    }

    get upperCaseFullName(){
        return `${this.firstName} ${this.lastName}`.toUpperCase();
    }
}