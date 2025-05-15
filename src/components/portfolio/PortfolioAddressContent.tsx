"use client";

import { FC } from 'react';
import { useConnection } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { useQuery } from '@tanstack/react-query';

interface Props {
  address: string;
}

export const PortfolioAddressContent: FC<Props> = ({ address }) => {
  const { connection } = useConnection();

  const { data: solPrice } = useQuery({
    queryKey: ['solPrice'],
    queryFn: async () => {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
      const data = await response.json();
      return data.solana.usd;
    },
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    refetchInterval: false,
    staleTime: Infinity,
  });

  const { data: balance, isLoading, error } = useQuery({
    queryKey: ['balance', address],
    queryFn: async () => {
      try {
        const publicKey = new PublicKey(address);
        const balance = await connection.getBalance(publicKey);
        return balance / LAMPORTS_PER_SOL;
      } catch (error) {
        console.error('Error fetching balance:', error);
        throw error;
      }
    },
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    refetchInterval: false,
    staleTime: Infinity,
  });

  const portfolioValue = (balance || 0) * (solPrice || 0);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg bg-red-50 shadow overflow-hidden">
        <div className="p-4">
          <p className="text-center text-red-600">
            Error loading portfolio. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Address Details</h2>
        <p className="font-mono text-sm bg-muted p-2 rounded">
          {address}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Portfolio Value Card */}
        <div className="p-6 rounded-lg bg-card shadow">
          <h2 className="text-xl font-semibold mb-2">Total Portfolio Value</h2>
          <p className="text-3xl font-bold">${portfolioValue.toFixed(2)}</p>
          <p className="text-sm text-muted-foreground">SOL Price: ${solPrice?.toFixed(2)}</p>
        </div>

        {/* SOL Balance Card */}
        <div className="p-6 rounded-lg bg-card shadow">
          <h2 className="text-xl font-semibold mb-2">SOL Balance</h2>
          <p className="text-3xl font-bold">{(balance || 0).toFixed(4)} SOL</p>
          <p className="text-sm text-muted-foreground">≈ ${((balance || 0) * (solPrice || 0)).toFixed(2)}</p>
        </div>

        {/* Assets Count Card */}
        <div className="p-6 rounded-lg bg-card shadow">
          <h2 className="text-xl font-semibold mb-2">Total Assets</h2>
          <p className="text-3xl font-bold">1</p>
        </div>
      </div>

      {/* Asset List Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Assets</h2>
        <div className="rounded-lg bg-card shadow overflow-hidden">
          <div className="p-4">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Asset</th>
                  <th className="text-right p-2">Balance</th>
                  <th className="text-right p-2">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">SOL</td>
                  <td className="text-right p-2">{(balance || 0).toFixed(4)}</td>
                  <td className="text-right p-2">${((balance || 0) * (solPrice || 0)).toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}; 