import { LightningElement } from 'lwc';

export default class HelloForEach extends LightningElement {
    contacts = [
        {
            Id: 111,
            Name: 'Amy Taylor',
            Title: 'VP of Engineering',
        },
        {
            Id: 112,
            Name: 'Michael Jones',
            Title: 'VP of Sales',
        },
        {
            Id: 113,
            Name: 'Jennifer Wu',
            Title: 'CEO',
        }
    ];
}