import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#0f0a15] to-[#302642] text-white">
      <div className="flex flex-col items-center gap-6 p-10 rounded-2xl bg-black/60 shadow-2xl border border-white/10 max-w-md w-full">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-lg">404</h1>
        </div>
        <p className="text-lg text-gray-200 text-center">Oops! The page you are looking for doesn’t exist or has been moved.</p>
        <Link href="/" className="mt-4 px-6 py-3 bg-gradient-to-r from-secondary via-secondary/80 to-secondary/60 text-black font-bold rounded-full shadow-md hover:scale-105 hover:brightness-110 transition-all duration-200">Go Home</Link>
      </div>
    </div>
  );
}
