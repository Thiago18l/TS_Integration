import { IFetchTodos, IDeleteTodo } from './index';

export enum Types {
    fetchTodos,
    deleteTodos
}

export type Action = IFetchTodos | IDeleteTodo;