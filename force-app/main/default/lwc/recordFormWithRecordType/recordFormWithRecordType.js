import { LightningElement, wire, api } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import SOURCE_FIELD from '@salesforce/schema/Account.AccountSource';
export default class RecordFormWithRecordType extends LightningElement {
    
    objectApiName = ACCOUNT_OBJECT;
    recordId;

    fields = [NAME_FIELD, PHONE_FIELD, INDUSTRY_FIELD,SOURCE_FIELD];

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo;
    
    get recordTypeId() {
        const rtis = this.objectInfo.data.recordTypeInfos;
        return Object.keys(rtis).find(rti => rtis[rti].name === 'Special Account');
    }
}