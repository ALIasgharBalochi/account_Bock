import { Customer } from "@/store/store";
import CustomerCardContainer from "./CustomerCard/CustomerCardContiner";
import Loading from "@/app/loading";
type Props = {
  Customers: Customer[];
  loading: boolean;
};
const CustomerComponent: React.FC<Props> = ({ Customers, loading }) => {
  return (
    <div>
      {!loading ? (
        <div className=" w-full items-center grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-1 p-5">
          {Customers?.map((customer: Customer, index) => (
            <div key={index}>
              <CustomerCardContainer data={customer} />
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default CustomerComponent;
