import './App.css';
import Background from './Components/Background';
import TempState from './Context/TempState';

function App() {
  return (
    <TempState>
      <div className='fixed'
      >
        <Background />
      </div>
    </TempState>
  );
}

export default App;
