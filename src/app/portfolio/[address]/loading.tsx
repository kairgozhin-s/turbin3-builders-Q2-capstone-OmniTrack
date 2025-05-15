export default function PortfolioLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="h-12 w-48 bg-muted animate-pulse rounded" />
        <div className="h-8 w-96 bg-muted animate-pulse rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* SOL Balance Card Skeleton */}
        <div className="p-6 rounded-lg bg-card shadow">
          <div className="h-6 w-32 bg-muted animate-pulse rounded mb-4" />
          <div className="h-8 w-24 bg-muted animate-pulse rounded mb-2" />
          <div className="h-4 w-16 bg-muted animate-pulse rounded" />
        </div>

        {/* Token Count Card Skeleton */}
        <div className="p-6 rounded-lg bg-card shadow">
          <div className="h-6 w-32 bg-muted animate-pulse rounded mb-4" />
          <div className="h-8 w-24 bg-muted animate-pulse rounded" />
        </div>

        {/* NFT Count Card Skeleton */}
        <div className="p-6 rounded-lg bg-card shadow">
          <div className="h-6 w-32 bg-muted animate-pulse rounded mb-4" />
          <div className="h-8 w-24 bg-muted animate-pulse rounded" />
        </div>
      </div>

      {/* Token List Section Skeleton */}
      <section className="mt-12">
        <div className="h-8 w-32 bg-muted animate-pulse rounded mb-6" />
        <div className="rounded-lg bg-card shadow overflow-hidden">
          <div className="p-4">
            <div className="h-6 w-64 bg-muted animate-pulse rounded mx-auto" />
          </div>
        </div>
      </section>

      {/* NFT List Section Skeleton */}
      <section className="mt-12">
        <div className="h-8 w-32 bg-muted animate-pulse rounded mb-6" />
        <div className="rounded-lg bg-card shadow overflow-hidden">
          <div className="p-4">
            <div className="h-6 w-64 bg-muted animate-pulse rounded mx-auto" />
          </div>
        </div>
      </section>
    </div>
  );
} 