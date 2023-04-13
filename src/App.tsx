import { todos } from './data/todos';
import { TodoTable } from './components/TodoTable';
import { Link, Outlet, useParams } from 'react-router-dom';

export const TodosPage = () => {
    const { todoId = 0 } = useParams();

    return (
        <>
            <h1 className="title">Todos Page</h1>

            <TodoTable
                todos={todos}
                selectedTodoId={+todoId}
            />
        </>
    );
};

export const App = () => {
    return <>
        <nav className="navbar is-light px-3">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    <img src="/logo.svg" alt="MA" className="logo" />
                </Link>

                <Link to="/" className="navbar-item">Home</Link>
                <Link to="todos" className="navbar-item">Todos</Link>
            </div>
        </nav>

        <div className="section">
            <Outlet />
        </div>
    </>;
};
