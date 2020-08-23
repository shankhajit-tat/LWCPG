import { LightningElement } from 'lwc';

export default class EventBubbleParentExample extends LightningElement {
    handleNotify(event){
        console.log('inside handleNotify at EventBubbleParentExample ');
    }
    handleNotifyDomParent(event){
        console.log('inside handleNotifyDomParent at EventBubbleParentExample ');
    }
}