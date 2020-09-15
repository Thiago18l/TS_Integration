import { ITodo } from '../api/index';
import { Types, Action } from '../api/Types';

export const todosReducer = (state: ITodo[] = [], action: Action) => {
    switch(action.type) {
        case Types.fetchTodos:
            return action.payload;
        case Types.deleteTodos:
            return state.filter((todo: ITodo) => todo.id !== action.payload);

        default:
         return state;
    };
};