import React, { Component } from 'react'

class Stopwatch extends Component {

    state = {
        isRunning: false,
        elapsedTime: 0,
        previousTime: 0
    }

    componentDidMount() {
        this.intervalID = setInterval(() => this.count(), 100)
    }

    count = () => {
        if (this.state.isRunning) {
            const now = Date.now()
            this.setState(prevState => {
                return {
                    previousTime: now,
                    elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
                }
            })
        }
    }

    handleStopwatch = () => {
        this.setState(prevState => {
            return {
                isRunning: !prevState.isRunning
            }
        })
        if (!this.state.isRunning) {
            this.setState(prevState => {
                return {
                    previousTime: Date.now()
                }
            })
        }
    }

    handleStop = () => {
        this.setState(prevState => {
            return {
                elapsedTime: 0
            }
        })
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    render() {

        const seconds = Math.floor(this.state.elapsedTime / 1000)

        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">{seconds}</span>
                <button onClick={this.handleStopwatch}>{this.state.isRunning ? 'stop' : 'start'}</button>
                <button onClick={this.handleStop}>Reset</button>
            </div>
        )
    }
}

export default Stopwatch