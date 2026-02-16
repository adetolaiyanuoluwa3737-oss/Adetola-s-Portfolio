export default function Hero() {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center bg-beige border-b border-sand">
      <div className="max-w-[665px] mx-auto px-6 text-center">
        <h1 className="font-normal text-charcoal mb-6">
          Adetola Iyanuoluwa
        </h1>
        <p className="text-[clamp(1.75rem,1.4645rem+1.2183vi,2.5rem)] text-warm-brown font-light mb-8 leading-[1.2]">
          Content That Connects, Converts, and Ranks
        </p>
        <div className="max-w-xl mx-auto">
          <p className="text-[1.1875rem] text-dark-brown leading-[1.4]">
            B2B SaaS content writer transforming complex technical concepts into
            clear, engaging stories that educate, sell, and rank.
          </p>
        </div>
      </div>
    </section>
  );
}
