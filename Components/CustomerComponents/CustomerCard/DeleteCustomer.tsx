import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Dispatch, SetStateAction } from "react";
type Props = {
  openModal: Dispatch<SetStateAction<boolean>>;
};
const DeleteCustomer: React.FC<Props> = ({ openModal }) => {
  return (
    <button onClick={() => openModal(true)}>
      <MoreVertIcon />
    </button>
  );
};

export default DeleteCustomer;
