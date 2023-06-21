import { Inter } from "next/font/google";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="grid gap-5 bg-slate-400 px-10 py-20 ">
      <div className="rounded-3xl bg-white p-6 shadow-xl">
        <span className="text-3xl font-semibold">Select Item</span>
        <div className="flex justify-between">
          <span className="my-1 text-gray-500">Gray Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between">
          <span className="my-1 text-gray-500">Gray Chair</span>
          <span className="font-semibold">$10</span>
        </div>
        <div className="mt-2 flex justify-between border-t-2 border-dashed pt-2">
          <span className="text-gray-500">Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <div className="mx-auto mt-5 w-2/4 rounded-xl bg-blue-500 p-3 text-center text-white">
          Checkout
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl bg-white  shadow-xl">
        <div className="bg-blue-500 p-6 pb-5">
          <span className="text-2xl text-white">Profile</span>
        </div>
        <div className="relative -top-4 rounded-3xl bg-white p-6">
          <div className="relative -top-16 flex items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 rounded-full bg-red-400" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$340</span>
            </div>
          </div>
          <div className="relative   -mt-10 flex flex-col items-center">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-400">미국</span>
          </div>
        </div>
      </div>
      <div className="rounded-2xl bg-white p-10 shadow-xl"></div>
      <div className="rounded-2xl bg-white p-10 shadow-xl"></div>
    </div>
  );
};
export default Home;
// 만약 자동완성 안 되면 컨트롤 + 스페이스 키 누르면 됨
