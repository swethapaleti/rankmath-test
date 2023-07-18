import Navbar from "../Navbar";
import BitcoinCard from "../BitcoinCard";
import Notifications from "../Notifications";
import SellAndBuyCard from "../SellAndBuyCard";

const cardDetails = [
    { color: "bg-blue-500", text: "Buy BTC" },
    { color: "bg-pink-500", text: "Sell BTC" },
  ];


const BitcoinWallet = () => (
  <div className="h-screen px-3 py-2 bg-slate-200">
    <Navbar />
    <BitcoinCard />
    <Notifications />
    <div className="flex justify-center gap-10 mt-10">
    {cardDetails.map((each) => (
      <SellAndBuyCard key={each.text} props={each} />
    ))}
    </div>
  </div>
);

export default BitcoinWallet;
