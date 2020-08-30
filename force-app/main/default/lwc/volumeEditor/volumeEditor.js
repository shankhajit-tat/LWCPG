import { LightningElement, api } from 'lwc';
import ValidatedFromAddress from '@salesforce/schema/EmailMessage.ValidatedFromAddress';

export default class VolumeEditor extends LightningElement {
    @api
    inputVariables;

    get volume(){
        const param = this.inputVariables.find(({name}) => name === 'volume');
        return param && param.value;
    }

    get secondaryEmail(){
        const param = this.inputVariables.find(({name}) => name === 'secondaryEmail');
        return param && param.value;
    }

    @api 
    builderContext;
    
    @api
    elementInfo;

    get options() {
        debugger;
        let variables = [];
        this.builderContext.variables.forEach(function(input){
            if(input && input.value && input.value.stringValue){
                variables.push(input);
            }
        });
        return variables.map(({name,value})=> ({ label: name , value : value.stringValue }));
    }

    @api
    validate(){
        const validity = [];
        const volComp = this.template.querySelector('lightning-slider[data-key="param-volume"]');
        if(this.volume < 1 || this.volume > 99){
            volComp.setCustomValidity('volume slider range is between 0 and 99');
            validity.push({
                key : 'volume',
                errorString : 'volume slider range is between 0 and 99'
            });
        }else{
            volComp.setCustomValidity('');
        }
        volComp.reportValidity();
        return validity;
    }
    handleChange(event){
        if(event && event.detail){  
            const newValue = event.detail.value;
            const valChangeEvent = new CustomEvent('configuration_editor_input_value_changed', {
                    bubbles: true,
                    cancelable: false,
                    composed: true,
                    detail: {
                        name: 'volume',
                        newValue,
                        newValueDataType: 'Number'
                    }
            });
            this.dispatchEvent(valChangeEvent);
        }
    }
    handleChangeReference(event){
        if(event && event.detail){  
            const newValue = event.detail.value;
            const valChangeEvent = new CustomEvent('configuration_editor_input_value_changed', {
                    bubbles: true,
                    cancelable: false,
                    composed: true,
                    detail: {
                        name: 'secondaryEmail',
                        newValue,
                        newValueDataType: 'String'
                    }
            });
            this.dispatchEvent(valChangeEvent);
        }
    }   
}