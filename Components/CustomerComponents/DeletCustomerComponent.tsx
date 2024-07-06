import { Customer } from "@/types";
import { deleteCustomer } from "@/dataFetching/fetchCustomersData";
import { useMutation, useQueryClient } from "react-query";
import useStore from "@/store/store";
import { toast } from "react-toastify";
type Props = {
  customer: Customer;
  onClose: () => void;
};

const DeleteCustomerModal: React.FC<Props> = ({ onClose, customer }) => {
  const queryClient = useQueryClient();
  const { removeCustomer } = useStore();
  const mutation = useMutation(deleteCustomer, {
    onSuccess: (_, customerId) => {
      queryClient.invalidateQueries("customers");
      removeCustomer(customerId);
      toast.info("مشتری با موفقیت حذف شد", {
        position: "top-right",
      });
      onClose();
    },
  });

  return (
    <div className=" text-black py-5 flex flex-col items-center">
      <h1 className=" text-gray-500 my-5">
        ایا میخواهید <strong className=" text-white">{customer.name}</strong>{" "}
        راحذف کنید ؟
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
          onClick={() => mutation.mutate(customer._id)}
        >
          حذف {customer.name}
        </button>
      </div>
    </div>
  );
};

export default DeleteCustomerModal;
