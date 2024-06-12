import CustomerComponent from "./CustomerComponents/CustomerComponent";
import NavBar from "./Navbar/Navbar";
import SearchComponent from "./Search/SearchComponent";
import { Customer } from "@/store/store";
type Props = {
  Customers: Customer[];
  loading: boolean;
};
const Body: React.FC<Props> = ({ Customers, loading }) => {
  return (
    <>
      <NavBar />
      <div className=" w-full h-screen pt-12">
        <div className=" w-full flex justify-center ">
          <SearchComponent />
        </div>
        <div className=" w-full">
          <CustomerComponent Customers={Customers} loading={loading} />
        </div>
      </div>
    </>
  );
};

export default Body;
