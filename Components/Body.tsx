"use client";
import { Customer } from "@/types";
import PaginationComponent from "./PaginationComponent";
import NotFound from "@/app/not-found";
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
            searchedCustomers.length > 0 ? (
              <PaginationComponent
                Customers={searchedCustomers}
                CustomerPerPage={6}
              />
            ) : (
              <NotFound height="auto" text="مشتری پیدا نشد" />
            )
          ) : Customers.length > 0 ? (
            <PaginationComponent Customers={Customers} CustomerPerPage={6} />
          ) : (
            <NotFound height="auto" text="هنوز مشتری وجود ندارد " />
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
