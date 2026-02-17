'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        {/* Headline */}
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-black text-[#1A1A1A] leading-[1.1] mb-8 transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Your website is invisible.{' '}
          <span className="text-[#FF6B45]">Let's fix that.</span>
        </h1>

        {/* Sub-copy */}
        <p
          className={`text-lg md:text-xl text-[#334155] leading-relaxed mb-8 max-w-2xl transition-all duration-700 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Every day, potential customers search for what you offer. But they're finding your
          competitors because your content isn't ranking, isn't resonating, or doesn't exist yet.
        </p>

        <p
          className={`text-lg md:text-xl font-semibold text-[#1A1A1A] mb-12 transition-all duration-700 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          I write content that gets found, gets read, and gets results.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-wrap gap-4 transition-all duration-700 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href="https://www.linkedin.com/in/iyanuoluwaadetola/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF6B45] text-white font-semibold rounded-lg hover:bg-[#E85A35] transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-orange-500/25"
          >
            Book a call
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#E2E8F0] text-[#1A1A1A] font-semibold rounded-lg hover:border-[#FF6B45] hover:text-[#FF6B45] transition-all duration-200"
          >
            See my work
          </Link>
        </div>
      </div>
    </section>
  );
}
