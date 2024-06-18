"use client";
import { useEffect, useState } from "react";
import { useFetchCustomerById } from "@/dataFetching/fetchCustomersData";
import Loading from "@/app/loading";
import { Customer, Debt } from "@/store/store";
import CustomerContainerPage from "../CustomerComponent/CustomerContainerPage";
import { useFetchDebts, createDebt } from "@/dataFetching/fetchDebtsData";
import AddDebtButton from "../AddDebtButton";
import Modal from "../Modal";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import Router from "next/router";
export default function customer({ params }: { params: { slug: number } }) {
  const customerId = params.slug;

  const [customer, setCustomer] = useState<Customer | null>(null);
  const [customerDebts, setCustomerDebts] = useState<Debt[] | []>([]);

  //  open Modal
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data, isLoading, error } = useFetchCustomerById(customerId);
  const { data: debts, isLoading: loadingDebts } = useFetchDebts();

  const mutation = useMutation(createDebt, {
    onSuccess: () => {
      toast.success(" کالا با موفقیت ساخته شد ", {
        position: "top-right",
      });
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        console.log("Error creating customer: ", error.message);
      }
    },
  });

  const onClose = (): void => {
    setIsOpen(false);
  };

  const onSubmit = (data: {
    customer: number;
    itemName: string;
    number: number;
    unit: string;
    part: number;
    discount: string;
    itemPrice: number;
    byWhom: string;
  }) => {
    mutation.mutate(data);
  };
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
      <AddDebtButton setOpneModal={setIsOpen} />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={onSubmit}
        customerId={customerId}
      />
    </>
  );
}
