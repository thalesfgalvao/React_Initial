import './App.css';
import { useCounterContext } from './contexts/CounterContext';

const App = () => {
  const [state, dispatch] = useCounterContext();
  
  return (
    <header className="App-header">
      <h1>Olá</h1>
    </header>
  );
}

export default App;