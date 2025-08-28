# Astrology project

A responsive landing page for an astrology platform, built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **ShadCN UI** components. The project includes dynamic Hero Section and Client Testimonials fetched from mock APIs, along with static sections for statistics, services, and special offers.

---





---

## **Features**

- **Hero Section (API Driven)**: Fetches title, subtitle, CTA button, astrologer image, and trust badges dynamically from `/api/hero`.
- **Client Testimonials Carousel**: Responsive carousel using `swiper.js`, displaying client feedback from `/api/testimonials`.
- **Statistics Section**: Showcases platform achievements (sessions, experience, clients, support).
- **Services Section**: Grid of cards detailing services like Career Guidance, Relationship Insights, Daily Horoscope, and Spiritual Healing.
- **Offer Section**: Countdown timer with CTA button.
- **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop.
- **Dark Mode Support**: Implemented using Tailwind’s `dark:` variant.
- **Accessibility**: Semantic HTML, alt attributes, and ARIA considerations.
- **Modular Components**: Hero, Stats, Services, Testimonials, Offer.

---

## **Tech Stack**

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, ShadCN UI components
- **Icons**: [lucide-react](https://lucide.dev/)
- **Carousel**: [Swiper.js](https://swiperjs.com/)
- **API**: Mock APIs under `src/pages/api/`

---

## **Folder Structure**

astro-landing-page/
├─ src/
│ ├─ app/
│ │ ├─ api/
│ │ │ ├─ hero.ts
│ │ │ └─ testimonials.ts
│ │ └─ book/
│ │ └─ page.tsx
│ ├─ components/
│ │ └─ landing/
│ │ ├─ Hero.tsx
│ │ ├─ Stats.tsx
│ │ ├─ Services.tsx
│ │ ├─ Testimonials.tsx
│ │ └─ Offer.tsx
│ ├─ lib/
│ │ └─ utils.ts
│ ├─ style/
│ │ └─ globals.css
│ └─ types/
│ └─ index.ts
├─ public/
│ └─ images/
├─ package.json
├─ tailwind.config.js
├─ next.config.js
└─ README.md


---

## **Installation**

1. **Clone the repository**

```bash
git clone https://github.com/DevanshThakur00007/astro-landing-page.git
cd astro-landing-page

Contact

Author: Devansh Singh

Email: thakurdevansh298@gmail.com

GitHub: github.com/DevanshThakur00007