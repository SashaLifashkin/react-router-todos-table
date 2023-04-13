import ReactDOM from 'react-dom/client';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './index.css';
import { App, TodosPage } from './App';
import { BrowserRouter } from 'react-router-dom';
import { Navigate, Outlet, Routes, Route } from 'react-router-dom';

const Root = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<h1 className="title">Home Page</h1>} />
                <Route path="home" element={<Navigate to="/" replace />} />

                {/* Наследование роутеров */}
                <Route path="todos">
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
            </Route>
        </Routes>
    </BrowserRouter>
);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(<Root />);
