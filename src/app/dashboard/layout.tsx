import { Metadata } from 'next';
import { config } from '@/lib/config';

export const metadata: Metadata = {
  title: `Dashboard | ${config.app.name}`,
  description: 'View your Solana portfolio performance',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 