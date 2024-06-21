"use client";
import { useEffect, useState } from "react";
import { useFetchCustomerById } from "@/dataFetching/fetchCustomersData";
import Loading from "@/app/loading";
import { Customer, Debt } from "@/store/store";
import CustomerContainerPage from "../CustomerComponent/CustomerContainerPage";
import { createDebt, fetchDebts } from "@/dataFetching/fetchDebtsData";
import AddDebtButton from "../AddDebtButton";
import Modal from "../Modal";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

export default function customer({ params }: { params: { slug: number } }) {
  const customerId = params.slug;

  const [customer, setCustomer] = useState<Customer | null>(null);
  const [customerDebts, setCustomerDebts] = useState<Debt[] | []>([]);
  const [debts, setDebt] = useState<Debt[] | []>([]);

  //  open Modal
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data, isLoading, error } = useFetchCustomerById(customerId);
  console.log("log debts:", debts);

  const mutation = useMutation(createDebt, {
    onSuccess: (debt: Debt) => {
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

  useEffect(() => {
    const fetch = async () => {
      const d = await fetchDebts();
      return setDebt(d);
    };

    fetch();
  }, []);
  const onClose = (): void => {
    setIsOpen(false);
  };

  const onSubmit = (data: Debt) => {
    mutation.mutate(data);
  };
  useEffect(() => {
    if (data) {
      setCustomer(data);
    }
  }, [isLoading, data]);

  useEffect(() => {
    if (debts) {
      const d: Debt[] = debts.filter((debt: Debt) => {
        return debt.customer._id === customerId;
      });
      const orderDebts = d
        ?.slice()
        .sort((a: Debt, b: Debt) => b.date.localeCompare(a.date));
      setCustomerDebts(orderDebts);
    }
  }, [debts]);

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
        customer={customer}
      />
    </>
  );
}
