const initialState = {
    dogNumbers: []
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case "SET_NUMBERS" :
            return {
                ...state,
                dogNumbers: action.payload
            }
        default:
            return state
    }
}