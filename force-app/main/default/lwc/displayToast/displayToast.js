import { LightningElement, track } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class DisplayToast extends LightningElement {
    @track msg;
    @track variant;
    title = 'Notification';
    variant = 'success';
    variantOptions = [
        {label : 'error', value : 'error'},
        {label : 'warning', value : 'warning'},
        {label : 'success', value : 'success'},
        {label : 'info', value : 'info'}
    ];
    updateVariant(event){
        this.variant = event.target.value;
    }
    trackMessage(event){
        this.msg = event.target.value;
    }
    doReset(){
        this.msg = '';
        this.variant = 'success';
    }
    showToast(){
        const evt = new ShowToastEvent({
            title : this.title,
            message : this.msg,
            variant : this.variant
        });
        this.dispatchEvent(evt);
    }
}