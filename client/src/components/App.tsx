import React from 'react';
import { connect } from 'react-redux';
import { ITodo, fetchTodos } from '../api/index';
import { IStore } from '../reducers/index';

interface IAppProps {
    todos: ITodo[];
    fetchTodos(): any;
}

interface IAccept {
    mapState(): { todos: ITodo[] };
    fetchTdos(): any;
}

class _App extends React.Component<IAppProps>{
    render() {
        return (
            <div>Hi</div>
        );
    };
};

const mapState = ( { todos }: IStore): { todos: ITodo[] } => {
    return { todos }
}

export const App = connect(
    mapState, 
    { fetchTodos }
)(_App);