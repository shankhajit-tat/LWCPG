import { LightningElement } from 'lwc';
import WELCOME_MESSAGE from '@salesforce/label/c.Welcome_Message'

export default class WelcomeWindow extends LightningElement {
    welcomeMessage = 'Welcome to LWC Traning and explorations';
    welcomeMessageLabel = WELCOME_MESSAGE;
}