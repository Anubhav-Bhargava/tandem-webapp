"use client";
import React, { useMemo } from "react";
import DataStatsThree from "../DataStats/DataStatsThree";
import DataTableOne from "../DataTables/DataTableOne";
import ChartTwo from "../Charts/ChartTwo";
import { Column, FilterProps, useFilters, useGlobalFilter, usePagination, useSortBy, useTable } from "react-table";
import DataTableOneFiltered from "../DataTables/DataTableOne copy";

interface Vehicle {
  vehicleNumber: string,
  vehicleCategory: string,
  make: string,
  model: string,
  initialKmReading: string,
  currentKmReading: string,
  distanceTravelled: string,
  engineHours: string,
  idleTime: string,
  fuelConsumed: string,
  status: string,
}

// tables data
const vehicleData: Vehicle[] = [
  {
    "vehicleNumber": "CJ123",
    "vehicleCategory": "Excavator",
    "make": "CAT",
    "model": "320D",
    "initialKmReading": "5000",
    "currentKmReading": "7000",
    "distanceTravelled": "2000",
    "engineHours": "8",
    "idleTime": "5",
    "fuelConsumed": "40",
    "status": "working"
  },
  {
    "vehicleNumber": "WL456",
    "vehicleCategory": "Wheel Loader",
    "make": "Volvo",
    "model": "L120H",
    "initialKmReading": "8000",
    "currentKmReading": "10000",
    "distanceTravelled": "2000",
    "engineHours": "10",
    "idleTime": "8",
    "fuelConsumed": "50",
    "status": "working"
  },
  {
    "vehicleNumber": "JD789",
    "vehicleCategory": "JCB",
    "make": "Komatsu",
    "model": "JS220",
    "initialKmReading": "3000",
    "currentKmReading": "4500",
    "distanceTravelled": "1500",
    "engineHours": "7",
    "idleTime": "6",
    "fuelConsumed": "35",
    "status": "idle"
  },
  {
    "vehicleNumber": "TP101",
    "vehicleCategory": "Tipper",
    "make": "Ashok Leyland",
    "model": "1618",
    "initialKmReading": "10000",
    "currentKmReading": "12000",
    "distanceTravelled": "2000",
    "engineHours": "9",
    "idleTime": "7",
    "fuelConsumed": "55",
    "status": "working"
  },
  {
    "vehicleNumber": "EX555",
    "vehicleCategory": "Excavator",
    "make": "Hitachi",
    "model": "ZX210",
    "initialKmReading": "7000",
    "currentKmReading": "9000",
    "distanceTravelled": "2000",
    "engineHours": "11",
    "idleTime": "9",
    "fuelConsumed": "60",
    "status": "working"
  },
  {
    "vehicleNumber": "WL789",
    "vehicleCategory": "Wheel Loader",
    "make": "Caterpillar",
    "model": "950M",
    "initialKmReading": "12000",
    "currentKmReading": "14000",
    "distanceTravelled": "2000",
    "engineHours": "12",
    "idleTime": "10",
    "fuelConsumed": "65",
    "status": "working"
  },
  {
    "vehicleNumber": "JD222",
    "vehicleCategory": "JCB",
    "make": "JCB",
    "model": "3DX",
    "initialKmReading": "4000",
    "currentKmReading": "5500",
    "distanceTravelled": "1500",
    "engineHours": "8",
    "idleTime": "6",
    "fuelConsumed": "40",
    "status": "idle"
  },
  {
    "vehicleNumber": "TP202",
    "vehicleCategory": "Tipper",
    "make": "Tata",
    "model": "LPK 2518",
    "initialKmReading": "15000",
    "currentKmReading": "17000",
    "distanceTravelled": "2000",
    "engineHours": "10",
    "idleTime": "8",
    "fuelConsumed": "55",
    "status": "working"
  },
  {
    "vehicleNumber": "EX777",
    "vehicleCategory": "Excavator",
    "make": "Kobelco",
    "model": "SK210",
    "initialKmReading": "9000",
    "currentKmReading": "11000",
    "distanceTravelled": "2000",
    "engineHours": "13",
    "idleTime": "11",
    "fuelConsumed": "70",
    "status": "working"
  },
  {
    "vehicleNumber": "EX123",
    "vehicleCategory": "Excavator",
    "make": "Hitachi",
    "model": "ZX200",
    "initialKmReading": "6000",
    "currentKmReading": "8000",
    "distanceTravelled": "2000",
    "engineHours": "9",
    "idleTime": "7",
    "fuelConsumed": "45",
    "status": "working"
  },
  {
    "vehicleNumber": "WL789",
    "vehicleCategory": "Wheel Loader",
    "make": "Caterpillar",
    "model": "950M",
    "initialKmReading": "13000",
    "currentKmReading": "15000",
    "distanceTravelled": "2000",
    "engineHours": "11",
    "idleTime": "9",
    "fuelConsumed": "60",
    "status": "working"
  },
  {
    "vehicleNumber": "JD222",
    "vehicleCategory": "JCB",
    "make": "JCB",
    "model": "3DX",
    "initialKmReading": "4500",
    "currentKmReading": "6000",
    "distanceTravelled": "1500",
    "engineHours": "8",
    "idleTime": "6",
    "fuelConsumed": "40",
    "status": "idle"
  },
  {
    "vehicleNumber": "TP202",
    "vehicleCategory": "Tipper",
    "make": "Tata",
    "model": "LPK 2518",
    "initialKmReading": "16000",
    "currentKmReading": "18000",
    "distanceTravelled": "2000",
    "engineHours": "10",
    "idleTime": "8",
    "fuelConsumed": "55",
    "status": "working"
  },
  {
    "vehicleNumber": "EX777",
    "vehicleCategory": "Excavator",
    "make": "Kobelco",
    "model": "SK210",
    "initialKmReading": "10000",
    "currentKmReading": "12000",
    "distanceTravelled": "2000",
    "engineHours": "13",
    "idleTime": "11",
    "fuelConsumed": "70",
    "status": "working"
  },
  {
    "vehicleNumber": "WL999",
    "vehicleCategory": "Wheel Loader",
    "make": "Liugong",
    "model": "856H",
    "initialKmReading": "15000",
    "currentKmReading": "17000",
    "distanceTravelled": "2000",
    "engineHours": "12",
    "idleTime": "10",
    "fuelConsumed": "65",
    "status": "working"
  },
  {
    "vehicleNumber": "JD333",
    "vehicleCategory": "JCB",
    "make": "Komatsu",
    "model": "JS130",
    "initialKmReading": "7000",
    "currentKmReading": "8500",
    "distanceTravelled": "1500",
    "engineHours": "7",
    "idleTime": "6",
    "fuelConsumed": "35",
    "status": "idle"
  },
  {
    "vehicleNumber": "TP303",
    "vehicleCategory": "Tipper",
    "make": "Ashok Leyland",
    "model": "1616",
    "initialKmReading": "12000",
    "currentKmReading": "14000",
    "distanceTravelled": "2000",
    "engineHours": "9",
    "idleTime": "7",
    "fuelConsumed": "50",
    "status": "working"
  },
  {
    "vehicleNumber": "EX888",
    "vehicleCategory": "Excavator",
    "make": "Hyundai",
    "model": "R220LC-9S",
    "initialKmReading": "8000",
    "currentKmReading": "10000",
    "distanceTravelled": "2000",
    "engineHours": "10",
    "idleTime": "8",
    "fuelConsumed": "55",
    "status": "working"
  },

];

