import { LightningElement,api } from 'lwc';

export default class ContactTileObject extends LightningElement {
    @api contact;
    @api primitiveString;

    updateContactName() {
        this.contact.name = 'Jennifer Wu';
        console.log(this.contact.name);
    }
    updateContactField() {
        this.contact = { name: 'Anup Gupta', title: 'VP of Products' };
        console.log(this.contact);
    }
    updatePrimitive(){
        this.primitiveString = this.primitiveString+' Changed';
    }
}