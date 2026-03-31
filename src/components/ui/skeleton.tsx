import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse bg-[#1a1a1a]/8 rounded-md", className)}
      {...props}
    />
  );
}

export { Skeleton };
