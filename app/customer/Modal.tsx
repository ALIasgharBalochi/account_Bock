import { Debt, Customer } from "@/store/store";
import React, { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Debt) => void;
  customer: Customer | null;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  customer,
}) => {
  const [itemName, setItemName] = useState<string>("");
  const [number, setNumber] = useState<number>(0);
  const [unit, setUnit] = useState<string>("");
  const [part, setPart] = useState<number>(0);
  const [byWhom, setByWhom] = useState<string>("");
  const [discount, setDiscount] = useState<string>("");
  const [itemPrice, setItemPrice] = useState<number | string>("");
  const [date, setDate] = useState(Date.now);
  const handleSubmit = () => {
    if (customer) {
      onSubmit({
        customer,
        itemName,
        number,
        unit,
        part,
        byWhom,
        discount,
        itemPrice: Number(itemPrice),
        date: String(date),
      });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <form onSubmit={handleSubmit}>
            <div>
              <div className="mt-3 text-center sm:mt-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Add New Debt
                </h3>
                <div className="mt-2">
                  <input
                    type="text"
                    className="mt-2 w-full p-2 border rounded text-black"
                    placeholder="نام کالا"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                  />
                  <input
                    type="number"
                    className="mt-2 w-full p-2 border rounded text-black"
                    placeholder="تعداد"
                    value={number}
                    onChange={(e) => setNumber(parseInt(e.target.value))}
                  />
                  <input
                    type="text"
                    className="mt-2 w-full p-2 border rounded text-black"
                    placeholder="واحد"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                  />
                  <input
                    type="number"
                    className="mt-2 w-full p-2 border rounded text-black"
                    placeholder="جزع"
                    value={part}
                    onChange={(e) => setPart(parseInt(e.target.value))}
                  />
                  <input
                    type="text"
                    className="mt-2 w-full p-2 border rounded text-black"
                    placeholder="By Whom"
                    value={byWhom}
                    onChange={(e) => setByWhom(e.target.value)}
                  />
                  <input
                    type="text"
                    className="mt-2 w-full p-2 border rounded text-black"
                    placeholder="تخفیف"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                  />
                  <input
                    type="number"
                    className="mt-2 w-full p-2 border rounded text-black"
                    placeholder=" قیمت کالا به تومان"
                    value={itemPrice}
                    onChange={(e) => setItemPrice(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
              <button
                type="submit"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:col-start-2 sm:text-sm"
              >
                Add
              </button>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
