export default function IconSkeleton ({ className }: { className: string }) {
  return (
    <div
      className={`${className} w-4 h-4 rounded-md bg-gray-100 animate-pulse`}
    ></div>
  );
};
