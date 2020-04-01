import React from 'react'

class AddPlayerForm extends React.Component {

    state = {
        value: ''
    }

    handleValueChange = (e) => {
        this.setState({ value: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.value) {
            this.props.handleAddPlayer(this.state.value)
            this.setState({ value: '' })
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                    value={this.state.value}
                    placeholder="enter player name"
                    onChange={this.handleValueChange} />

                <input
                    type="submit"
                    value="add player" />
            </ form>
        )
    }
}

export default AddPlayerForm