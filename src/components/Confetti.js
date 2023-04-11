import React from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

export default class Confetti extends React.Component {
    getInstance = (instance) => {
        // saving the instance to an internal property
        this.confetti = instance;
    }

    onClickDefault = () => {
        // starting the animation
        this.confetti();
    }

    onClickCustom = () => {
        // starting the animation with custom settings
        this.confetti({particleCount: Math.ceil(Math.random() * 1000), spread: 180});
    }

    onClickCallback = () => {
        // calling console.log after the animation ends
        this.confetti().then(() => {
            console.log('do something after animation');
        });
    }

    onClickReset = () => {
        // cleaning the canvas
        this.confetti.reset();
    }

    render() {
        const style = {
            position: 'fixed',
            width: '100%',
            height: '100%',
            zIndex: -1
        };

        return (
            <>
                <ReactCanvasConfetti
                    // set the styles as for a usual react component
                    style={style}
                    // set the class name as for a usual react component
                    className={'yourClassName'}
                    // set the callback for getting instance. The callback will be called after initialization ReactCanvasConfetti component
                    refConfetti={this.getInstance}
                />
            </>
        );
    }
}
