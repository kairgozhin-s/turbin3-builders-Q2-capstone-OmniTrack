export default function DashboardLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="animate-pulse">
        <div className="h-8 w-48 bg-muted rounded mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-6 rounded-lg bg-card shadow">
              <div className="h-6 w-32 bg-muted rounded mb-2"></div>
              <div className="h-8 w-24 bg-muted rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 