"use client";
import { Icon } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/AllIcons.js";
import "@ui5/webcomponents-icons/document-text.js";
import "@ui5/webcomponents-icons/away.js";
import "@ui5/webcomponents-icons/accept.js";
import "@ui5/webcomponents-icons/decline.js";
import { useStore } from "../store/StoreContext";
import { CardDashboardSkeleton } from "../dashboard/Skeletons/CardDashboardSkeleton";

type CardDashboardProps = {
  title: string;
  icon: string;
  number: string | number;
  borderColor: string;
};

const CardDashboard = ({
  title,
  icon,
  number,
  borderColor,
}: CardDashboardProps) => {
  const { loading } = useStore();
  if (loading) {
    return <CardDashboardSkeleton borderColor={borderColor} />;
  }
  const color = borderColor.substring(9);
  return (
    <div
      className={`border-1 border-gray-300 border-l-4 bg-white px-5 py-10 rounded-lg shadow-md ${borderColor}`}
    >
      <div className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="h-full flex flex-col">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="text-2xl font-bold">{number}</div>
        </div>
        <Icon className={`h-7 w-7 text-${color}`} name={icon} />
      </div>
    </div>
  );
};

export { CardDashboard };
