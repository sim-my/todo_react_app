export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const CHANGE_INPUT = "CHANGE_INPUT";

export const addTodo = todo => {
    return {
        type:ADD_TODO,
        payload:{
            id: todo.id,
            title: todo.title,
            completed: todo.completed || false
        }
    }
}

export const toggleCompleted = todo => {
    return {
        type:TOGGLE_COMPLETED,
        payload:{
            id: todo.id,
            title: todo.title,
            completed: todo.completed
        }
    }
}

export const changeInput = input => {
    return {
        type:CHANGE_INPUT,
        input
    }
}
