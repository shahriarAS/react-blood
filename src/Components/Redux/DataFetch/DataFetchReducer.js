const initialState = true

function DataFetchReducer(state = initialState, action) {
    switch (action.type) {
        case "loading":
            return false;
        case "success":
            return true
        default:
            return state;
    }
}

export default DataFetchReducer