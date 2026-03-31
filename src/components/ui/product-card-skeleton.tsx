import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface ProductCardSkeletonProps {
  count?: number;
  className?: string;
}

export function ProductCardSkeleton({ count = 4, className }: ProductCardSkeletonProps) {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex flex-col space-y-4">
          <Skeleton className="w-full aspect-[3/4] bg-[#E5E1DA] rounded-none" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-2/3 bg-[#1a1a1a]/10 rounded-sm" />
            <Skeleton className="h-3 w-1/2 bg-[#1a1a1a]/10 rounded-sm" />
          </div>
        </div>
      ))}
    </div>
  );
}
