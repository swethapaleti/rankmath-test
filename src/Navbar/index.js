import { CiMenuKebab } from "react-icons/ci";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useState } from "react";
import {CgEditFlipH} from "react-icons/cg";
import {GoNote} from "react-icons/go";
import {LuShare} from "react-icons/lu";
import {IoMdRemoveCircleOutline} from "react-icons/io"

const listofMenuItems = [{text:"Edit",icon:CgEditFlipH},{text:"Courier Info",icon:GoNote},{text:"Share",icon:LuShare},{text:"Remove",icon:IoMdRemoveCircleOutline}]

const Navbar = () => {
  const [isMenuOpen, toggleMenu] = useState(false);
  return (
    <>
      <nav className="flex w-full p-5 text-center bg-white place-items-center">
        <MdOutlineArrowBackIosNew className="text-2xl text-gray-500" />
        <p className="w-full font-sans font-semibold justify-self-center md:text-4xl">
          Bitcoin Wallet
        </p>
        <button onClick={() => toggleMenu(!isMenuOpen)}>
          <CiMenuKebab className="text-3xl transition duration-300 ease-out"/>
        </button>
      </nav>
      {isMenuOpen && (
        <div className="flex flex-col mt-2 place-items-end">
          <div className="w-1/2 px-4 pt-2 pb-3 space-y-1 bg-white border rounded-lg lg:w-1/5">
           {listofMenuItems.map(each=>(
            <div key={each.text} className="flex justify-between py-2 text-base font-medium transition-colors border-b border-gray-300 cursor-pointer last:border-none place-items-center selection:px-3 hover:text-red-500 hover:font-bold hover:duration-700">
            <p>{each.text}</p>
            {<each.icon className="text-xl font-bold"/>}
          </div>)
           )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
