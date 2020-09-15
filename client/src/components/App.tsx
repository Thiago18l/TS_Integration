import React from 'react';
import { connect } from 'react-redux';
import { ITodo, fetchTodos, deleteTodo } from '../api/';
import { IStore } from '../reducers/index';

interface IAppProps {
    todos: ITodo[];
    fetchTodos: Function;
    deleteTodo: Function;
}

interface IAppState {
    fetching: boolean;
}

class _App extends React.Component<IAppProps, IAppState>{
    constructor(props: IAppProps) {
        super(props);

        this.state = { fetching: false }; 
    }

    onTodoClick = (id: number): void => {
        this.props.deleteTodo(id);
    };

    componentDidUpdate(prevProps: IAppProps): void {
        if (!prevProps.todos.length && this.props.todos.length) {
            this.setState({ fetching: false })
        }
    }

    onButtonClick = (): void => {
        this.props.fetchTodos();
        this.setState({ fetching: true });
    }
    renderList = (): JSX.Element[] => {
        return  this.props.todos.map((todo: ITodo) => {
            return (
                <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>{todo.title}</div>
            );

        })
    }
    render() {
        
        return (
            <div>
                <button onClick={this.onButtonClick}>FETCH</button>
                { this.state.fetching ? "LOADING" : null }
                {this.renderList()}
            </div>
        );
    };
};

const mapState = ( { todos }: IStore): { todos: ITodo[] } => {
    return { todos }
}

export const App = connect(
    mapState, 
    { fetchTodos, deleteTodo }
)(_App);