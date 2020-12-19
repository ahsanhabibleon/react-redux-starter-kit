import Counter from "./components/Counter/Counter";
import Todos from "./components/Todos/Todos";
import Users from "./components/Users/Users";
import './App.scss';

function App() {

  return (
    <div className="App">
      <Counter />
      <Todos />
      <Users />
    </div>
  );
}

export default App;