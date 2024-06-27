import React, { Dispatch, SetStateAction } from "react";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import CreditCardIcon from "@mui/icons-material/CreditCard";
type Props = {
  setOpneModal: Dispatch<SetStateAction<boolean>>;
  setIsOpenPayModal: any;
};
const SpeedDial: React.FC<Props> = ({ setOpneModal, setIsOpenPayModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-center space-y-2">
      {isOpen && (
        <div className="flex flex-col items-center space-y-2">
          <button
            onClick={() => setOpneModal(true)}
            className="bg-blue-400 text-white hover:text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-400 transition duration-300"
          >
            <Add />
          </button>
          <button
            onClick={() => setIsOpenPayModal(true)}
            className=" bg-blue-400 text-white hover:text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-400 transition duration-300"
          >
            <CreditCardIcon />
          </button>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
      >
        <Add />
      </button>
    </div>
  );
};

export default SpeedDial;
