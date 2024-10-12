import Footer from "@/components/Footer";
import MeetOurTeam from "@/components/OurTeam";
import Slideshow from "@/components/Slideshow";
import Teachers from "@/components/Teachers";

export default function Home() {
  return (
    <div className="mt-10">
      <Slideshow />
      <Teachers />
      <MeetOurTeam />
      <Footer />
    </div>
  );
}
