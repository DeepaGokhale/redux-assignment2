import * as actionTypes from './actions';

const  initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
        switch(action.type) {        
            case actionTypes.ADD_PERSON:
                const newPerson = {
                    id: Math.random(), // not really unique but good enough here!
                    name: 'Max',
                    age: Math.floor( Math.random() * 40 )
                }
                return {
                    ...state,
                    persons: state.persons.concat(newPerson)
                }
            case actionTypes.REMOVE_PERSON:
                const updPersons = state.persons.filter(person => person.id !== action.value);
                return {     
                    ...state,               
                    persons: updPersons
                }
        }          
        return state;  
}

export default reducer;

    // personAddedHandler = () => {
    //     const newPerson = {
    //         id: Math.random(), // not really unique but good enough here!
    //         name: 'Max',
    //         age: Math.floor( Math.random() * 40 )
    //     }
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.concat(newPerson)}
    //     } );
    // }

    // personDeletedHandler = (personId) => {
    //     this.setState( ( prevState ) => {
    //         return { }
    //     } );
    // }