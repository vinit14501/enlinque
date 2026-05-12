import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogNewsletter from "@/components/blog/BlogNewsletter";
import ContactCta from "@/components/common/ContactCta";

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero — navy editorial banner */}
      <BlogHero />

      {/* Category filter + featured post + article grid + load more */}
      <BlogGrid />

      {/* Newsletter subscribe CTA */}
      <BlogNewsletter />

      {/* Site-wide contact CTA */}
      <ContactCta />
    </div>
  );
}
