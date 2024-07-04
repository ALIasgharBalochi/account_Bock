"use client";
import { useEffect, useState } from "react";
import Body from "./Body";
import { useFetchCustomers } from "@/dataFetching/fetchCustomersData";
import { Customer } from "@/types";
import SearchComponent from "./Search/SearchComponent";
import _ from "lodash";
const Layout: React.FC = () => {
  // all customer
  const [allCustomers, setAllCustomer] = useState<Customer[]>([]);
  // Search states
  const [searchedCustomer, setSearchedCustomer] = useState<Customer[]>([]);
  const [query, setQuery] = useState<{ text: string }>({ text: "" });

  // fetch customer
  const { data, isLoading, error } = useFetchCustomers();

  useEffect(() => {
    if (data) {
      setAllCustomer(data);
    }
  }, [data, isLoading]);

  const searched: (event: any) => void = (event: any): void => {
    setQuery({ ...query, text: event.target.value });
    const allproducts = _.debounce(() => {
      const filterCustomers = allCustomers.filter((c: Customer) => {
        return c.name.toLowerCase().includes(event.target.value.toLowerCase());
      });
      setSearchedCustomer(filterCustomers);
    }, 1000);
    allproducts();
  };

  return (
    <>
      <div className=" w-full mt-5 flex justify-center ">
        <SearchComponent searched={searched} query={query} />
      </div>
      <Body
        Customers={allCustomers}
        query={query}
        searchedCustomers={searchedCustomer}
      />
    </>
  );
};

export default Layout;
