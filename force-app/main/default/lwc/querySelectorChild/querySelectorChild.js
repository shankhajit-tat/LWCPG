import { LightningElement } from 'lwc';

export default class QuerySelectorChild extends LightningElement {
    renderedCallback(){
        var cell;
        console.log(this.template.querySelector('div'));
        console.log(this.template.querySelector('span')); 
        console.log(this.template.querySelectorAll('div')); 
    }
}