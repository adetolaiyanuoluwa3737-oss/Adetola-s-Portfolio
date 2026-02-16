import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <div className="max-w-[665px] mx-auto px-6 text-center">
        <h1 className="text-[clamp(2.0625rem,1.4914rem+2.4365vi,3.5625rem)] font-normal text-charcoal mb-6 leading-[1.15]">
          404 - Page Not Found
        </h1>
        <p className="text-[1.1875rem] text-dark-brown leading-[1.4] mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 text-[1rem] bg-accent text-cream hover:bg-warm-brown transition-all rounded font-medium"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
