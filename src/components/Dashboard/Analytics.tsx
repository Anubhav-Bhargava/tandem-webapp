"use client";
import React, { useEffect, useState } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import ChartFour from "../Charts/ChartFour";
import DataStats from "../DataStats/DataStats";
import ChartThree from "../Charts/ChartThree";
import TopContent from "../TopContent";
import TopChannels from "../TopChannels";
import TableTwo from "../Tables/TableTwo";

// without this the component renders on server and throws an error
import dynamic from "next/dynamic";
import DataStatsAnalytics from "../DataStats/DataStatsAnalytics";
import UtilizationChart from "../Charts/UtilizationChart";
import ChartSix from "../Charts/ChartSix";
import DowntimeChart from "../Charts/DowntimeChart";
import FuelEfficiencyChart from "../Charts/FuelEfficiencyChart";
import IdleTimeChart from "../Charts/IdleTimeChart";
import OverTimeChart from "../Charts/OverTimeChart";
import DataTableOne from "../DataTables/DataTableOne";
import DataTableAnalytics from "../DataTables/DataTableAnalytics";

const MapTwo = dynamic(() => import("../Maps/MapTwo"), {
  ssr: false,
});

const Analytics: React.FC = () => {

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12 flex flex-wrap items-center justify-between gap-3">
          {/* <!-- Datepicker built with flatpickr --> */}
          <h3 className="text-title-md2 font-semibold text-black dark:text-white">
            Analytics Overview
          </h3>
          <div className="relative z-20 inline-block rounded bg-white shadow-card-2 dark:bg-boxdark">
            <select
              name=""
              id=""
              className="relative z-20 inline-flex appearance-none rounded border border-stroke bg-transparent py-2 pl-4 pr-9 text-sm font-medium outline-none dark:border-strokedark"
            >
              <option value="" className="dark:bg-boxdark">
                Yesterday
              </option>
              <option value="" className="dark:bg-boxdark">
                Last 7 Days
              </option>
              <option value="" className="dark:bg-boxdark">
                Last 30 Days
              </option>
            </select>
            <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.96967 6.21967C4.26256 5.92678 4.73744 5.92678 5.03033 6.21967L9 10.1893L12.9697 6.21967C13.2626 5.92678 13.7374 5.92678 14.0303 6.21967C14.3232 6.51256 14.3232 6.98744 14.0303 7.28033L9.53033 11.7803C9.23744 12.0732 8.76256 12.0732 8.46967 11.7803L3.96967 7.28033C3.67678 6.98744 3.67678 6.51256 3.96967 6.21967Z"
                  fill="#64748B"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="col-span-12">
          <DataStatsAnalytics />
        </div>
        <div className="col-span-12 xl:col-span-6">
          <UtilizationChart />
        </div>
        <div className="col-span-12 xl:col-span-6">
          <DowntimeChart />
        </div>
        <div className="col-span-12 xl:col-span-6">
          <FuelEfficiencyChart />
        </div>
        <div className="col-span-12 xl:col-span-6">
          <IdleTimeChart />
        </div>
        <div className="col-span-12 xl:col-span-6">
          <OverTimeChart />
        </div>

        <div className="col-span-12 rounded-sm border mt-4 border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <DataTableAnalytics />
        </div>


        <DataStats />
        <MapTwo />
        <div className="col-span-12 xl:col-span-6">
          {/* <!-- ====== Top Content Start --> */}
          <TopContent />
          {/* <!-- ====== Top Content End --> */}

          {/* <!-- ====== Top Channels Start --> */}
          <TopChannels />
          {/* <!-- ====== Top Channels End --> */}
        </div>
        <ChartThree />

        {/* <!-- ====== Table Two Start --> */}
        <div className="col-span-12 xl:col-span-7">
          <TableTwo />
        </div>
        {/* <!-- ====== Table Two End --> */}
      </div>
    </>
  );
};

export default Analytics;
