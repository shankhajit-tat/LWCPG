import { LightningElement, api, track } from 'lwc';

export default class Volume extends LightningElement {
    @api
    volume;
    
    _secondaryEmail = '';

    @api
    get secondaryEmail(){
        return this._secondaryEmail;
    }
    set secondaryEmail(val){
        this._secondaryEmail  = val;
    }
}