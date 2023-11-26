import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import FirstFurnitureCards from "./components/FirstFurnitnureCards/FirstFurnitureCards";
import CraftedSection from "./components/CraftedSection/CraftedSection";
import QualitySection from "./components/QualitySection/QualitySection";
import SecondFurnitureCards from "./components/SecondFurnitureCards/SecondFurnitureCards";
import ComfortableSection from "./components/ComfortableSection/ComfortableSection";
import SatisfactionSection from "./components/SatisfactionSection/SatisfactionSection";
import GallerySection from "./components/GallerySection/GallerySection";
import CustomerSection from "./components/CustomerSection/CustomerSection";
import SubscribeSection from "./components/SubscribeSection/SubscribeSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <FirstFurnitureCards />
      <CraftedSection />
      <QualitySection />
      <SecondFurnitureCards />
      <ComfortableSection />
      <SatisfactionSection />
      <GallerySection />
      <CustomerSection />
      <SubscribeSection />
      <Footer />
    </>
  );
}

export default App;
