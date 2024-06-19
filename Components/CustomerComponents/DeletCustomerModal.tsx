import { Customer } from "@/store/store";
import { deleteCustomer } from "@/dataFetching/fetchCustomersData";
type Props = {
  customer: Customer;
  isOpen: boolean;
  onClose: () => void;
};

const DeleteCustomerModal: React.FC<Props> = ({
  isOpen,
  onClose,
  customer,
}) => {
  const handleDeleteCustoemr = async () => {
    try {
      await deleteCustomer(customer._id);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-slate-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className=" text-black py-5 flex flex-col items-center">
            <h1 className=" text-gray-500 my-5">
              ایا میخواهید{" "}
              <strong className=" text-white">{customer.name}</strong> راحذف
              کنید ؟
            </h1>
            <div>
              <button
                className=" px-3 py-2 rounded-md bg-blue-500 text-gray-200"
                onClick={() => onClose()}
              >
                انصراف
              </button>
              <button
                className=" px-3 py-2 mx-2 rounded-md border border-blue-500 text-gray-200"
                onClick={handleDeleteCustoemr}
              >
                حذف {customer.name}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCustomerModal;
