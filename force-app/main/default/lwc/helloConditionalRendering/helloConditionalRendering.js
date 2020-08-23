import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    isTrueTemplate = false;
    toggletemplate(){
        this.isTrueTemplate = !this.isTrueTemplate;
    }
}