import {createStore} from "redux"
import {composeWithDevTools}from "redux-devtools-extension"
import fightBookingReducer from "./FlightBooking/flightBookingReducer";

const store =createStore(fightBookingReducer,composeWithDevTools())


export default store;