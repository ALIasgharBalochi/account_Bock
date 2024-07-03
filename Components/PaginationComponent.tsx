"use client";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import ReactPaginate from "react-paginate";
import CustomerComponent from "./CustomerComponents/CustomerComponent";
import { Customer } from "@/store/store";

const PaginationComponent = ({
  CustomerPerPage,
  Customers,
}: {
  CustomerPerPage: number;
  Customers: Customer[];
}) => {
  const [CustomersPaginated, setCustomerPagenated] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [CustomerOffset, setCustomerOffset] = useState(0);

  const customers: Customer[] = Customers?.slice().sort(
    (a: Customer, b: Customer) => b.date?.localeCompare(a.date)
  );

  const endOffset = CustomerOffset + CustomerPerPage;

  const currentBlogs = CustomersPaginated?.slice(CustomerOffset, endOffset);

  const pageCount = Math.ceil(CustomersPaginated?.length / CustomerPerPage);

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };

  const handleClick = (e: any) => {
    const newOffset = e.selected * CustomerPerPage;
    setCustomerOffset(newOffset);
    scrollToTop();
  };

  useEffect(() => {
    setCustomerPagenated(customers);
    setLoading(false);
  }, [Customers]);

  return (
    <>
      <CustomerComponent Customers={currentBlogs} loading={loading} />
      <ReactPaginate
        containerClassName="flex justify-center items-center mt-[7rem] mb-4"
        pageClassName="block border border-solid border-liteGray w-10 h-10 flex items-center justify-center rounded-full mr-2 text-slate-800"
        activeClassName="bg-slate-400 text-light hover:bg-slate-500"
        breakLabel="..."
        onPageChange={handleClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={null}
        nextLabel={null}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default PaginationComponent;
