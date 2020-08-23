import { LightningElement ,api } from 'lwc';
import ACC_NAME from '@salesforce/schema/Account.Name';
import ACC_PHONE from '@salesforce/schema/Account.Phone';
import ACC_NUMBER from '@salesforce/schema/Account.AccountNumber';
import ACC_WEBSITE from '@salesforce/schema/Account.Website';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class SimpleRecordEditForm extends LightningElement {
    @api recordId;
    @api objectApiName;

    fields = [ACC_NAME,ACC_PHONE,ACC_NUMBER,ACC_WEBSITE];

    handleReset(){
        this.template.querySelectorAll('lightning-input-field').forEach(field => { 
            field.reset();
        });
    }
    handleError(event){
        console.log(event.detail);
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Error creating record',
                message: event.detail.message,
                variant: 'error',
            }),
        );
        // use event.detail.output.fieldErrors for field error map
    }
    handleSubmit(event){
        console.log('called event.detail=>'+JSON.stringify(event.detail))
    }
    handleAccountCreated(event){
        console.log('Account record created. event.detail=>'+JSON.stringify(event.detail));
    }
}