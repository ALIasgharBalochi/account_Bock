"use client";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { getAllCustomers } from "@/dataFetching/fetchCustomersData";
import Body from "./Body";
import { Customer } from "@/store/store";

type MyData = {
  isLoading: boolean;
  Customers: Customer[];
};
const PaginationComponent = ({
  CustomerPerPage,
}: {
  CustomerPerPage: number;
}) => {
  const [CustomersPaginated, setCustomerPagenated] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [CustomerOffset, setCustomerOffset] = useState(0);

  const mydata: MyData = getAllCustomers();
  const { isLoading, Customers } = mydata;

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
    setCustomerPagenated(Customers);
    setLoading(false);
  }, [isLoading, Customers]);

  return (
    <>
      <Body Customers={currentBlogs} loading={loading} />
      <ReactPaginate
        containerClassName="flex justify-center items-center mt-8 mb-4"
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
