import { Add } from "@mui/icons-material";
import { Dispatch, SetStateAction } from "react";
type Props = {
  setOpneModal: Dispatch<SetStateAction<boolean>>;
};
const AddDebtButton: React.FC<Props> = ({ setOpneModal }) => {
  return (
    <div className=" p-3 bg-blue-600 rounded-md w-10 h-10 flex justify-center items-center absolute">
      <button
        data-ripple-light="true"
        data-dialog-target="dialog"
        className="active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        onClick={() => setOpneModal(true)}
      >
        <Add />
      </button>
    </div>
  );
};

export default AddDebtButton;
