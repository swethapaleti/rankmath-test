import Navbar from "../Navbar";
import BitcoinCard from "../BitcoinCard";
import Notifications from "../Notifications";
import SellAndBuyCard from "../SellAndBuyCard";
import BitcoinPriceChart from "../BitcoinPriceChart";

const cardDetails = [
  { color: "bg-blue-500", text: "Buy BTC" },
  { color: "bg-pink-500", text: "Sell BTC" },
];

const BitcoinWallet = () => (
  <div className="px-3 py-6 bg-slate-100 ">
    <Navbar />
      <BitcoinCard />
      <BitcoinPriceChart />
    <div className="flex justify-center gap-10 mt-3">
      {cardDetails.map((each) => (
        <SellAndBuyCard key={each.text} props={each} />
      ))}
    </div>
      <Notifications/>
  </div>
);

export default BitcoinWallet;
