import { FC } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Token {
  mint: string;
  amount: number;
  decimals: number;
  symbol?: string;
  name?: string;
  logoURI?: string;
}

interface Props {
  tokens: Token[];
  isLoading?: boolean;
  className?: string;
}

export const TokenList: FC<Props> = ({ tokens, isLoading, className }) => {
  if (isLoading) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>Tokens</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center space-x-4 animate-pulse"
              >
                <div className="h-10 w-10 rounded-full bg-muted" />
                <div className="space-y-2 flex-1">
                  <div className="h-4 w-24 bg-muted rounded" />
                  <div className="h-3 w-16 bg-muted rounded" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!tokens.length) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>Tokens</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">
            No tokens found
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Tokens</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tokens.map((token) => (
            <div key={token.mint} className="flex items-center space-x-4">
              {token.logoURI ? (
                <div className="relative h-10 w-10">
                  <Image
                    src={token.logoURI}
                    alt={token.symbol || token.mint}
                    fill
                    className="rounded-full object-cover"
                    unoptimized
                  />
                </div>
              ) : (
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                  {(token.symbol || token.mint.slice(0, 2)).toUpperCase()}
                </div>
              )}
              <div>
                <p className="font-medium">
                  {token.symbol || token.name || token.mint}
                </p>
                <p className="text-sm text-muted-foreground">
                  {(token.amount / Math.pow(10, token.decimals)).toLocaleString()} tokens
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}; 