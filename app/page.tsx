import Footer from "@/components/Footer";
import MeetOurTeam from "@/components/OurTeam";
import Slideshow from "@/components/Slideshow";
import Teachers from "@/components/Teachers";
import TestimonialSlider from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="mt-10">
      <Slideshow />
      <Teachers />
      <MeetOurTeam />
      <TestimonialSlider />
      <Footer />
    </div>
  );
}
