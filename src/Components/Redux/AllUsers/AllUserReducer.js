const initialState = {}

function AllUserReducer(state = initialState, action) {
    switch (action.type) {
        case "PopulateAllUsers":
            return action.payload;
        default:
            return state;
    }
}

export default AllUserReducer