// table header
const columns: Column<Vehicle>[] = [
  {
    Header: "Vehicle Number",
    accessor: "vehicleNumber",
  },
  {
    Header: "Vehicle Category",
    accessor: "vehicleCategory",
  },
  {
    Header: "Make",
    accessor: "make",
  },
  {
    Header: "Model",
    accessor: "model",

  },
  {
    Header: "Distance Travelled",
    accessor: "distanceTravelled",
  },
  {
    Header: "Engine Hours",
    accessor: "engineHours",
  },
  {
    Header: "Idle Time",
    accessor: "idleTime",
  },
  {
    Header: "Fuel Consumed",
    accessor: "fuelConsumed",
  },
  {
    Header: "status",
    accessor: "status",
  },
];





const CRM: React.FC = () => {


  return (
    <>
      <DataStatsThree />

      <div className="mt-4 ">
        {/* <div className=".w-6/12">
          <ChartThree />
        </div> */}
        {/* <div className="ml-4 w-max"> */}
          <ChartTwo />
        {/* </div> */}
      </div>

      <div className="rounded-sm border mt-4 border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <DataTableOneFiltered showSearch={false} header="Idle / Not Working Vehicle Data" />
      </div>

      <div className="rounded-sm border mt-4 border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <DataTableOne />
      </div>

    </>
  );
};

export default CRM;
