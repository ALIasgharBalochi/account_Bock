import { Customer, Debt } from "@/store/store";
import CustomerHeader from "./CustomerHeader/CustomerHeader";

type Props = {
  customer: Customer;
  debts: Debt[];
};
const CustomerContainerPage: React.FC<Props> = ({ customer, debts }) => {
  return (
    <div className=" h-screen">
      <CustomerHeader customer={customer} />
    </div>
  );
};

export default CustomerContainerPage;
