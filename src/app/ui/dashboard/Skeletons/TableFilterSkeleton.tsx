export default function TableFilterSkeleton () {
  return (
    <div className="mb-6">
      <div className="py-10 px-5 shadow-md rounded-lg bg-gray-200 animate-pulse">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col">
            <div className="w-25 h-5 bg-gray-500 animate-pulse rounded-sm mb-2"></div>
            <div className="bg-gray-500 inline-flex rounded-lg h-10 w-50 animate-pulse"></div>
          </div>
          <div className="flex flex-col">
            <div className="w-25 h-5 bg-gray-500 animate-pulse rounded-sm mb-2"></div>
            <div className="bg-gray-500 inline-flex rounded-lg h-10 w-50 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
