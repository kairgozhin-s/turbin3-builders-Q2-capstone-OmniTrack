# OmniTrack - Solana Portfolio Tracker

A modern, efficient Solana portfolio tracking application that allows users to monitor their entire Solana ecosystem portfolio in one place.

## Features

 **Authentication & User Management**
  - Wallet connection (Phantom)
  - Session management
  - User preferences storage

   **Portfolio Dashboard**
  - Real-time portfolio value display
  - Asset allocation visualization
  - Performance metrics (24h, 7d, 30d, ALL)
  - Price change indicators

   **Asset Tracking**
  - Native SOL balance
  - SPL tokens with real-time prices
  - NFT holdings with floor prices
  - Transaction history

   **DeFi Integration**
  - Liquidity positions tracking
  - Staking positions
  - Yield farming positions
  - APY/APR displays

## Tech Stack

- **Frontend**
  - Next.js 14 with App Router
  - TypeScript
  - TailwindCSS with shadcn/ui components
  - React Query for data fetching
  - Jotai for state management

- **Blockchain Integration**
  - @solana/web3.js
  - @solana/wallet-adapter
  - Triton RPC endpoint integration

- **Data Management**
  - Prisma with PostgreSQL
  - Redis for caching (optional)


## Project Structure

```
omnitrack/
├── app/
│ ├── (auth)/
│ │ ├── sign-in/
│ │ └── sign-out/
│ ├── dashboard/
│ │ ├── page.tsx
│ │ └── loading.tsx
│ ├── portfolio/
│ │ └── [address]/
│ └── layout.tsx
├── components/
│ ├── ui/
│ ├── portfolio/
│ └── shared/
├── lib/
│ ├── hooks/
│ ├── utils/
│ └── config.ts
├── types/
│ └── index.ts
└── prisma/
  └── schema.prisma
```
