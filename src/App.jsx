import Contact from "./components/Contact";
import ElectricalPhotoAlbum from "./components/ElectricalPhotoAlbum";
import Hero from "./components/Hero";
import LogoClouds from "./components/LogoClouds";
import NavBar from "./components/NavBar";
import PaintingPhotoAlbum from "./components/PaintingPhotoAlbum";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="p-2 md:px-10">
      <NavBar />
      <Hero />
      <LogoClouds />
      <Services />
      <Testimonial />
      <Team />
      <Contact />
      <ElectricalPhotoAlbum />
      <PaintingPhotoAlbum />
    </div>
  );
}

export default App;
