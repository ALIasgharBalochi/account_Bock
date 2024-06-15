"use client";

import useStore, { Customer } from "@/store/store";

export default function customer({ params }: { params: { slug: number } }) {
  const customerId = params.slug;

  const getCustomerById = useStore((state) => state.getCustomerById);
  const customer: Customer | undefined = getCustomerById(customerId);

  return (
    <>
      {customer != undefined ? (
        <h1>hello {customer.name}</h1>
      ) : (
        <h1>customer not found</h1>
      )}
    </>
  );
}
