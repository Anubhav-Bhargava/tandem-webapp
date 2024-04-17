import React, { useMemo, useState } from "react";
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
import Modal from "./DataTableModal";
import UtilizationChart from "../Charts/UtilizationChart";
import DowntimeChart from "../Charts/DowntimeChart";
import FuelEfficiencyChart from "../Charts/FuelEfficiencyChart";
import IdleTimeChart from "../Charts/IdleTimeChart";
import OverTimeChart from "../Charts/OverTimeChart";

interface Vehicle {
  assetType: string,
  assetMake: string,
  assetModel: string,
  vehicleRegistrationNumber: string,
  ownershipType: string,
  ownerName: string,
  ownerNumber: string,
  operatorName: string,
  operatorNumber: string,
  currentStatus: string,
  idleTime: string,
  uptime: string,
  downtime: string,
  fuelConsumptionPerHr: string,
  fuelConsumptionPerKm: string,
  fuelRemaining: string,
  siteDeployed: string,
  project: string
}

// tables data
const vehicleData: Vehicle[] = [

  {
    "assetType": "Excavator",
    "assetMake": "Caterpillar",
    "assetModel": "CAT 320D",
    "vehicleRegistrationNumber": "KA-01-AB-1234",
    "ownershipType": "Owned",
    "ownerName": "Mugrody Constructions",
    "ownerNumber": "+91 98765 43210",
    "operatorName": "Suresh Operator",
    "operatorNumber": "+91 87654 32109",
    "currentStatus": "In Use",
    "idleTime": "2 hours",
    "uptime": "20 hours",
    "downtime": "2 hours",
    "fuelConsumptionPerHr": "10 liters",
    "fuelConsumptionPerKm": "0.5 liters",
    "fuelRemaining": "30 liters",
    "siteDeployed": "Construction Site A, Mangalore",
    "project": "Highway Expansion Project, Mangalore"
  },
  {
    "assetType": "Bulldozer",
    "assetMake": "Komatsu",
    "assetModel": "D65EX-17",
    "vehicleRegistrationNumber": "MH-02-CD-5678",
    "ownershipType": "Leased",
    "ownerName": "Deepak Leasing Company",
    "ownerNumber": "+91 76543 21098",
    "operatorName": "Geeta Operator",
    "operatorNumber": "+91 98765 43210",
    "currentStatus": "Maintenance",
    "idleTime": "4 hours",
    "uptime": "16 hours",
    "downtime": "4 hours",
    "fuelConsumptionPerHr": "12 liters",
    "fuelConsumptionPerKm": "0.6 liters",
    "fuelRemaining": "25 liters",
    "siteDeployed": "Construction Site B, Mangalore",
    "project": "Commercial Complex Project, Mangalore"
  },
  {
    "assetType": "Excavator",
    "assetMake": "Caterpillar",
    "assetModel": "CAT 320D",
    "vehicleRegistrationNumber": "KA-01-AB-1234",
    "ownershipType": "Owned",
    "ownerName": "Mugrody Constructions",
    "ownerNumber": "+91 98765 43210",
    "operatorName": "Suresh Operator",
    "operatorNumber": "+91 87654 32109",
    "currentStatus": "In Use",
    "idleTime": "2 hours",
    "uptime": "20 hours",
    "downtime": "2 hours",
    "fuelConsumptionPerHr": "10 liters",
    "fuelConsumptionPerKm": "0.5 liters",
    "fuelRemaining": "30 liters",
    "siteDeployed": "Construction Site A, Mangalore",
    "project": "Highway Expansion Project, Mangalore"
  },
  {
    "assetType": "Bulldozer",
    "assetMake": "Komatsu",
    "assetModel": "D65EX-17",
    "vehicleRegistrationNumber": "MH-02-CD-5678",
    "ownershipType": "Leased",
    "ownerName": "Deepak Leasing Company",
    "ownerNumber": "+91 76543 21098",
    "operatorName": "Geeta Operator",
    "operatorNumber": "+91 98765 43210",
    "currentStatus": "Maintenance",
    "idleTime": "4 hours",
    "uptime": "16 hours",
    "downtime": "4 hours",
    "fuelConsumptionPerHr": "12 liters",
    "fuelConsumptionPerKm": "0.6 liters",
    "fuelRemaining": "25 liters",
    "siteDeployed": "Construction Site B, Mangalore",
    "project": "Commercial Complex Project, Mangalore"
  },
  {
    "assetType": "Loader",
    "assetMake": "Volvo",
    "assetModel": "L120H",
    "vehicleRegistrationNumber": "TN-07-EF-9876",
    "ownershipType": "Leased",
    "ownerName": "Sarita Enterprises",
    "ownerNumber": "+91 87654 32198",
    "operatorName": "Vijay Loader",
    "operatorNumber": "+91 98765 43210",
    "currentStatus": "Operational",
    "idleTime": "1 hour",
    "uptime": "23 hours",
    "downtime": "0 hours",
    "fuelConsumptionPerHr": "8 liters",
    "fuelConsumptionPerKm": "0.4 liters",
    "fuelRemaining": "40 liters",
    "siteDeployed": "Quarry Site C, Mangalore",
    "project": "Mining Expansion Project, Mangalore"
  },
  // ... (similar data for other vehicles)
  // Continue adding more vehicles as needed...
];

