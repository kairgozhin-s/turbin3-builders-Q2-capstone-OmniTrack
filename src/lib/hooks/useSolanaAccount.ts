import { useQuery } from '@tanstack/react-query';
import { getAccountBalance, getTokenAccounts } from '@/lib/utils/solana';

export function useSolanaAccount(address: string | undefined) {
  const { data: balance, isLoading: isBalanceLoading } = useQuery({
    queryKey: ['solana', 'balance', address],
    queryFn: () => (address ? getAccountBalance(address) : 0),
    enabled: !!address,
  });

  const { data: tokenAccounts, isLoading: isTokensLoading } = useQuery({
    queryKey: ['solana', 'tokens', address],
    queryFn: () => (address ? getTokenAccounts(address) : []),
    enabled: !!address,
  });

  return {
    balance: balance ?? 0,
    tokenAccounts: tokenAccounts ?? [],
    isLoading: isBalanceLoading || isTokensLoading,
  };
} 