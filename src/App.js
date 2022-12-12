
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <main>
      <h1>PROGRAMAS SOFTWARES</h1>
      <div>
        <Link to='/dobro'>Programa do Dobro</Link>
      </div>
       
      <div>
        <Link to='/boletim'>Programa das Notas Escolares</Link>
      </div>
     </main>
    </div>
  );
}

export default App;
