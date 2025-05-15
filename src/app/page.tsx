import { ConnectWallet } from '@/components/shared/ConnectWallet';
import { WalletConnectionHandler } from '@/components/shared/WalletConnectionHandler';
import { config } from '@/lib/config';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <WalletConnectionHandler />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Welcome to {config.app.name}
        </h1>
        <p className="text-center mb-8">
          {config.app.description}
        </p>
        <div className="flex justify-center">
          <ConnectWallet />
        </div>
      </div>
    </main>
  );
}
