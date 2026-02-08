import React from "react";

const Nav = () => {
  return (
    <div className="nav w-full fixed top-0 left-0 bg-zinc-900 z-50">
      <div className="px-5 sm:px-10 lg:px-30 py-5">
        <nav className="w-full flex justify-end">
          <div className="l-nav w-[65%] h-3  flex justify-between items-center">
            <h3 className="text-white text-lg font-semibold text-center">
              Money Tracker
            </h3>
            <i className="ri-calendar-line text-xl text-white"></i>
          </div>
        </nav>

        <div className="lowerNav w-full flex justify-between items-center mt-7">
          <div className="flex flex-col gap-2">
            <span className="text-zinc-500 font-semibold">2026</span>
            <span className="text-white">Feb</span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-zinc-500 font-semibold">Expense</span>
            <span className="text-white">14,255</span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-zinc-500 font-semibold">Income</span>
            <span className="text-white">70,000</span>
          </div>

          <div className="flex flex-col gap-2">
            <samp className="text-zinc-500 font-semibold">Balance</samp>
            <span className="text-white">55,745</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
