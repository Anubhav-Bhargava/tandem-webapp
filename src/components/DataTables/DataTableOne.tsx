import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
  Column,
} from "react-table";
import { FilterProps } from "react-table";
import ColumnFilter from "./ColumnFilter";

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

const DataTableOne = (
  {
    showSearch = true,
    header = ""
  }
) => {
  const data = useMemo(() => vehicleData, []);
  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter as React.FC<FilterProps<Vehicle>>,
    };
  }, []);

  const tableInstance = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
    gotoPage,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <section className="data-table-common rounded-sm border border-stroke bg-white py-4 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex justify-between border-b border-stroke px-8 pb-4 dark:border-strokedark">

        {
          showSearch ?
            <div className="w-100">
              <input
                type="text"
                value={globalFilter}
                onChange={(e) => setGlobalFilter(e.target.value)}
                className="w-full rounded-md border border-stroke px-5 py-2.5 outline-none focus:border-primary dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                placeholder="Search..."
              />
            </div>
            :
            <h3 className="text-black font-semibold dark:text-white">{header}</h3>

        }

        <div className="flex items-center font-medium">
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="bg-transparent pl-2"
          >
            {[5, 10, 20, 50].map((page) => (
              <option key={page} value={page}>
                {page}
              </option>
            ))}
          </select>
          <p className="pl-2 text-black dark:text-white">Entries Per Page</p>
        </div>

      </div>
        
      <div  className="overflow-x-auto">

        <table
          {...getTableProps()}
          className="datatable-table datatable-one w-full table-auto !border-collapse overflow-hidden break-words px-4 md:table-fixed md:overflow-auto md:px-8"
        >
          <thead className="border-separate px-4">
            {headerGroups.map((headerGroup, key) => (
              <tr
                className="border-t border-stroke dark:border-strokedark"
                {...headerGroup.getHeaderGroupProps()}
                key={key}
              >
                {headerGroup.headers.map((column, key) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={key}
                  >
                    <div className="flex items-center">
                      <span> {column.render("Header")}</span>

                      <div className="ml-2 inline-flex flex-col space-y-[2px]">
                        <span className="inline-block">
                          <svg
                            className="fill-current"
                            width="10"
                            height="5"
                            viewBox="0 0 10 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5 0L0 5H10L5 0Z" fill="" />
                          </svg>
                        </span>
                        <span className="inline-block">
                          <svg
                            className="fill-current"
                            width="10"
                            height="5"
                            viewBox="0 0 10 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                              fill=""
                            />
                          </svg>
                        </span>
                      </div>
                    </div>

                    {column.canFilter ? column.render("Filter") : null}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, key) => {
              prepareRow(row);
              return (
                <tr
                  className="border-t border-stroke dark:border-strokedark"
                  {...row.getRowProps()}
                  key={key}
                >
                  {row.cells.map((cell, key) => {
                    return (
                      <td {...cell.getCellProps()} key={key}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>


        <div className="flex justify-between border-t border-stroke px-6 pt-5 dark:border-strokedark">
          <p className="font-medium">
            Showing {pageIndex + 1} 0f {pageOptions.length} pages
          </p>
          <div className="flex">
            <button
              className="flex cursor-pointer items-center justify-center rounded-md p-1 px-2 hover:bg-primary hover:text-white"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              <svg
                className="fill-current"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1777 16.1156C12.009 16.1156 11.8402 16.0593 11.7277 15.9187L5.37148 9.44995C5.11836 9.19683 5.11836 8.80308 5.37148 8.54995L11.7277 2.0812C11.9809 1.82808 12.3746 1.82808 12.6277 2.0812C12.8809 2.33433 12.8809 2.72808 12.6277 2.9812L6.72148 8.99995L12.6559 15.0187C12.909 15.2718 12.909 15.6656 12.6559 15.9187C12.4871 16.0312 12.3465 16.1156 12.1777 16.1156Z"
                  fill=""
                />
              </svg>
            </button>

            {pageOptions.map((_page, index) => (
              <button
                key={index}
                onClick={() => {
                  gotoPage(index);
                }}
                className={`${pageIndex === index && "bg-primary text-white"
                  } mx-1 flex cursor-pointer items-center justify-center rounded-md p-1 px-3 hover:bg-primary hover:text-white`}
              >
                {index + 1}
              </button>
            ))}

            <button
              className="flex cursor-pointer items-center justify-center rounded-md p-1 px-2 hover:bg-primary hover:text-white"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              <svg
                className="fill-current"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.82148 16.1156C5.65273 16.1156 5.51211 16.0593 5.37148 15.9468C5.11836 15.6937 5.11836 15.3 5.37148 15.0468L11.2777 8.99995L5.37148 2.9812C5.11836 2.72808 5.11836 2.33433 5.37148 2.0812C5.62461 1.82808 6.01836 1.82808 6.27148 2.0812L12.6277 8.54995C12.8809 8.80308 12.8809 9.19683 12.6277 9.44995L6.27148 15.9187C6.15898 16.0312 5.99023 16.1156 5.82148 16.1156Z"
                  fill=""
                />
              </svg>
            </button>
          </div>
        </div>
    </section>
  );
};

export default DataTableOne;
