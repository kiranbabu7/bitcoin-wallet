import Header from './components/header'
import NavBar from './components/navigationBar';
import Wallet from './pages/wallet';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className='main'>
        <Wallet />
      </div>
      <NavBar />
    </div>
  );
}

export default App
