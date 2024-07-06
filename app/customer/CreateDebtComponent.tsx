import { Debt, Customer } from "@/types";
import React, { useState } from "react";

interface ModalProps {
  onClose: () => void;
  onSubmit: (data: Debt) => void;
  customer: Customer | null;
}

const ModalCreateDebt: React.FC<ModalProps> = ({
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

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="mt-3 text-center sm:mt-5">
          <h3 className="text-lg leading-6 font-medium text-white">
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
  );
};

export default ModalCreateDebt;
