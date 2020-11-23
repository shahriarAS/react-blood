import { combineReducers } from "redux"
import AllUserReducer from "./AllUsers/AllUserReducer"
import CurrentUserReducer from "./CurrentUser/CurrentUserReducer"
import DataFetchReducer from "./DataFetch/DataFetchReducer"

const RootReducer = combineReducers({
    AllUser: AllUserReducer,
    CurrentUser: CurrentUserReducer,
    DataFetch: DataFetchReducer,
})

export default RootReducer