# OmniTrack 2.0 - Solana Portfolio Tracker

A modern, efficient Solana portfolio tracking application that allows users to monitor their entire Solana ecosystem portfolio in one place.

## Features

- 🔐 **Authentication & User Management**
  - Wallet connection (Phantom)
  - Session management
  - User preferences storage

- 📊 **Portfolio Dashboard**
  - Real-time portfolio value display
  - Asset allocation visualization
  - Performance metrics (24h, 7d, 30d, ALL)
  - Price change indicators

- 💰 **Asset Tracking**
  - Native SOL balance
  - SPL tokens with real-time prices
  - NFT holdings with floor prices
  - Transaction history

- 🏦 **DeFi Integration**
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

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/omnitrack.git
   cd omnitrack
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Fill in your environment variables in the `.env` file.

4. Initialize the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/omnitrack"

# Solana RPC
NEXT_PUBLIC_SOLANA_RPC_ENDPOINT="turbine-solanad-1176"
NEXT_PUBLIC_SOLANA_RPC_TOKEN="fb59aa59-6117-46f0-8657-236aa21dfe5b"
```

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

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
