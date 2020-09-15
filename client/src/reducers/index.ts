import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { ITodo } from '../api/index';

export interface IStore {
    todos: ITodo[];
}

export const reducers = combineReducers<IStore>({
    todos: todosReducer
});