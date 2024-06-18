import NotFound from "@/app/not-found";
import { Debt } from "@/store/store";

type Props = {
  Debts: Debt[];
};
const DebtsTable: React.FC<Props> = ({ Debts }) => {
  return (
    <div className=" flex justify-center">
      {Debts.length > 0 ? (
        <table className=" table-fixed w-[90%] overflow-x-scroll" dir="rtl">
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
                className=" bg-gray-800 border-solid border-y-2 border-gray-500 hover:bg-gray-600 hover:text-gray-800 hover:font-bold"
              >
                <td className=" min-h-3 overflow-x-auto">{index + 1}</td>
                <td className=" overflow-x-auto">{debt.itemName}</td>
                <td className=" overflow-x-auto">{debt.number}</td>
                <td className=" overflow-x-auto">{debt.unit}</td>
                <td className=" overflow-x-auto">{debt.part}</td>
                <td className=" overflow-x-auto">{debt.itemPrice}</td>
                <td className=" overflow-x-auto">{debt.byWhom}</td>
                <td className=" overflow-x-auto">{debt.date}</td>
                <td className=" overflow-x-auto">
                  {debt.discount ? debt.discount : <h1>-</h1>}
                </td>
                <td className=" overflow-x-auto">{debt.itemPrice}0</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <NotFound text="این مشتری هنوز چیزی به نسیه نبرده " />
      )}
    </div>
  );
};

export default DebtsTable;
