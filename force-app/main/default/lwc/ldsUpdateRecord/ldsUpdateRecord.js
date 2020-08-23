import { LightningElement, track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { updateRecord } from 'lightning/uiRecordApi';
import { refreshApex } from '@salesforce/apex';
import getSingleContact from '@salesforce/apex/ContactController.getSingleContact';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import ID_FIELD from '@salesforce/schema/Contact.Id';
import LAST_MODIFIED_DATE_FIELD from '@salesforce/schema/Contact.LastModifiedDate';

export default class LdsUpdateRecord extends LightningElement {
    disabled = false;
    @track error;

    @wire(getSingleContact)
    contact;

    handleChange(event) {
         // Display field-level errors and disable button if a name field is empty.
        if (!event.target.value) {
            event.target.reportValidity();
            this.disabled = true;
        }
        else {
            this.disabled = false;
        }
    }

    updateContact() {
        debugger;
        //Custom validation to exclude "test" in firstname and last name
        [...this.template.querySelectorAll('lightning-input')]
            .forEach(input => {
                if(input.value && input.value.toUpperCase().includes('TEST')){
                    input.setCustomValidity('You can not have word \'test\'');
                }else{
                    input.setCustomValidity('');
                }
            });
        const allValid = [...this.template.querySelectorAll('lightning-input')]
            .reduce((validSoFar, inputFields) => {
                inputFields.reportValidity();
                return validSoFar && inputFields.checkValidity();
            }, true);
        if (allValid) {
            // Create the recordInput object
            const fields = {};
            fields[ID_FIELD.fieldApiName] = this.contact.data.Id;
            fields[FIRSTNAME_FIELD.fieldApiName] = this.template.querySelector("[data-field='FirstName']").value;
            fields[LASTNAME_FIELD.fieldApiName] = this.template.querySelector("[data-field='LastName']").value;

            const recordInput = { fields };

            updateRecord(recordInput , {'ifUnmodifiedSince' : this.contact.data.LastModifiedDate})
                .then(() => {
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Contact updated',
                            variant: 'success'
                        })
                    );
                    // Display fresh data in the form
                    return refreshApex(this.contact);
                })
                .catch(error => {
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Error creating record',
                            message: error.body.message,
                            variant: 'error'
                        })
                    );
                });
            }
        else {
            // The form is not valid
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Something is wrong',
                    message: 'Check your input and try again.',
                    variant: 'error'
                })
             );
        }
    }
}