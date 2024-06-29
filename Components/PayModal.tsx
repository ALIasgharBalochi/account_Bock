"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { useQuery, useMutation } from "react-query";
import { createPayment } from "@/dataFetching/fetchPaymentData";
type Props = {
  isOpen: boolean;
  setIsOpenPayModal: Dispatch<SetStateAction<boolean>>;
  customerId: number;
};
const PayModal: React.FC<Props> = ({
  isOpen,
  setIsOpenPayModal,
  customerId,
}) => {
  const [pay, setPay] = useState<number>(0);

  const mutatino = useMutation(createPayment, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        console.log("Error crating payment: ", error.message);
      }
    },
  });
  const handleSubmit = () => {
    mutatino.mutate({ customer: customerId, amount: pay });
  };

  if (!isOpen) {
    return null;
  }
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
        <div className="inline-block align-bottom bg-slate-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className=" text-black py-5 flex flex-col items-center">
            <form dir="rtl" onSubmit={handleSubmit}>
              <div className=" w-full text-start">
                <label className=" text-white">مبلغ پرداختی به تومان:</label>
              </div>
              <input
                type="number"
                className="mt-2 w-full p-2 border rounded text-black"
                placeholder="مبلغ پرداختی"
                value={pay}
                onChange={(e) => setPay(parseInt(e.target.value))}
              />
              <div className=" flex justify-start my-4 text-gray-200">
                <button
                  className=" px-3 py-2 bg-blue-500 rounded-md"
                  type="submit"
                >
                  پرداخت{" "}
                </button>
                <button
                  onClick={() => setIsOpenPayModal(false)}
                  className="mx-2 px-3 py-2  border border-blue-500 rounded-md"
                >
                  انصراف
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayModal;
