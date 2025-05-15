"use client";

import { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Props {
  title: string;
  value: string | number;
  change?: number;
  className?: string;
}

export const PortfolioCard: FC<Props> = ({ title, value, change, className }) => {
  const changeColor = change === undefined
    ? undefined
    : change >= 0
      ? 'text-green-500'
      : 'text-red-500';

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
        {change !== undefined && (
          <p className={cn('text-sm mt-2', changeColor)}>
            {change >= 0 ? '+' : ''}{change.toFixed(2)}%
          </p>
        )}
      </CardContent>
    </Card>
  );
}; 