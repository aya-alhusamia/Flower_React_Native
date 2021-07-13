import * as actionType from "../action/types";
const initialState = {
    items: [{ itemId: 3, quantity: 3 }, { itemId: 2, quantity: 3 },]
};
export default (state = initialState, action) => {
    switch (action.type) {
        // case actionType.ADD_TO_CART:
        //     return {
        //         ...state,
        //         items: [...state.items, action.payload.newItem],
        //     };
        default: return state
    }
    return state
}