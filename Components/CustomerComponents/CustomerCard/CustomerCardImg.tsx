import { Customer } from "@/store/store";

type Props = {
  data: Customer;
};
const CustomerCardImg: React.FC<Props> = ({ data }) => {
  return (
    <img
      className="w-24 h-24 mb-3 rounded-full shadow-lg"
      src={`http://localhost:9000/images/${data.photo}`}
      alt={data.name}
    />
  );
};

export default CustomerCardImg;
