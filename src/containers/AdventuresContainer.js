import React, { Component } from 'react'
import { connect } from 'react-redux'
import Adventures from '../components/Adventures/adventures'
import AdventureInput from '../components/Adventures/AdventureInput'
import { fetchAdventures } from '../actions/adventuresActions'

class AdventuresContainer extends Component {
    componentDidMount(){
        this.props.fetchAdventures()
    }

    render() {
        return (
            <Container>
            <AdventureInput/>
            <Adventure adventures={this.props.adventures} />
            </Container>
        )
    }
}
const mapStateToProps = (state) => {
    return ({
        adventures: state.adventurereducer.adventures
    })
}

export default connect(mapStateToProps, {fetchAdventures})(AdventuresContainer);