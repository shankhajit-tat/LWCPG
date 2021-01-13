import {createElement} from 'lwc';
import UnitTest from 'c/unitTest';


describe('c-unit-test',()=>{
    //clean up on dom after each test call
    afterEach(()=>{
        while(document.body.firstChild){
            document.body.removeChild(document.body.firstChild);
        }
    })
    it('displays unit status with default unitNumber',()=> {
        const element = createElement('c-unit-test',{
            is : UnitTest
        });
        //provide assert on the attribute
        expect(element.unitNumber).toBe(5);
        //add the element tot the jsdom
        document.body.appendChild(element);
        //verify displayed greetings
        const div = element.shadowRoot.querySelector('div');
        expect(div.textContent).toBe('Unit 5 alive!');
    })
    


})