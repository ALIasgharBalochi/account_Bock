import { Customer } from "@/store/store";
import avatar from "@/public/avatar.png";
import Image from "next/image";
type Props = {
  customer: Customer;
};
const PersonalityInformation: React.FC<Props> = ({ customer }) => {
  return (
    <div className=" flex items-center ">
      <div className=" text-end mr-4">
        <h1>{customer.name}</h1>
        <p className=" text-gray-400">{customer.phone}</p>
      </div>
      <div>
        <Image
          src={
            customer.photo
              ? `http://localhost:9000/images/${customer.photo}`
              : avatar
          }
          className=" rounded-full max-h-[10rem]"
          width={150}
          height={100}
          alt={customer.name}
        />
      </div>
    </div>
  );
};

export default PersonalityInformation;
