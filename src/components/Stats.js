import React from 'react'

const Stats = (props) => {
    return (
        <div className='stats'>
            <span>players: {props.totalPlayers} </span>
            <span>total points: {props.totalScore} </span>
        </div>
    )
}

export default Stats