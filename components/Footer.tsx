import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif font-bold text-lg mb-3">Adetola Iyanuoluwa</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              B2B SaaS content writer helping brands get found online and turn visibility into customers.
            </p>
          </div>

          <div>
            <nav className="flex flex-col gap-2">
              {[
                { href: '/blog', label: 'Blog' },
                { href: '/work', label: 'Work' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/in/iyanuoluwaadetola/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/adetola"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Twitter / X
              </a>
              <a
                href="mailto:adetolaiyanuoluwa3737@gmail.com"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Adetola Iyanuoluwa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
