import { Customer } from "@/store/store";

type Props = {
  customer: Customer;
};
const AccountInformation: React.FC<Props> = ({ customer }) => {
  return (
    <div className=" flex justify-start">
      <div className=" text-end">
        <p>0$ 00,00,00:مبلغ و تاریخ اخرین پرداختی </p>
        <p> {customer.totalDebt}:مجموع کل حساب</p>
      </div>
    </div>
  );
};

export default AccountInformation;
