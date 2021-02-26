export const ADD_TODO = "ADD_TODO";
export const SET_COMPLETED = "SET_COMPLETED";

export const addItem = payload => {
    return {
        type:ADD_TODO,
        payload
    }
}

export const setCompleted = payload => {
    return {
        type:SET_COMPLETED,
        payload
    }
}