import { todos } from './data/todos';
import { TodoTable } from './components/TodoTable';

export const App = () => {
  return <>
    <nav className="navbar is-light px-3">
      <div className="navbar-brand">
        <a href="/" className="navbar-item">
          <img src="/logo.svg" alt="MA" className="logo" />
        </a>

        <a href="/" className="navbar-item">Home</a>
        <a href="todos" className="navbar-item">Todos</a>
      </div>
    </nav>

    <div className="section">
      <h1 className="title">Todos Page</h1>

      <TodoTable
        todos={todos}
        selectedTodoId={3}
      />
    </div>
  </>;
};
