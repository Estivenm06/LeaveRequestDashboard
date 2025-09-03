"use client";
import { HeaderRowProps } from "@/app/src/lib/definitions";
import { Select, Option, Button } from "@ui5/webcomponents-react";
import { useStore } from "../../store/StoreContext";
import { TableFilterSkeleton } from "../Skeletons";

export default function TableFilter({
  handleStatus,
  handleOrder,
  orderStart,
}: HeaderRowProps) {
  const { loading } = useStore();
  if (loading) return <TableFilterSkeleton />;
  return (
    <div className="mb-6">
      <div className="py-10 px-5 shadow-md rounded-lg bg-white">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative">
            <div className="leading-tight">
              <h1 className="text-lg font-medium">Select Order</h1>
            </div>
            <div className="bg-sidebar-foreground inline-flex rounded-r-lg rounded-l-lg">
              <Button
                onClick={() => handleOrder(true)}
                className={`rounded-none font-semibold text-black text-md rounded-l-lg border ${
                  orderStart
                    ? "bg-sidebar-accent text-white border-gray-500 scale-98"
                    : "hover:bg-sidebar-accent hover:text-white bg-transparent border-gray-200"
                } transition-all duration-200`}
              >
                Ascending
              </Button>
              <Button
                onClick={() => handleOrder(false)}
                className={`rounded-none font-semibold text-black text-md rounded-r-lg border ${
                  !orderStart
                    ? "bg-sidebar-accent text-white border-gray-500 scale-98"
                    : "hover:bg-sidebar-accent hover:text-white bg-transparent border-gray-200 hover:scale-105"
                } transition-all duration-200`}
              >
                Descending
              </Button>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="leading-tight">
              <h1 className="text-lg font-medium">Filter by Status</h1>
            </div>
            <Select onChange={({ target }) => handleStatus(target.value)}>
              <Option value={"none"} selected>
                None
              </Option>
              <Option value="approved">Approved</Option>
              <Option value="pending">Pending</Option>
              <Option value="rejected">Rejected</Option>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
