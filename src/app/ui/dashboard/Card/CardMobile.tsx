import { Avatar } from "@ui5/webcomponents-react";

import { dateFormat, daysLeft } from "@/utils/helper";
import type { CardMobileProps } from "@/app/lib/definitions";
import { StatusBtn } from "../Table/StatusBtn";

const CardMobile = ({
  employee,
  handleUpdateStatusEmployee,
}: CardMobileProps) => {
  if(!employee) return null;

  return (
    <div className="w-full bg-white rounded-lg shadow-md py-8 px-4 mb-4">
      <div className="flex flex-row justify-between">
        <div className="flex space-x-3">
          <Avatar size="S" colorScheme="Accent10" />
          <div className="leading-tight">
            <p className="text-sm font-medium">{employee.name}</p>
            <span className="text-muted-foreground text-xs">
              Submitted {dateFormat(employee.createdAt)}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <StatusBtn
            handleClick={handleUpdateStatusEmployee}
            status={employee.status}
            id={employee.id}
          />
        </div>
      </div>
      <div className="mt-2">
        <div className="flex justify-between w-full mb-2">
          <span className="text-sm font-medium text-muted-foreground flex-1">
            Type:
          </span>
          <p className="text-sm capitalize py-0.5 px-1 border-1 border-gray-300 rounded-lg">
            {employee.type_of_leave}
          </p>
        </div>
        <div className="flex justify-between w-full mb-2">
          <span className="text-sm font-medium text-muted-foreground flex-1">
            Duration:
          </span>
          <p className="text-sm capitalize">
            {dateFormat(employee.date_from)} - {dateFormat(employee.date_to)}
          </p>
        </div>
        <div className="flex justify-between w-full mb-2">
          <span className="text-sm font-medium text-muted-foreground flex-1">
            Duration:
          </span>
          <p className="text-sm capitalize">
            {daysLeft(employee.date_from, employee.date_to)} days
          </p>
        </div>
        <div className="flex flex-col w-full mb-2">
          <span className="text-sm font-medium text-muted-foreground flex-1">
            Reason:
          </span>
          <p className="text-sm">{employee.reason}</p>
        </div>
      </div>
    </div>
  );
};

export { CardMobile };
