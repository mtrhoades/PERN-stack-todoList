// IMPORTS
import './App.css';

// COMPONENTS IMPORTS
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';


// FUNCTIONAL COMPONENT
export default function App() {
  // VANILLA JS SECTION


  // JSX SECTION
  return (
    <div className="container">

    <InputTodo />

    <ListTodos />

    </div>
  );
}

