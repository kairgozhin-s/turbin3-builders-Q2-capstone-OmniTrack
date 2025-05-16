import { Inter } from "next/font/google";
import "./globals.css";
import { config } from "@/lib/config";
import { WalletContextProvider } from "@/components/shared/WalletContextProvider";
import { QueryClientProvider } from "@/components/shared/QueryClientProvider";
import { Navigation } from "@/components/shared/Navigation";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: config.app.name,
  description: config.app.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider>
          <WalletContextProvider>
            <div className="min-h-screen flex flex-col">
              <Navigation />
              <Suspense fallback={<div className="flex-1 flex items-center justify-center">Loading...</div>}>
                <main className="flex-1">{children}</main>
              </Suspense>
            </div>
          </WalletContextProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
