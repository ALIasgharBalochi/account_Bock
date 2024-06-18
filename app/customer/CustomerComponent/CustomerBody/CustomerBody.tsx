import DebtsTable from "./DebtsTable/DebtsTable";
import { Debt } from "@/store/store";
type Props = {
  Debts: Debt[];
};
const CustomerBody: React.FC<Props> = ({ Debts }) => {
  return (
    <div className=" w-full flex justify-center">
      <DebtsTable Debts={Debts} />
    </div>
  );
};

export default CustomerBody;
