import { LightningElement } from 'lwc';

export default class ForeachExample extends LightningElement {
    contacts = [
        {
            Id : '876976987987987',
            Name : 'Shankhajit Tat',
            Title : 'Developer'
        },
        {
            Id : '80982178928728798',
            Name : 'Manasi Pal',
            Title : 'Administrator'
        },
        {
            Id : '0989976987870990',
            Name : 'Abhishek Sadhak',
            Title : 'Manager'
        }
    ];
}