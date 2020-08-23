import { LightningElement } from 'lwc';

export default class EventHandlingParent1 extends LightningElement {
    text = 'Hi';
    handleClick(){
        if(this.text === 'Hi'){
            this.text = 'Hi Clicked!';
        }else{
            this.text = 'Hi';
        }
    }
}