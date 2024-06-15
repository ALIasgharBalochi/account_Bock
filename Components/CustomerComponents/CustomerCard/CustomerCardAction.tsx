import Link from "next/link";
type Props = {
  customerId: number;
};
const CustomerCardAction: React.FC<Props> = ({ customerId }) => {
  return (
    <>
      <div className="flex mt-4 md:mt-6">
        <Link href={`http://localhost:3000/customer/${customerId}`}>
          <button className="py-2 px-8 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            مشاهده حساب مشتری
          </button>
        </Link>
      </div>
    </>
  );
};

export default CustomerCardAction;
