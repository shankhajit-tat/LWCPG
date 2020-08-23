import { LightningElement } from 'lwc';

export default class Form extends LightningElement {
    myValue = '';
    handleValueChange(evt){
        let val = evt.target.value;
        val = val.toUpperCase().trim();
        evt.target.value = val;
        this.myValue = val;
    }
}