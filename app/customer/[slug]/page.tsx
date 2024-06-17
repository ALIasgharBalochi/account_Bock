"use client";
import { useEffect, useState } from "react";
import { useFetchCustomerById } from "@/dataFetching/fetchCustomersData";
import Loading from "@/app/loading";
import { Customer, Debt } from "@/store/store";
import CustomerContainerPage from "../CustomerComponent/CustomerContainerPage";
import { useFetchDebts } from "@/dataFetching/fetchDebtsData";
export default function customer({ params }: { params: { slug: number } }) {
  const customerId = params.slug;

  const [customer, setCustomer] = useState<Customer | null>(null);
  const [customerDebts, setCustomerDebts] = useState<Debt[] | []>([]);

  const { data, isLoading, error } = useFetchCustomerById(customerId);
  const { data: debts, isLoading: loadingDebts } = useFetchDebts();
  useEffect(() => {
    if (data) {
      setCustomer(data);
    }
  }, [isLoading, data]);

  useEffect(() => {
    if (debts) {
      const d = debts.filter((debt: Debt) => {
        return debt.customer._id === customerId;
      });
      setCustomerDebts(d);
    }
  }, [loadingDebts, debts]);

  return (
    <>
      {customer != null ? (
        <CustomerContainerPage customer={customer} debts={customerDebts} />
      ) : (
        <Loading />
      )}
    </>
  );
}
