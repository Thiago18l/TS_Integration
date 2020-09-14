import axios from 'axios';
import { Dispatch } from 'redux';
import { Types } from './Types';
const url = `https://jsonplaceholder.typicode.com/todos`;

interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

interface IFetchTodos {
    type: Types.fetchTodos;
    payload: ITodo[];
}
export const fetchTodos = () => {
    return async function(dispatch: Dispatch) {
        const response = await axios.get<ITodo[]>(url);

        dispatch<IFetchTodos>({
            type: Types.fetchTodos,
            payload: response.data,
        })
    }
};