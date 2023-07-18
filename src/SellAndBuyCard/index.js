import { FaDollarSign } from "react-icons/fa";

const SellAndBuyCard = (card) => {
    const {props} = card
    const {color,text} = props
  return (
    <div className="shadow-md flex flex-col items-center py-6 bg-white rounded-lg w-[200px] mt-4">
      <div className={`${color} py-2 rounded-full w-[50px] h-[50px] flex flex-col items-center justify-center`}>
        <FaDollarSign className="text-2xl text-white " />
      </div>
      <p className="pt-2">{text}</p>
    </div>
  );
};

export default SellAndBuyCard;
