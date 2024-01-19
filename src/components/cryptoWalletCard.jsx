import { useState } from "react"
import BuySellButton from "./buySellButtons"

function WalletCard({currencyName}) { 
    const crptyo = {
        "bitcoin": {
            'name' : "Bitcoin",
            'code' : "BTC",
            'wallet_balance' : 2.034634,
            "value_in_usd": "$19.500 USD",
            "profit" : 0,          // value in percentage
            "loss" : 2         // value in percentage
        },
    }

    function ToggleBuySellOptions() {
        const [toggle, setToggle] = useState(false)

        function onClickHandler() {
            setToggle(!toggle)
        }
        return (
            <>
                <div className={'chevron ' + (toggle ? 'hide' : 'show')}  onClick={onClickHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                    </svg>
                </div>
                <div className={ toggle ? 'show' : 'hide'}>
                    <BuySellButton currencyCode={crptyo[currencyName].code} />
                </div>
                <div className={'chevron chevron-up ' + (toggle ? 'show' : 'hide')}  onClick={onClickHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                    </svg>
                </div>
            </>
        )
    }
    return (
        <div className="crypto-wallet-card">
            <div className="container">
                <div className="coin-meta">
                    <div className="currency-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path fill="#ffffff" d="M310.2 242.6c27.7-14.2 45.4-39.4 41.3-81.3-5.4-57.4-52.5-76.6-114.9-81.9V0h-48.5v77.2c-12.6 0-25.5 .3-38.4 .6V0h-48.5v79.4c-17.8 .5-38.6 .3-97.4 0v51.7c38.3-.7 58.4-3.1 63 21.4v217.4c-2.9 19.5-18.5 16.7-53.3 16.1L3.8 443.7c88.5 0 97.4 .3 97.4 .3V512h48.5v-67.1c13.2 .3 26.2 .3 38.4 .3V512h48.5v-68c81.3-4.4 135.6-24.9 142.9-101.5 5.7-61.4-23.3-88.9-69.3-99.9zM150.6 134.6c27.4 0 113.1-8.5 113.1 48.5 0 54.5-85.7 48.2-113.1 48.2v-96.7zm0 251.8V279.8c32.8 0 133.1-9.1 133.1 53.3 0 60.2-100.4 53.3-133.1 53.3z"/>
                        </svg>
                    </div>
                    <div className="crypto-name">
                        <span>{crptyo[currencyName].name}</span>
                        <span className="grey-text">{crptyo[currencyName].code}</span>
                    </div>
                </div>
                <div className="crypto-balance">
                    {crptyo[currencyName].wallet_balance} {crptyo[currencyName].code}
                </div>
                <div className="value-in-usd">
                    <span className="grey-text">
                    {crptyo[currencyName].value_in_usd}    
                    </span>
                    <span className={"profit-loss "+ (crptyo[currencyName].profit ? 'green': '')}>
                        {crptyo[currencyName].profit ? `+ ${crptyo[currencyName].profit}` : `- ${crptyo[currencyName].loss}` }%
                    </span>
                </div>
                <ToggleBuySellOptions />
            </div>
        </div>
    )
}

export default WalletCard