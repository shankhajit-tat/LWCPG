import { LightningElement } from 'lwc';

export default class SlotChangeExample extends LightningElement {
    addOneMore = false;
    addMore(){
        this.addOneMore = !this.addOneMore;
    }
}