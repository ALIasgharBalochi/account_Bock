import { Customer } from "@/store/store";

type Props = {
  customer: Customer;
};
const AccountInformation: React.FC<Props> = ({ customer }) => {
  return (
    <div>
      <p>last payment: $0 , 000,00,00</p>
      <p>total account: {customer.totalDebt}</p>
    </div>
  );
};

export default AccountInformation;
