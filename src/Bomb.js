import React, { Component } from 'react';

export default class Bomb extends Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    countdown = () => {
        if (this.state.secondsLeft === 0) {
            return 'Boom!';
        } else {
            return <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        }
    }

    render() {
        return (
            <div>{this.countdown()}</div>
        )
    }
}