import { LightningElement } from 'lwc';

export default class CompositionBasicObject extends LightningElement {

    contact = {
        name: 'Amy Taylor',
        title: 'VP of Engineering',
    };
    primitiveString = 'Pass from parent';
}