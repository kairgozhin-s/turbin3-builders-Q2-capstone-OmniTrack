export const config = {
  solana: {
    network: 'devnet' as const,
    rpcEndpoint: 'https://api.devnet.solana.com',
  },
  app: {
    name: 'OmniTrack',
    description: 'Your all-in-one Solana portfolio tracker',
  },
} as const;

export type Config = typeof config; 