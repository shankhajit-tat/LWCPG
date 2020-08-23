import { LightningElement , api, wire} from 'lwc';
/**Wire adaptor to fetch data */
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import CONTACT_FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import CONTACT_SALUTATION_NAME_FIELD from '@salesforce/schema/Contact.Salutation';
import CONTACT_LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import CONTACT_OWNER_EMAIL_FIELD from '@salesforce/schema/Contact.Owner.Email';

export default class SimpleRecordForm extends LightningElement {
    @api recordId;
    @api objectApiName;
    
    fields = ['Name','AccountNumber','statlwc__CustomerPriority__c'];

    @api contactRecordId;
    customObjectName = CONTACT_OBJECT;

    /**Load the relevant field for custom rendering */
    @wire(getRecord,{ recordId : '$contactRecordId' , fields: [CONTACT_FIRST_NAME_FIELD,CONTACT_LAST_NAME_FIELD,CONTACT_SALUTATION_NAME_FIELD,CONTACT_OWNER_EMAIL_FIELD]})
    record;

    get firstName(){
        return this.record.data ? getFieldValue(this.record.data, CONTACT_FIRST_NAME_FIELD) : '';
    }
    get lastName(){
        return this.record.data ? getFieldValue(this.record.data, CONTACT_LAST_NAME_FIELD) : '';
    }
    get salutation(){
        return this.record.data ? getFieldValue(this.record.data, CONTACT_SALUTATION_NAME_FIELD) : '';
    }
    get ownerEmail(){
        return this.record.data ? getFieldValue(this.record.data, CONTACT_OWNER_EMAIL_FIELD) : '';
    }
}