import { Connection, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { config } from '@/lib/config';

export function createConnection() {
  return new Connection(config.solana.rpcEndpoint, {
    commitment: 'confirmed',
  });
}

export function lamportsToSol(lamports: number): number {
  return lamports / LAMPORTS_PER_SOL;
}

export function solToLamports(sol: number): number {
  return sol * LAMPORTS_PER_SOL;
}

export function shortenAddress(address: string, chars = 4): string {
  return `${address.slice(0, chars)}...${address.slice(-chars)}`;
}

export function isValidSolanaAddress(address: string): boolean {
  try {
    new PublicKey(address);
    return true;
  } catch {
    return false;
  }
}

export async function getAccountBalance(address: string): Promise<number> {
  try {
    const connection = createConnection();
    const publicKey = new PublicKey(address);
    const balance = await connection.getBalance(publicKey);
    return lamportsToSol(balance);
  } catch (error) {
    console.error('Error getting account balance:', error);
    return 0;
  }
}

export async function getTokenAccounts(address: string) {
  try {
    const connection = createConnection();
    const publicKey = new PublicKey(address);
    const accounts = await connection.getParsedTokenAccountsByOwner(publicKey, {
      programId: new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'),
    });
    return accounts.value;
  } catch (error) {
    console.error('Error getting token accounts:', error);
    return [];
  }
} 