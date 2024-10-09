import Footer from "@/components/Footer";
import MeetOurTeam from "@/components/OurTeam";
import Slideshow from "@/components/Slideshow";
import Teachers from "@/components/Teachers";

export default function Home() {
  return (
    <div>
      <Slideshow />
      <Teachers />
      <MeetOurTeam />
      <Footer />
    </div>
  );
}
