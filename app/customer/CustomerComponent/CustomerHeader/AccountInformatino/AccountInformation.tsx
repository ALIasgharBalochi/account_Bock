import { Customer } from "@/store/store";
import { useLatestPayment } from "@/dataFetching/fetchPaymentData";
import ShowTime from "@/Components/ShowTime";
type Props = {
  customer: Customer;
};
export type Pyment = {
  _id: string;
  customer: Customer;
  amount: number;
  date: string;
};
const AccountInformation: React.FC<Props> = ({ customer }) => {
  const { data, isLoading, error } = useLatestPayment(customer._id);

  return (
    <div className=" flex justify-start">
      <div className=" text-end">
        {isLoading && data == undefined ? (
          <p>تاریخ و مبلغ اخرین پرداختی: 0$ 00:00:00</p>
        ) : (
          <p>
            {data?.amount}$ <ShowTime timestamp={data?.date} />
            :date and lest payment{" "}
          </p>
        )}
        <p> {customer.totalDebt}:مجموع کل حساب</p>
      </div>
    </div>
  );
};

export default AccountInformation;
