import LocationPageTemplate from "@/components/layout/LocationPageTemplate";

export default function VideoEditingNoida() {
  return (
    <LocationPageTemplate
      title="Video Editing in Noida | Flexura — Professional Video Editor"
      description="Professional video editing services in Noida. Flexura creates reels, YouTube videos, ad creatives, corporate videos and social media content for Noida & NCR businesses."
      keywords="video editing noida, video editor noida, video production noida, reel editing noida, youtube video editor noida, corporate video noida, social media video noida, flexura video"
      canonicalSlug="video-editing-noida"
      h1="Video Editing in Noida — Flexura"
      intro="Flexura's video team creates scroll-stopping, professionally edited videos for Noida businesses. From Instagram Reels to YouTube and corporate films — we make content that converts."
      city="Noida"
      schemaServiceName="Video Editing"
      services={[
        { name: "Instagram Reels & Short Video Editing", description: "Trending reel edits with captions, music, and effects." },
        { name: "YouTube Video Editing", description: "Long-form edited videos with thumbnails and SEO optimization." },
        { name: "Ad Video Creatives", description: "High-impact 15–30 sec video ads for Google and Meta." },
        { name: "Corporate Video Production", description: "Professional company profile and brand story videos." },
        { name: "Product Demo Videos", description: "Showcase your product or service with engaging demo videos." },
        { name: "Testimonial Video Editing", description: "Polish client testimonials into trust-building video assets." },
      ]}
      highlights={[
        "Fast turnaround: 24–48 hours for Reels, 3–5 days for long-form",
        "Dedicated video editor assigned to your brand",
        "Unlimited revision rounds until you're satisfied",
        "All formats: 9:16, 16:9, 1:1, 4:5",
        "Subtitles, captions, and branding included",
      ]}
      areas="Sector 62, Sector 18, Film City, Noida Expressway, Greater Noida, Noida Extension, and all surrounding Noida and Delhi NCR areas."
    />
  );
}
