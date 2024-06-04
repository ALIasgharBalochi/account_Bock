import { Customer } from "@/store/store";
type Props = {
  data: Customer;
};
const CustomerCardDetails: React.FC<Props> = ({ data }) => {
  return (
    <>
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        {data.name}
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {data.phone}
      </span>
    </>
  );
};

export default CustomerCardDetails;
