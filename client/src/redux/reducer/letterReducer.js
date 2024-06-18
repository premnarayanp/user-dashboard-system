import { ADD_LETTER_LIST, ADD_OFFER_LETTER_LIST, ADD_JOINING_LETTER_LIST } from "../action/actionType"


const initialAuthState = {
    letterList: [],
    offerLetterList: [],
    joiningLetterList: []
}

export default function letters(state = initialAuthState, action) {

    switch (action.type) {
        case ADD_LETTER_LIST:
            return {
                ...state,
                letterList: action.data
            }

        case ADD_OFFER_LETTER_LIST:
            return {
                ...state,
                offerLetterList: action.data
            }

        case ADD_JOINING_LETTER_LIST:
            return {
                ...state,
                joiningLetterList: action.data
            }

        default:
            return state;
    }

}