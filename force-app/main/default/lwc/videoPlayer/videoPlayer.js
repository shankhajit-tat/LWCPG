import { LightningElement, api } from 'lwc';

export default class VideoPlayer extends LightningElement {
    @api videoUrl;

    @api
    get isPlayingMethod() {
        const player = this.template.querySelector('video');
        return player !== null && player.paused === false;
    }

    @api
    playMethod() {
        console.log('Inside pauseMethod..');
        const player = this.template.querySelector('video');
        // the player might not be in the DOM just yet
        if (player) {
            player.play();
        }
    }

    @api
    pauseMethod() {
        console.log('Inside pauseMethod..');
        const player = this.template.querySelector('video');
        if (player) {
            // the player might not be in the DOM just yet
            player.pause();
        }
    }

    // private method for computed value
    get videoType() {
        return 'video/' + this.videoUrl.split('.').pop();
    }
}