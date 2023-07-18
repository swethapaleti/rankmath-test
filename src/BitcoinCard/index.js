import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const BitcoinCard = () => {
  const [isArrowDown, showInfo] = useState(false);

  return (
    <div className="w-full px-4 py-6 mx-auto mt-4 bg-white rounded-lg shadow-md md:w-1/2 md:px-8">
      <div className="flex justify-between w-full place-items-center">
        <div className="flex space-x-8 place-items-center">
          <img className="w-16" src="bitcoin.svg" alt="bitcoin" />
          <p className="text-xl">Bitcoin</p>
        </div>
        <p className="text-xl">BTC</p>
      </div>
      <p className="px-2 py-3 text-4xl font-semibold">3.52925090 BTC</p>
      <div className="flex justify-between px-2 py-3 place-items-center">
        <p className="text-lg text-gray-400">$19.153 USD</p>
        <p className="px-2 text-lg text-white bg-red-500 border rounded-2xl">
          -2.32%
        </p>
      </div>
      <button onClick={() => showInfo(!isArrowDown)} className="block mx-auto">
        <IoIosArrowDown className="text-2xl text-gray-500" />
      </button>
      <AnimatePresence>
      {isArrowDown && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            ease: "linear",
            duration: 0.6,
          }}
          className="w-1/4 py-2 mx-auto "
        >
          <button className="p-2 mb-2 text-white bg-green-600 md:mb-0 md:mr-2 round-lg">
            Buy BTC
          </button>
          <button className="p-2 text-white bg-red-500 round-lg">
            Sell BTC
          </button>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};

export default BitcoinCard;
