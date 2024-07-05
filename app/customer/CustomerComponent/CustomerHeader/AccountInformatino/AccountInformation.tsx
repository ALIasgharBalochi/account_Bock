import { Customer } from "@/types";
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
          <p> پرداختی: 0$ 00:00:00</p>
        ) : (
          <div className=" flex">
            <p>${data?.amount}</p> &nbsp; <ShowTime timestamp={data?.date} />{" "}
            <p>: پرداختی </p>
          </div>
        )}
        <p> {customer.totalDebt}:مجموع کل حساب</p>
      </div>
    </div>
  );
};

export default AccountInformation;
