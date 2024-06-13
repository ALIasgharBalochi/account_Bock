"use client";
import { useState } from "react";
import _ from "lodash";
import CustomerComponent from "./CustomerComponents/CustomerComponent";
import NavBar from "./Navbar/Navbar";
import SearchComponent from "./Search/SearchComponent";
import { Customer } from "@/store/store";
import { getAllCustomers } from "@/dataFetching/fetchCustomersData";
type Props = {
  Customers: Customer[];
  loading: boolean;
};
const Body: React.FC<Props> = ({ Customers, loading }) => {
  const [query, setQuery] = useState<{ text: string }>({ text: "" });
  const [serchedCustomers, setSearchedCustoemr] = useState<Customer[]>([]);

  const fetchCustomers = getAllCustomers();
  const { Customers: customers } = fetchCustomers;

  const searched: (event: any) => void = (event: any): void => {
    setQuery({ ...query, text: event.target.value });
    const allproducts = _.debounce(() => {
      const filterCustomers = customers.filter((c: Customer) => {
        return c.name.toLowerCase().includes(event.target.value.toLowerCase());
      });
      setSearchedCustoemr(filterCustomers);
    }, 1000);
    allproducts();
  };

  return (
    <>
      <NavBar />
      <div className=" w-full h-screen pt-12">
        <div className=" w-full flex justify-center ">
          <SearchComponent searched={searched} query={query} />
        </div>
        <div className=" w-full">
          <CustomerComponent
            Customers={Customers}
            searchedCustomers={serchedCustomers}
            loading={loading}
            query={query}
          />
        </div>
      </div>
    </>
  );
};

export default Body;
