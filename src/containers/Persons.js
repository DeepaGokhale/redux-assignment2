import React, { Component } from 'react';
import { connect } from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

class Persons extends Component {
    state = {
        persons: []
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAdded} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onPersonRemoved(person.id)}/>
                ))}
            </div>
        );
    }
}


const mapStateToProps = state => {    
    //const pList = (state.personsList === null) ? [] : state.personsList;
    return {
        persons: state.persons //(state.personsList === null) ? [] : 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPersonAdded: () => dispatch({type: actionTypes.ADD_PERSON}),
        onPersonRemoved: (id) => dispatch({type: actionTypes.REMOVE_PERSON, value: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);