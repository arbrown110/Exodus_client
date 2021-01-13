export default (state = {events: [], loading: false}, action) => {
    switch(action.type){
        case("LOADING_EVENTS"):
            return {...state, loading: true}
        case ("EVENTS_LOADED"):
            return { ...state, loading: false, events: action.payload }
        case ("ADDING_EVENT"):
            return { ...state, loading: true }
        case ("EVENT_ADDED"):
            return { ...state, loading: false, events: [...state.events, action.payload] }
        case ("DELETING_EVENT"):
            return { ...state, loading: true }
        case ("EVENT_DELETED"):
            return { ...state, 
                    loading: false, 
                    events: state.todos.filter(event => event.id != action.payload) }
        default:
            return state
    }    
}
