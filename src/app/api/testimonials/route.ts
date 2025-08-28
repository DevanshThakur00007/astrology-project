import { NextResponse } from "next/server";

export async function GET() {
  const testimonials = [
    {
      name: "Sophia Lee",
      feedback:
        "The session was life-changing! I got so much clarity about my career path.",
      imageUrl: "https://i.pravatar.cc/150?img=4",
    },
    {
      name: "David Kim",
      feedback: "Accurate predictions and very professional. Highly recommended.",
      imageUrl: "https://i.pravatar.cc/150?img=6",
    },
    {
      name: "Emma Watson",
      feedback:
        "I feel more confident about my future now. Amazing experience!",
      imageUrl: "https://i.pravatar.cc/150?img=3",
    },
  ];

  return NextResponse.json(testimonials);
}
