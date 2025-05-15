import { Metadata } from 'next';
import { config } from '@/lib/config';
import { PortfolioAddressContent } from '@/components/portfolio/PortfolioAddressContent';

type Props = {
  params: { address: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const metadata: Metadata = {
  title: `Portfolio | ${config.app.name}`,
  description: 'View detailed portfolio information',
};

export default function PortfolioAddressPage({ params }: Props) {
  const { address } = params;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Portfolio Details</h1>
      <PortfolioAddressContent address={address} />
    </div>
  );
} 