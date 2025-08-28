import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    title: "Unlock Your Cosmic Destiny",
    subtitle: "Book sessions with expert astrologers and discover your true path.",
    ctaText: "Book Now",
    ctaLink: "/book",
   imageUrl: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&h=400&q=80",
    badges: [
      { label: "10k+ Sessions", icon: "Star" },
      { label: "Rated 4.9/5", icon: "ThumbsUp" },
      { label: "Verified Expert", icon: "ShieldCheck" },
    ],
  });
}
