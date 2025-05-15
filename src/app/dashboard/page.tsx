import { Metadata } from 'next';
import { config } from '@/lib/config';
import { DashboardContent } from '@/components/dashboard/DashboardContent';

export const metadata: Metadata = {
  title: `Dashboard | ${config.app.name}`,
  description: 'View your Solana portfolio performance',
};

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      <DashboardContent />
    </div>
  );
} 