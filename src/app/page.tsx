import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/dashboard');
  
  // This will never be rendered due to the redirect above,
  // but it's good practice to have a fallback
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
    </div>
  );
}
