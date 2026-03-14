import { NewHeader } from "./components/NewHeader";
import { NewHero } from "./components/NewHero";
import { CallToAction } from "./components/CallToAction";
import { Announcements } from "./components/Announcements";
import { UpcomingEvents } from "./components/UpcomingEvents";
import { About } from "./components/About";
import { Amenities } from "./components/Amenities";
import { Gallery } from "./components/Gallery";
import { FastFacts } from "./components/FastFacts";
import { PresidentMessage } from "./components/PresidentMessage";
import { Newsletter } from "./components/Newsletter";
import { Location } from "./components/Location";
import { Contact } from "./components/Contact";
import { NewFooter } from "./components/NewFooter";

export default function App() {
  return (
    <div className="min-h-screen">
      <NewHeader />
      <main>
        <NewHero />
        <CallToAction />
        <Announcements />
        <UpcomingEvents />
        <About />
        <Amenities />
        <Gallery />
        <FastFacts />
        <PresidentMessage />
        <Newsletter />
        <Location />
        <Contact />
      </main>
      <NewFooter />
    </div>
  );
}