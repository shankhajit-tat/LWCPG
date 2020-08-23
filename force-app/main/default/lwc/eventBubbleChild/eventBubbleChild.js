import { LightningElement } from 'lwc';

export default class EventBubbleChild extends LightningElement {
    bubbleInternalEvent(){
        this.template.querySelector('div.internal-event-container').dispatchEvent(new CustomEvent('notify',{ bubbles : true }));
    }
    handleNotifyInternal(){
        console.log('in side handleNotifyInternal in child event source');
    }
    bubbleSimpleEvent(event){
        try{
            event.preventDefault();
            this.dispatchEvent(new CustomEvent('notify'));
        }catch(err){
            debugger;
        }
    }
    bubbleInternalEventAncester(){
        this.dispatchEvent(new CustomEvent('notify', { bubbles: true }));
    }
}