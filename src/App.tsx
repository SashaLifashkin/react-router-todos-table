import { todos } from './data/todos';
import { TodoTable } from './components/TodoTable/TodoTable';
import { Link, Navigate, Routes, Route, useParams, NavLink, useNavigate } from 'react-router-dom';
import classNames from 'classnames';

export const TodosPage = () => {
    const { todoId = 0 } = useParams();
    const navigate = useNavigate();

    return (
        <>
            <button
                className='button is-link'
                onClick={() => {
                    setTimeout(() => {
                        navigate('/');
                    }, 2000);
                }}
            >
                Go Home
            </button>

            <h1 className="title">Todos Page</h1>

            <TodoTable
                todos={todos}
                selectedTodoId={+todoId}
            />
        </>
    );
};

type Props = {
    to: string;
    text: string;
};

export const PageNavLink: React.FC<Props> = ({ to, text }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => classNames('navbar-item', { 'is-active': isActive })}
        >
            {text}
        </NavLink>
    );
};

export const App = () => {
    return <>
        <nav className="navbar is-light px-3">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    <img src="/logo.svg" alt="MA" className="logo" />
                </Link>

                <PageNavLink to="/" text="Home" />
                <PageNavLink to="todos" text="Todos" />
            </div>
        </nav>

        <div className="section">
            <Routes>
                <Route path="/" element={<h1 className="title">Home Page</h1>} />
                <Route path="home" element={<Navigate to="/" replace />} />
                <Route path="todos">
                    <Route index element={<TodosPage />} />
                    <Route path=":todoId" element={<TodosPage />} />
                </Route>
                <Route path="*" element={<p>Page nof found</p>} />
            </Routes>
        </div>
    </>;
};
