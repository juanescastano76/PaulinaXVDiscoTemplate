"use client";

import { CountdownSection } from "@/components/invitation/countdown-section";
import { GuestSection } from "@/components/invitation/guest-section";
import { EventSection } from "@/components/invitation/event-section";
import { PhotoGridSection } from "@/components/invitation/photo-grid-section";
import { PartySection } from "@/components/invitation/party-section";
import { GiftsSection } from "@/components/invitation/gifts-section";
import { MusicPlayer } from "@/components/invitation/music-player";
import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () =>
    import("@/components/invitation/hero-section").then(
      (mod) => mod.HeroSection,
    ),
  {
    ssr: false,
  },
);

const FooterSection = dynamic(
  () =>
    import("@/components/invitation/footer-section").then(
      (mod) => mod.FooterSection,
    ),
  {
    ssr: false,
  },
);

export default function InvitationPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <CountdownSection />
      <GuestSection />
      <EventSection />
      <PhotoGridSection />
      <PartySection />
      <MusicPlayer />
      <GiftsSection />
      <FooterSection />
    </main>
  );
}
