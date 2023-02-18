import { ADDTOCART,DELETEFROMCART } from "./actionTypes"

const initialState = []

const fightBookingReducer = (state = initialState, action) => {
    switch (action.type) {
        // flight-book add to cart !
        case ADDTOCART:
            return [...state, { ...action.payload }];
        case DELETEFROMCART:
            return [
                ...state.filter((c) =>
                    c.id != action.payload
                )
            ]

        default:
            return state
    }
}

export default fightBookingReducer;