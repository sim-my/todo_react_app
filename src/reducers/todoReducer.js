import * as todoActions from "../actions/TodoAction";

const INITIAL_STATE = {
  list: [],
};

const TodoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case todoActions.ADD_TODO:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case todoActions.TOGGLE_COMPLETED:
        let tempList = state.list;        
        const todo = action.payload;
        
        const index = tempList.findIndex(x => x.id === action.payload.id);
        tempList[index] = todo;

        return {
            ...state,
            list: tempList
        }

    case todoActions.CHANGE_INPUT:
        return{
            ...state,
            input:action.input
        };

    default:
      return state;
  }
};

export default TodoReducer;
