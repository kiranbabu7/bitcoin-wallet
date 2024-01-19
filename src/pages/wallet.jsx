import BuySellButton from '../components/buySellButtons';
import SimpleAreaChart from '../components/chart';
import WalletCard from '../components/cryptoWalletCard';

function Wallet() {
    const cryptoCurrency = {
        'name' : 'bitcoin',
        'code' : 'BTC'
      }
    return(
        <>
            <WalletCard currencyName={cryptoCurrency.name} />
            <SimpleAreaChart cryptoCurrency={cryptoCurrency} />
            <BuySellButton currencyCode={cryptoCurrency.code} />
        </>
    )
}

export default Wallet