// table header
const columns: Column<Vehicle>[] = [
  {
    Header: "Asset Type",
    accessor: "assetType",
    width: 100,
    minWidth: 100,

  },
  {
    Header: "Asset Make",
    accessor: "assetMake",
    width: 100,
    minWidth: 100,
  },
  {
    Header: "Asset Model",
    accessor: "assetModel",
    width: 100,
    minWidth: 100,
  },
  {
    Header: "Vehicle Registration Number",
    accessor: "vehicleRegistrationNumber",
    width: 500,
    minWidth: 500,

  },
  {
    Header: "Ownership Type",
    accessor: "ownershipType",
    width: 100,
    minWidth: 100,
  },
  {
    Header: "Owner Name",
    accessor: "ownerName",
    width: 100,
    minWidth: 100,
  },
  {
    Header: "Owner Number",
    accessor: "ownerNumber",
    width: 100,
    minWidth: 100,
  },
  {
    Header: "Operator Name",
    accessor: "operatorName",
    width: 100,
    minWidth: 100,
  },
  {
    Header: "Operator Number",
    accessor: "operatorNumber",
    width: 100,
    minWidth: 100,
  },
  {
    Header: "Current Status",
    accessor: "currentStatus",
    width: 100,
    minWidth: 100,
  },
  {
    Header: "Idle Time",
    accessor: "idleTime",
    width: 100,
    minWidth: 100,
  },
  {
    Header: "Uptime",
    accessor: "uptime",
    width: 100,
    minWidth: 100,
  },
  {
    Header: "Downtime",
    accessor: "downtime",
    width: 100,
    minWidth: 100,
  },
  {
    Header: "Fuel Consumption Per Hr",
    accessor: "fuelConsumptionPerHr",
    width: 100,
    minWidth: 100,
  },
  {
    Header: "Fuel Consumption Per KM",
    accessor: "fuelConsumptionPerKm",
    width: 100,
    minWidth: 100,
  },
  {
    Header: "Fuel Remaining",
    accessor: "fuelRemaining",
    width: 100,
    minWidth: 100,
  },
  {
    Header: "Site Deployed",
    accessor: "siteDeployed",
    width: 100,
    minWidth: 100,

  },
  {
    Header: "Project",
    accessor: "project",
    width: 100,
    minWidth: 100,
  },

];

const DataTableAnalytics = (
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
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);


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

      <div className="overflow-x-auto">
        <table
          {...getTableProps()}
          className="datatable-table datatable-one w-full table-auto !border-collapse overflow-hidden break-words px-4  md:overflow-auto md:px-8"
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
                    className="min-w-[100px]"
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
                    const isRegistrationNumberCell = cell.column.Header === "Vehicle Registration Number";
                    return (
                      <td {...cell.getCellProps()} key={key}>
                        {isRegistrationNumberCell ? (
                          <a
                            href="#"
                            style={{ color: "blue", textDecoration: "underline" }}
                            onClick={() => {
                              // Handle the click event (e.g., open the modal)
                              // You can fetch vehicle-specific data here
                              // For now, let's assume the data is already available
                              console.log("Clicked on registration number:", cell.value);
                              setShowModal(true)
                            }}
                          >
                            {cell.render("Cell")}
                          </a>

                        ) : (
                          cell.render("Cell")
                        )}
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
      <Modal isOpen={showModal} onClose={handleCloseModal}>
        <>
          <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
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
          </div>



        </>
      </Modal>
    </section>
  );
};

export default DataTableAnalytics;
