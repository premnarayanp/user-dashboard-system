import { ADD_LETTER_LIST, ADD_JOINING_LETTER_LIST, ADD_OFFER_LETTER_LIST } from './actionType';

//action creator for Letter
export function addLetterList(data) {
    return {
        type: ADD_LETTER_LIST,
        data: data
    }
}

export function addOfferLetterList(data) {
    return {
        type: ADD_OFFER_LETTER_LIST,
        data: data
    }
}


export function addJoiningLetterList(data) {
    return {
        type: ADD_JOINING_LETTER_LIST,
        data: data
    }
}