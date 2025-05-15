"use client";

import { FC } from 'react';
import Link from 'next/link';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { config } from '@/lib/config';

export const Navigation: FC = () => {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              {config.app.name}
            </Link>
            <div className="ml-10 flex items-center space-x-4">
              <Link
                href="/dashboard"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Dashboard
              </Link>
              <Link
                href="/portfolio"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Portfolio
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <WalletMultiButton />
          </div>
        </div>
      </div>
    </nav>
  );
}; 