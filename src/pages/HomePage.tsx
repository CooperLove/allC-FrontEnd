import { useSelector } from "react-redux";
import { RootState } from "../store/index.ts";
import "../css/HomePage.css";
import Header from "../components/Header.tsx";
import Carousel from "../components/Carousel.tsx";
import SectionCard from "../components/SectionCard.tsx";
import "../css/SectionsContainer.css";

function HomePage() {
  const user = useSelector((state: RootState) => state.userData);
  console.log(user.data);
  return (
    <div className="homePage-Container">
      <Header />
      <Carousel />
      <div className="sectionsContainer__main-container">
        <SectionCard />
        <SectionCard />
        <SectionCard />
        <SectionCard />
        <SectionCard />
      </div>
    </div>
  );
}

export default HomePage;
