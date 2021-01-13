

export default (state = {adventures: [], loading: false}, action) => {
    switch(action.type) {
        case("LOADING_ADVENTURES"):
            return {...state, loading: true}
        case ("ADVENTURES_LOADED"):
            return { ...state, loading: false, adventures: action.payload }
        case ("ADDING_ADVENTURE"):
            return { ...state, loading: true }
        case ("ADVENTURE_ADDED"):
            return { ...state, loading: false, adventures: [...state.adventures, action.payload] }
        case ("DELETING_ADVENTURE"):
            return { ...state, loading: true }
        case ("ADVENTURE_DELETED"):
            return { ...state, 
                    loading: false, 
                    todos: state.adventures.filter(adventure => adventure.id !== action.payload) }
        default:
            return state
    }    
}
