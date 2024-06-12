import { Customer } from "@/store/store";
import CustomerCardContainer from "./CustomerCard/CustomerCardContiner";
type Props = {
  Customers: Customer[];
  loading: boolean;
};
const CustomerComponent: React.FC<Props> = ({ Customers, loading }) => {
  return (
    <div>
      {!loading ? (
        <div className=" w-full items-center grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-1 p-5">
          {Customers?.map((customer: Customer) => (
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
