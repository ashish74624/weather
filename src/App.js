import './App.css';
import Background from './Components/Background';
import Footer from './Components/Footer';
import TempState from './Context/TempState';

function App() {
  return (
    <TempState>
      <div className=''>
        <Background />
      </div>
      <Footer/>
    </TempState>
  );
}

export default App;
