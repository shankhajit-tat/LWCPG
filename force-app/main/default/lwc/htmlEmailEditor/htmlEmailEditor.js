import { LightningElement, api } from 'lwc';
export default class HtmlEmailEditor extends LightningElement {

    @api
    inputVariables;

    get senderName() {
        const param = this.inputVariables.find(({ name }) => name === 'senderName');
        return param && param.value;
    }

    get replyToEmail() {
        const param = this.inputVariables.find(({ name }) => name === 'replyToEmail');
        return param && param.value;
    }

    get recipientName() {
        const param = this.inputVariables.find(({ name }) => name === 'recipientName');
        return param && param.value;
    }

    get sendToEmail() {
        const param = this.inputVariables.find(({ name }) => name === 'sendToEmail');
        return param && param.value;
    }

    get subject() {
        const param = this.inputVariables.find(({ name }) => name === 'subject');
        return param && param.value;
    }

    get htmlBody() {
        const param = this.inputVariables.find(({ name }) => name === 'htmlBody');
        return param && param.value;
    }

    @api validate() {
        const validity = [];
        if (!this.isValidEmailAddress(this.sendToEmail)) {
            this.template.querySelector('lightning-input[data-key="SendToAddress"]').setCustomValidity('Invalid Email Address');
            validity.push({
                key: 'SendToAddress',
                errorString: 'You have entered an invalid email format.',
            });
        }else{
            this.template.querySelector('lightning-input[data-key="SendToAddress"]').setCustomValidity('');
        }
        this.template.querySelector('lightning-input[data-key="SendToAddress"]').reportValidity();
        if (!this.isValidEmailAddress(this.replyToEmail)) {
            this.template.querySelector('lightning-input[data-key="ReplyToAddress"]').setCustomValidity('Invalid Email Address');
            validity.push({
                key: 'ReplyToAddress',
                errorString: 'You have entered an invalid email format.',
            });
        }else{
            this.template.querySelector('lightning-input[data-key="ReplyToAddress"]').setCustomValidity('');
        }
        this.template.querySelector('lightning-input[data-key="ReplyToAddress"]').reportValidity();
    return validity;
    }

    isValidEmailAddress(email) {
        const emailRegex = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
        return emailRegex.test(email);
    }

    handleSenderNameChange(event) {
        this.handleChange(event, 'senderName');
    }

    handleReplyToEmailChange(event) {
        this.handleChange(event, 'replyToEmail');
    }

    handleRecipientNameChange(event) {
        this.handleChange(event, 'recipientName');
    }

    handleSendToEmailChange(event) {
        this.handleChange(event, 'sendToEmail');
    }

    handleSubjectChange(event) {
        this.handleChange(event, 'subject');
    }

    handleHtmlBodyChange(event) {
        this.handleChange(event, 'htmlBody');
    }

    handleChange(event, name) {
        if (event && event.detail) {
            const newValue = event.detail.value;
            const valueChangedEvent = new CustomEvent(
                'configuration_editor_input_value_changed',
                {
                    bubbles: true,
                    cancelable: false,
                    composed: true,
                    detail: {
                        name,
                        newValue,
                        newValueDataType: 'String',
                    },
                }
            );
        this.dispatchEvent(valueChangedEvent);
        }
    }
}