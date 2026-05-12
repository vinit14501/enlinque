export default function BlogHero() {
  return (
    <section className="bg-[#000048] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <span className="inline-block bg-white/10 text-white/80 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5 animate-fade-in-up animate-stagger-1">
            Insights &amp; Resources
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-fade-in-up animate-stagger-2">
            Ideas that move
            <br className="hidden sm:block" />
            business forward.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed animate-fade-in-up animate-stagger-3">
            Strategy, technology, and growth — for businesses that move fast.
            Expert insights from the Enlinque team, published regularly.
          </p>
        </div>
      </div>
    </section>
  );
}
