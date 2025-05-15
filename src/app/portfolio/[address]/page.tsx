import { Metadata } from 'next';
import { config } from '@/lib/config';

interface Props {
  params: {
    address: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Portfolio ${params.address} | ${config.app.name}`,
    description: `View portfolio details for ${params.address}`,
  };
}

export default function PortfolioPage({ params }: Props) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Portfolio</h1>
        <p className="font-mono text-sm bg-muted p-2 rounded">
          {params.address}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* SOL Balance Card */}
        <div className="p-6 rounded-lg bg-card shadow">
          <h2 className="text-xl font-semibold mb-2">SOL Balance</h2>
          <p className="text-3xl font-bold">0.00 SOL</p>
          <p className="text-sm text-muted-foreground">$0.00</p>
        </div>

        {/* Token Count Card */}
        <div className="p-6 rounded-lg bg-card shadow">
          <h2 className="text-xl font-semibold mb-2">SPL Tokens</h2>
          <p className="text-3xl font-bold">0</p>
        </div>

        {/* NFT Count Card */}
        <div className="p-6 rounded-lg bg-card shadow">
          <h2 className="text-xl font-semibold mb-2">NFTs</h2>
          <p className="text-3xl font-bold">0</p>
        </div>
      </div>

      {/* Token List Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Tokens</h2>
        <div className="rounded-lg bg-card shadow overflow-hidden">
          <div className="p-4">
            <p className="text-center text-muted-foreground">
              No tokens found
            </p>
          </div>
        </div>
      </section>

      {/* NFT List Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">NFTs</h2>
        <div className="rounded-lg bg-card shadow overflow-hidden">
          <div className="p-4">
            <p className="text-center text-muted-foreground">
              No NFTs found
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 