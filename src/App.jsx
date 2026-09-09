import { useState } from "react";
import { BookingModal, Footer, Header, Marquee, StickyBookButton } from "./chrome";
import {
  Blackbuck,
  Childhood,
  Events,
  Experience,
  FinalCall,
  Food,
  FourWords,
  Generations,
  Hero,
  Membership,
  MoreThanLand,
  Night,
  Overview,
  Stay,
  Sustainability,
  Wellness,
  WhyVibrantValley,
  YourLand,
} from "./sections";

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = () => setBookingOpen(true);

  return (
    <div className="bg-[#F5F2E8] min-h-screen">
      <Header onBookClick={openBooking} />
      <main>
        <Hero onBookClick={openBooking} />
        <Marquee />
        <Overview onBookClick={openBooking} />
        <MoreThanLand onBookClick={openBooking} />
        <FourWords />
        <Experience />
        <Generations />
        <Childhood />
        <Stay />
        <Wellness />
        <Night />
        <Food />
        <Events />
        <Sustainability />
        <Blackbuck />
        <YourLand />
        <WhyVibrantValley />
        <Membership />
        <FinalCall onBookClick={openBooking} />
      </main>
      <Footer />
      <StickyBookButton onBookClick={openBooking} />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
