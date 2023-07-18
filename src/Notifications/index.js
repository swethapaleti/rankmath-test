import {PiFolderMinusFill} from "react-icons/pi"
import {MdExplore} from "react-icons/md"
import {MdNotifications} from "react-icons/md"
import {IoMdSettings} from "react-icons/io"

const Notifications = () =>(
    <div className="flex p-4 mt-4 bg-white rounded-md md:hidden justify-evenly">
        <PiFolderMinusFill className="text-3xl text-gray-400 transition-colors hover:duration-500 hover:text-black"/>
        <MdExplore className="text-3xl text-gray-400 transition-colors hover:duration-500 hover:text-black"/>
        <MdNotifications className="text-3xl text-gray-400 transition-colors hover:duration-500 hover:text-black"/>
        <IoMdSettings className="text-3xl text-gray-400 transition-colors hover:duration-500 hover:text-black"/>
    </div>
)

export default Notifications