import { LightningElement } from 'lwc';

export default class EventHandlingChild extends LightningElement {
    constructor(){
        super();
        /**
         * event handler with in shadowdom returns actual component name as event target
         */
        this.template.addEventListener('click',evt => {
            console.log('within template event source=>'+evt.target.nodeName);
        });
        /**
         * event handler on this returns component name as event target
         */
        this.addEventListener('click',evt => {
            console.log('within EventHandlingChild event source=>'+evt.target.nodeName);
        });
    }
}