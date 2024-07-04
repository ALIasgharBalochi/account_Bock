"use client";
import { Customer } from "@/store/store";
import PaginationComponent from "./PaginationComponent";
type Props = {
  Customers: Customer[];
  query: { text: string };
  searchedCustomers: Customer[];
};
const Body: React.FC<Props> = ({ Customers, query, searchedCustomers }) => {
  return (
    <>
      <div className=" w-full h-auto pt-12">
        <div className=" w-full">
          {query.text.length > 0 ? (
            <PaginationComponent
              Customers={searchedCustomers}
              CustomerPerPage={6}
            />
          ) : (
            <PaginationComponent Customers={Customers} CustomerPerPage={6} />
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
