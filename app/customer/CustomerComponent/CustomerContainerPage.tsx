"use client";
import { Customer, Debt } from "@/types";
import CustomerHeader from "./CustomerHeader/CustomerHeader";
import CustomerBody from "./CustomerBody/CustomerBody";

type Props = {
  customer: Customer;
  debts: Debt[];
};
const CustomerContainerPage: React.FC<Props> = ({ customer, debts }) => {
  return (
    <div className=" h-screen">
      <CustomerHeader customer={customer} />
      <CustomerBody Debts={debts} />
    </div>
  );
};

export default CustomerContainerPage;
