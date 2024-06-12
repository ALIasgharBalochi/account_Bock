"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";
import { createCustomerFunc } from "@/dataFetching/createCustomer";
import { toast } from "react-toastify";
export default function createCustomer() {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [photo, setPhoto] = useState<File | null>();
  const [totalDebt, setTotalDebt] = useState<string>("0");

  const mutation = useMutation(createCustomerFunc, {
    onSuccess: (data) => {
      console.log(" Customer created:", data);
      toast.success("مشتری با موفقیت ساخته شد ", {
        position: "top-right",
      });
      router.push("/");
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        console.log("Error creating customer: ", error.message);
      }
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("totalDebt", totalDebt);
    if (photo) {
      formData.append("photo", photo);
    }
    mutation.mutate(formData);
  };

  return (
    <div
      className=" w-full min-h:screen flex justify-center items-center"
      dir="rtl"
    >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          برگشت به خانه
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              ساخت مشتری
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  نام مشتری
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="customer Name"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  شماره موبایل مشتری
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="customer phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  عکس مشتری
                </label>
                <input
                  type="file"
                  name="photo"
                  onChange={(e) => setPhoto(e.target.files?.[0] || null)}
                  id="photo"
                  placeholder="photo"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 active:bg-blue-300 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                ساخت مشتری
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
