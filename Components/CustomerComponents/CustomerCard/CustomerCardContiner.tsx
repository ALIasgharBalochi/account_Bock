import { Customer } from "@/store/store";
import CustomerCardImg from "./CustomerCardImg";
import CustomerCardDetails from "./CustomerCardDetails";
import CustomerCardAction from "./CustomerCardAction";
type Props = {
  data: Customer;
};
const CustomerCardContainer: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10">
        <CustomerCardImg data={data} />
        <CustomerCardDetails data={data} />
        <CustomerCardAction />
      </div>
    </div>
  );
};

export default CustomerCardContainer;
