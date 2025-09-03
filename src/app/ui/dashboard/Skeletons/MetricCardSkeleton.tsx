import IconSkeleton from "./IconSkeleton";

export default function MetricCardSkeleton({
  borderColor,
}: {
  borderColor: string;
}) {
  return (
    <div
      className={`border-1 border-gray-300 border-l-4 bg-gray-200 px-5 py-10 rounded-lg shadow-md animate-pulse ${borderColor}`}
    >
      <div className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="rounded-sm h-2 w-10 bg-gray-500 animate-pulse"></div>
        <IconSkeleton className="bg-gray-500 h-5 w-5" />
      </div>
      <div className="h-full flex flex-col">
        <div className="h-7 w-5 bg-gray-500 rounded-sm mb-2 animate-pulse"></div>
        <div className="h-2 w-20 bg-gray-500 animate-pulse"></div>
      </div>
    </div>
  );
}
