import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from 'contactCreator/node_modules/@salesforce/schema/Account';
import ACC_NAME_FLD from '@salesforce/schema/Account.Name';
import ACC_NUM_FLD from '@salesforce/schema/Account.AccountNumber';
import ACC_WEBSITE_FLD from '@salesforce/schema/Account.Website';

export default class LdsCreateRecord extends LightningElement {

    accountObject = ACCOUNT_OBJECT;
    myFields = [ACC_NAME_FLD,ACC_NUM_FLD,ACC_WEBSITE_FLD];

    nameField = ACC_NAME_FLD;
    websiteField = ACC_WEBSITE_FLD;

    handleAccountCreated(){
        console.log('Account created');
    }
    handleServerError(error){
        console.log('Error=>'+JSON.stringify(error));
    }
}