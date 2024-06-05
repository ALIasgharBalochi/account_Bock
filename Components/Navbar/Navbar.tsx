import { Add } from "@mui/icons-material";
import Link from "next/link";
const NavBar: React.FC = () => {
  return (
    <div className=" w-full bg-slate-800 h-16 flex justify-between items-center py-5">
      <h1>Account Boock</h1>
      <Link href="/createCustomer">
        <button className=" bg-blue-600 text-white px-2 py-1 rounded-md items-center mx-2 shadow-md shadow-blue-500 active:shadow-none">
          <Add />
        </button>
      </Link>
    </div>
  );
};

export default NavBar;
