import React from 'react';
import Header from './Header'
import Player from './Player'
import AddPlayerForm from './AddPlayerForm';

class App extends React.Component {
  state = {
    players: [
      {
        name: 'pat',
        score: 0,
        id: '6'
      }
    ]
  }

  handleScore = (index, delta) => {
    this.setState(prevState => {
      return {
        score: prevState.players[index].score += delta
      }
    })
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      }
    })
  }

  handleAddPlayer = (newPlayer) => {
    this.setState(prevState => {
      return {
        players: [
          ...this.state.players,
          {
            name: newPlayer,
            score: 0,
            id: ''
          },
        ]
      }
    })
  }

  render() {
    return (
      <div className="scoreboard" >
        <Header
          title="Scoreboard"
          totalPlayers={this.state.players.length}
          totalScore={this.state.players.reduce((acc, curr) => acc + curr.score, 0)}
        />

        {/* Players list */}
        {this.state.players.map((player, index) =>
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            index={index}
            key={player.id.toString()}
            removePlayer={this.handleRemovePlayer}
            handleScore={this.handleScore}
          />
        )
        }

        < AddPlayerForm
          handleAddPlayer={this.handleAddPlayer}
        />
      </div >
    )
  }
}

export default App
