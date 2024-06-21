import { Customer } from "@/store/store";
import avatar from "@/public/avatar.png";
import Image from "next/image";

type Props = {
  data: Customer;
};
const CustomerCardImg: React.FC<Props> = ({ data }) => {
  return (
    <Image
      className="max-w-24 max-h-24 mb-3 rounded-full shadow-lg"
      src={data.photo ? `http://localhost:9000/images/${data.photo}` : avatar}
      width={200}
      height={100}
      alt={data.name}
    />
  );
};

export default CustomerCardImg;
