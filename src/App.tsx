import { Navigate, Routes, Route } from 'react-router-dom';
import { TodosPage } from './pages/TodosPage';
import { MainNavigate } from './components/MainNavigate';

export const App = () => {
    return <>
        <MainNavigate />

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
