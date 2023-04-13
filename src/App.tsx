import { todos } from './data/todos';
import { TodoTable } from './components/TodoTable';
import { Link, Navigate, Outlet, Routes, Route, useParams } from 'react-router-dom';

const TodosPage = () => {
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
            <Routes>
                <Route path="/" element={<h1 className="title">Home Page</h1>} />
                <Route path="home" element={<Navigate to="/" replace />} />

                {/* Наследование роутеров */}
                <Route path="todos" element={
                    <>
                        123
                        <Outlet />
                        456
                    </>
                }>
                    <Route index element={<TodosPage />} />
                    <Route path=":todoId" element={<TodosPage />} />
                </Route>

                {/* Решение неоткрывающегося списка todos без наследования роутеров */}
                {/* <Route
                    path="todos"
                    element={
                        <TodosPage />
                    }
                />

                <Route
                    path="todos/:todoId"
                    element={
                        <TodosPage />
                    }
                /> */}

                <Route path="*" element={<p>Page nof found</p>} />
            </Routes>
        </div>
    </>;
};
