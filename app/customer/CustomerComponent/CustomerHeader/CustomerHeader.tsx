import { Customer } from "@/store/store";
import AccountInformation from "./AccountInformatino/AccountInformation";
import PersonalityInformation from "./PersonalityInformation/PersonalityInformation";

type Props = {
  customer: Customer;
};

const CustomerHeader: React.FC<Props> = ({ customer }) => {
  return (
    <div className=" flex items-center h-[32%]">
      <div className=" w-[60%] p-3">
        <AccountInformation customer={customer} />
      </div>
      <div className=" w-[40%] flex justify-center">
        <PersonalityInformation customer={customer} />
      </div>
    </div>
  );
};

export default CustomerHeader;
