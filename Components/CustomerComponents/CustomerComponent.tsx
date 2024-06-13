import { Customer } from "@/store/store";
import CustomerCardContainer from "./CustomerCard/CustomerCardContiner";
type Props = {
  Customers: Customer[];
  loading: boolean;
  searchedCustomers: Customer[];
  query: { text: string };
};
const CustomerComponent: React.FC<Props> = ({
  Customers,
  searchedCustomers,
  query,
  loading,
}) => {
  return (
    <div>
      {!loading ? (
        <>
          {query.text.length > 0 ? (
            <div className=" w-full items-center grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-1 p-5">
              {searchedCustomers?.map((customer: Customer) => (
                <CustomerCardContainer data={customer} />
              ))}
            </div>
          ) : (
            <div className=" w-full items-center grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-1 p-5">
              {Customers?.map((customer: Customer) => (
                <CustomerCardContainer data={customer} />
              ))}
            </div>
          )}
        </>
      ) : (
        <h1>loading ...</h1>
      )}
    </div>
  );
};
export default CustomerComponent;
