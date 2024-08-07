"use client";
import { Customer } from "@/types";
import CustomerCardImg from "./CustomerCardImg";
import CustomerCardDetails from "./CustomerCardDetails";
import CustomerCardAction from "./CustomerCardAction";
import DeleteCustomer from "./DeleteCustomer";
import { useState } from "react";
import DeleteCustomerModal from "../DeletCustomerComponent";
import Modal from "@/Components/Modal";
type Props = {
  data: Customer;
};
const CustomerCardContainer: React.FC<Props> = ({ data }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onCloseModal = (): void => {
    setIsOpen(false);
  };
  return (
    <div className="w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className=" w-full flex justify-end">
        <DeleteCustomer openModal={setIsOpen} />
      </div>
      <div className="flex flex-col items-center pb-10">
        <CustomerCardImg data={data} />
        <CustomerCardDetails data={data} />
        <CustomerCardAction customerId={data._id} />
      </div>
      <Modal openModal={isOpen}>
        <DeleteCustomerModal customer={data} onClose={onCloseModal} />
      </Modal>
    </div>
  );
};

export default CustomerCardContainer;
