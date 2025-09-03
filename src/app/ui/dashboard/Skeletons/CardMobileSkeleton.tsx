
export default function CardMobileSkeleton () {
    const sk = "bg-gray-200 dark:bg-gray-700";

    return (
      <div className="w-full bg-white rounded-lg shadow-md py-8 px-4 mb-4" role="status" aria-live="polite">
        <div className="animate-pulse">
          {/* Top row: avatar + name/date | status button */}
          <div className="flex flex-row justify-between">
            <div className="flex space-x-3">
              <div className={`h-10 w-10 rounded-full ${sk}`} aria-hidden />
              <div className="leading-tight space-y-1.5 mt-0.5">
                <div className={`h-3 w-28 rounded ${sk}`} aria-hidden />   
                <div className={`h-2.5 w-40 rounded ${sk}`} aria-hidden />
              </div>
            </div>
            <div className={`h-8 w-24 rounded-md ${sk}`} aria-hidden />   
          </div>
  
          {/* Body */}
          <div className="mt-4 space-y-3">
            {/* Type */}
            <div className="flex items-center justify-between">
              <div className={`h-3 w-16 rounded ${sk}`} aria-hidden />      
              <div className={`h-4 w-28 rounded ${sk}`} aria-hidden />      
            </div>
  
            {/* Duration (dates) */}
            <div className="flex items-center justify-between">
              <div className={`h-3 w-20 rounded ${sk}`} aria-hidden />
              <div className={`h-4 w-40 rounded ${sk}`} aria-hidden />
            </div>
  
            {/* Days */}
            <div className="flex items-center justify-between">
              <div className={`h-3 w-20 rounded ${sk}`} aria-hidden />
              <div className={`h-4 w-16 rounded ${sk}`} aria-hidden />
            </div>
  
            {/* Reason (label + paragraph) */}
            <div>
              <div className={`h-3 w-16 rounded mb-2 ${sk}`} aria-hidden />
              <div className={`h-4 w-full rounded ${sk}`} aria-hidden />
            </div>
          </div>
        </div>
      </div>
    );
}