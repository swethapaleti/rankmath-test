import Navbar from "../Navbar"
import BitcoinCard from "../BitcoinCard"
import Notifications from "../Notifications"

const BitcoinWallet = ()=>(
    <div className="h-screen px-3 py-2 bg-slate-200">
        <Navbar/>
        <BitcoinCard/>
        <Notifications/>
    </div>
)

export default BitcoinWallet