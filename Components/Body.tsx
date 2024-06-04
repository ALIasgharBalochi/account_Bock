import CustomerComponent from "./CustomerComponents/CustomerComponent";
import NavBar from "./Navbar/Navbar";
import SearchComponent from "./Search/SearchComponent";
const Body: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className=" w-full h-screen pt-12">
        <div className=" w-full flex justify-center ">
          <SearchComponent />
        </div>
        <div className=" w-full">
          <CustomerComponent />
        </div>
      </div>
    </>
  );
};

export default Body;
