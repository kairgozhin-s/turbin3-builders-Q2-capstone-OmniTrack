"use client";

import { Suspense } from 'react';
import { DashboardContent } from '@/components/dashboard/DashboardContent';

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      <Suspense fallback={<div className="animate-pulse">Loading...</div>}>
        <DashboardContent />
      </Suspense>
    </div>
  );
} 