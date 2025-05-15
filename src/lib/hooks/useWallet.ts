import { useWallet as useSolanaWallet } from '@solana/wallet-adapter-react';
import { useCallback } from 'react';
import { shortenAddress } from '@/lib/utils/solana';

export function useWallet() {
  const {
    publicKey,
    connected,
    connecting,
    disconnect,
    select,
    wallets,
    wallet,
  } = useSolanaWallet();

  const address = publicKey?.toBase58();
  const shortAddress = address ? shortenAddress(address) : undefined;

  const connect = useCallback(
    async (walletName: string) => {
      const selectedWallet = wallets.find((w) => w.adapter.name === walletName);
      if (selectedWallet) {
        select(selectedWallet.adapter.name);
      }
    },
    [select, wallets]
  );

  return {
    address,
    shortAddress,
    connected,
    connecting,
    connect,
    disconnect,
    wallets,
    wallet,
  };
} 