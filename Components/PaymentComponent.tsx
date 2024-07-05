"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { useMutation } from "react-query";
import { createPayment } from "@/dataFetching/fetchPaymentData";
type Props = {
  setIsOpenPayModal: Dispatch<SetStateAction<boolean>>;
  customerId: number;
};
const PaymentComponent: React.FC<Props> = ({
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

  return (
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
          <button className=" px-3 py-2 bg-blue-500 rounded-md" type="submit">
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
  );
};

export default PaymentComponent;
