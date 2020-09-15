import axios from 'axios';
import { Dispatch } from 'redux';
import { Types } from './Types';
const url = `https://jsonplaceholder.typicode.com/todos`;

export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

export interface IFetchTodos {
    type: Types.fetchTodos;
    payload: ITodo[];
}

export interface IDeleteTodo {
    type: Types.deleteTodos;
    payload: number;
}
export const fetchTodos = () => {
    return async function (dispatch: Dispatch) {
        const response = await axios.get<ITodo[]>(url);

        dispatch<IFetchTodos>({
            type: Types.fetchTodos,
            payload: response.data,
        })
    }
};

export const deleteTodo = (id: number): IDeleteTodo => {
    return {
        type: Types.deleteTodos,
        payload: id,
    }
}