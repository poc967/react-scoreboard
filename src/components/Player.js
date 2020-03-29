import React from 'react'
import Counter from './Counter'

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
                {props.name}
            </span>

            <Counter
                score={props.score}
                handleScore={props.handleScore}
                index={props.index}
            />
        </div>
    )
}

export default Player