import { getAllCustomers } from "@/dataFetching/fetchCustomersData";
import { Customer } from "@/store/store";
import CustomerCardContainer from "./CustomerCard/CustomerCardContiner";
const CustomerComponent: React.FC = () => {
  const customers: Customer[] | null = getAllCustomers();
  return (
    <div>
      {customers != null ? (
        <div className=" w-full items-center grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-1 p-5">
          {customers?.map((customer: Customer) => (
            <CustomerCardContainer data={customer} />
          ))}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};
export default CustomerComponent;
