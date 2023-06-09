import { todos } from '../data/todos';
import { TodoTable } from '../components/TodoTable/TodoTable';
import { useParams, useNavigate } from 'react-router-dom';


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
