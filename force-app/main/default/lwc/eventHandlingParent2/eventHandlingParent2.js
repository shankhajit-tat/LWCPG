import { LightningElement } from 'lwc';

export default class EventHandlingParent2 extends LightningElement {
    text = 'Hi'
    constructor(){
        super();
        this.template.addEventListener('click',this.handleClick);
    }
    handleClick = evt => {
        if(this.text === 'Hi'){
            this.text = 'You clicked '+evt.target.nodeName;
        /**
         * event handler on parent returns child component name as event target
         */
        }else{
            this.text = 'Hi';
        }
    };
}