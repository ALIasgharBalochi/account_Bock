import { useState } from "react";
import DeleteDebtModal from "../../DeletCustomerModal";
import DebtsTable from "./DebtsTable/DebtsTable";
import { Debt } from "@/store/store";
type Props = {
  Debts: Debt[];
};
const CustomerBody: React.FC<Props> = ({ Debts }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [deletedDebt, setDeletedDebt] = useState<any>();
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div className=" w-full flex justify-center">
      <DebtsTable
        Debts={Debts}
        setDeletedDebt={setDeletedDebt}
        setIsOpen={setIsOpen}
      />
      <DeleteDebtModal
        isOpen={isOpen}
        onClose={onClose}
        deletedDebt={deletedDebt}
      />
    </div>
  );
};

export default CustomerBody;
