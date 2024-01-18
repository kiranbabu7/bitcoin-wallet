import BuySellButton from './components/buySellButtons';
import SimpleAreaChart from './components/chart';
import Wallet from './components/cryptoWalletCard';
import Header from './components/header'

const cryptoCurrency = {
  'name' : 'bitcoin',
  'code' : 'BTC'
}
const App = () => {
  return (
    <div className="app">
      <Header />
      <Wallet currencyName={cryptoCurrency.name} />
      <SimpleAreaChart />
      <BuySellButton currencyCode={cryptoCurrency.code} />
    </div>
  );
}

export default App
