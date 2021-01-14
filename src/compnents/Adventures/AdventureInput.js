import React, { Component } from 'react';
import { addAdventure } from '../../actions/adventuresActions';
import { connect } from 'react-redux'


class AdventureInput extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            image_url: ""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        thie.props.addAdventure(this.state);
        this.setState({
            name: "",
            image_url: ""
        })
    }

    render() {
        return(
            <Form className="new-adventure-form" onSubmit={this.handleSubmit}>
            <h2>Exodus : Sierra Leone</h2>
            <Form.Field>
            <label className="form-label">Topic's Name </label>
            <input
                id="name"
                required value={this.state.name}
                onChange={(e) => this.handleChange(e)}
                />
            </Form.Field>

            <Form.Field>
            <label className="form-label">Image</label>
            <textarea
                id="image_url"
                required value={this.state.image_url}
                onChange={this.handleChange} />
            </Form.Field>

            <Button type="submit">Add Entry</Button>
        </Form>
        )
    }
}



export default connect(null, { addAdventure})(AdventureInput);