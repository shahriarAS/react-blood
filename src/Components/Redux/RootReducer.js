import { combineReducers } from "redux"
import AllUserReducer from "./AllUsers/AllUserReducer"
import CurrentUserReducer from "./CurrentUser/CurrentUserReducer"

const RootReducer = combineReducers({
    AllUser: AllUserReducer,
    CurrentUser: CurrentUserReducer,
})

export default RootReducer