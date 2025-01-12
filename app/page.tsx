import { EventPopup } from "@/components/EventPopup";
import Footer from "@/components/Footer";
import MeetOurTeam from "@/components/OurTeam";
import Slideshow from "@/components/Slideshow";
import Teachers from "@/components/Teachers";
import TestimonialSlider from "@/components/Testimonial";

export default function Home() {
  return (
    <div className=" mt-16 md:mt-10">
      <Slideshow />
      <EventPopup />
      <Teachers />
      <MeetOurTeam />
      <TestimonialSlider />
      <Footer />
    </div>
  );
}
