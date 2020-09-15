import { ITodo, IFetchTodos } from '../api/index';
import { Types } from '../api/Types';

export const todosReducer = (state: ITodo[] = [], action: IFetchTodos) => {
    switch(action.type) {
        case Types.fetchTodos:
            return action.payload;
        default:
         return state;
    }
};