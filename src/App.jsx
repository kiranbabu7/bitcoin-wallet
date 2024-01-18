import Wallet from './components/crypto_wallet_card';
import Header from './components/header'


const App = () => {
  return (
    <div className="app">
      <Header />
      <Wallet name='Bitcoin' cryptoCode='BTC' balance={2.00353453}/>
    </div>
  );
}

export default App
