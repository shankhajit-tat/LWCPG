//lightning data table using Apex wiring
import { LightningElement, wire, track } from 'lwc';
import getContactListForDatatable from '@salesforce/apex/ContactController.getContactListForDatatable';
import updateContacts from '@salesforce/apex/ContactController.updateContacts';
import { updateRecord } from 'lightning/uiRecordApi';
import { refreshApex } from '@salesforce/apex';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import ID_FIELD from '@salesforce/schema/Contact.Id';

//lightning data table using getListUi (Beta) wire
import { getListUi } from 'lightning/uiListApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';

const COLS = [
    { label: 'First Name', fieldName: 'FirstName', editable: true },
    { label: 'Last Name', fieldName: 'LastName', editable: true },
    { label: 'Title', fieldName: 'Title' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Email', fieldName: 'Email', type: 'email' }
];
export default class LdsDataTable extends LightningElement {

    @track error;
    @track columns = COLS;
    @track draftValues = [];

    @wire(getContactListForDatatable)
    contacts;

    handleSave(event) {
        //debugger;
        try{
        if(event.detail.draftValues && event.detail.draftValues.length > 0){
            const updatedContacts = [ ...event.detail.draftValues ];
            updateContacts({contactlist : updatedContacts})
                .then(() => {
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Contact updated',
                            variant: 'success'
                        })
                    );
                    // Clear all draft values
                    this.draftValues = [];

                    // Display fresh data in the datatable
                    return refreshApex(this.contacts);
                }).catch(error => {
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Error creating record',
                            message: error.body.message,
                            variant: 'error'
                        })
                    );
                });
        }
        }catch(err){
            debugger;
        }
    }

    //lightning data table using getListUi (Beta) wire
    pageToken = 0;
    nextPageToken = null;
    previousPageToken = null;
    contactlists;
    error;
    records;
    @wire(getListUi, {
        listViewId: '00B2w000007PzyoEAC',
        pageSize: 10
    })listView({error, data}){
        debugger;
        if (data) {
            this.records = data.records.records;
            this.error = undefined;
            this.nextPageToken = data.records.nextPageToken;
            this.previousPageToken = data.records.previousPageToken;
        } else if (error) {
            this.error = error;
            this.records = undefined;
        }
    }
    
    

    handleNextPage(){
        this.pageToken = records.data.nextPageToken;
    }
    handlePreviousPage(){
        this.pageToken = records.data.previousPageToken;
        this.records = data.records.records;
    }
}