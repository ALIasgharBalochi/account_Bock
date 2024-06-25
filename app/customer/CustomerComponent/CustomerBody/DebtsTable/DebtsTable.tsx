import NotFound from "@/app/not-found";
import { Debt } from "@/store/store";
import { Dispatch, SetStateAction } from "react";
import ShowTime from "@/Components/ShowTime";
type Props = {
  Debts: Debt[];
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setDeletedDebt: Dispatch<SetStateAction<Debt>>;
};
const DebtsTable: React.FC<Props> = ({ Debts, setIsOpen, setDeletedDebt }) => {
  const handleDeleteDebt = (debt: Debt) => {
    setDeletedDebt(debt);
    setIsOpen(true);
  };
  return (
    <div className=" flex w-[90%] justify-center max-h-[25rem] overflow-y-auto overflow-x-auto">
      {Debts.length > 0 ? (
        <table className=" table-auto w-full overflow-x-scroll" dir="rtl">
          <thead className=" bg-gray-500">
            <tr>
              <th className=" py-3 text-start">ردیف</th>
              <th className=" text-start ">نام کالا</th>
              <th className=" text-start ">تعداد</th>
              <th className=" text-start ">واحد</th>
              <th className=" text-start ">جزع</th>
              <th className=" text-start ">قیمت</th>
              <th className=" text-start ">شخصی که برده</th>
              <th className=" text-start ">تاریخ</th>
              <th className=" text-start ">تخفیف</th>
              <th className=" text-start ">مجموع ب ریال</th>
            </tr>
          </thead>
          <tbody className=" bg-gray-500">
            {Debts.map((debt: Debt, index) => (
              <tr
                key={index}
                onClick={() => handleDeleteDebt(debt)}
                className=" bg-gray-800 border-solid hover:cursor-pointer border-y-2 border-gray-500 hover:bg-gray-600 hover:text-gray-800 hover:font-bold"
              >
                <td className=" h-3 min-w-5">{index + 1}</td>
                <td>{debt.itemName}</td>
                <td>{debt.number}</td>
                <td>{debt.unit}</td>
                <td>{debt.part}</td>
                <td>{debt.itemPrice}</td>
                <td>{debt.byWhom}</td>
                <td>
                  <ShowTime timestamp={debt.date} />
                </td>
                <td>{debt.discount ? debt.discount : <h1>-</h1>}</td>
                <td className=" overflow-x-auto">{debt.itemPrice}0</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <NotFound text="این مشتری هنوز چیزی به نسیه نبرده " height="full" />
      )}
    </div>
  );
};

export default DebtsTable;
