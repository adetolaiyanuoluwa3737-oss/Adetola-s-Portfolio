'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: 'https://adetolaiyanuoluwa.hashnode.dev/portfolio', label: 'Work', external: true },
    { href: 'https://adetolaiyanuoluwa.hashnode.dev', label: 'Blog', external: true },
  ];

  return (
    <nav className="border-b border-sand bg-background sticky top-0 z-50">
      <div className="max-w-[1360px] mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-[1.1875rem] font-serif text-charcoal hover:text-accent transition-colors">
            Adetola Iyanuoluwa
          </Link>

          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[1rem] text-dark-brown hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-[1rem] transition-colors ${
                      pathname === link.href
                        ? 'text-accent font-medium'
                        : 'text-dark-brown hover:text-accent'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
