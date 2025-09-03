import IconSkeleton from "@/app/ui/dashboard/Skeletons/IconSkeleton";

export default function CardDashboardSkeleton({
  borderColor,
}: {
  borderColor: string;
}) {
  return (
    <div
      className={`border-1 border-gray-300 border-l-4 bg-gray-100 px-5 py-10 rounded-lg shadow-md ${borderColor} animate-pulse`}
    >
      <div className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="h-full flex flex-col space-y-2">
          <div className="rounded-sm h-2 w-13 bg-gray-500 animate-pulse"></div>
          <div className="h-9 w-6 bg-gray-500 rounded-sm mb-2 animate-pulse"></div>
        </div>
        <IconSkeleton className="bg-gray-500 h-10 w-8" />
      </div>
    </div>
  );
}
