import * as TodoAction from "./actions/TodoAction"

const INITIAL_STATE = {
    list:[],
    todo:{
        title:'',
        completed: false
    }
}

const TodoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case TodoAction.ADD_TODO:
            return{
                ...state,
                list:[...list, action.payload.todo]
            }
    }

}
