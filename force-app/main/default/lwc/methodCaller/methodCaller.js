import { LightningElement } from 'lwc';

export default class MethodCaller extends LightningElement {
    video =  'https://www.w3schools.com/tags/movie.mp4';

    handlePlay(){
        console.log('calling handlePlay');
        this.template.querySelector('c-video-player').playMethod();
    }
    handlePause(){
        console.log('calling handlePause');
        this.template.querySelector('c-video-player').pauseMethod();
    }

    errorCallback(error, stack) {
        console.log('error=>'+JSON.stringify(error));
        console.log('stack=>'+JSON.stringify(stack));
    }
}