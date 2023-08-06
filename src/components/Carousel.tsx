import { Avatar } from "@chakra-ui/react";
import "../css/Carousel.css";

function Carousel() {
  const sections = [
    "Roupas",
    "Viagens",
    "Açai",
    "Forro",
    "Mecânica",
    "Cosméticos",
    "Soldagem",
    "Celulares",
    "Pizzaria",
  ];

  return (
    <section className="carousel__main-container">
      {Object.values(sections).map((sectionName) => {
        return (
          <button className="carousel__section-container">
            <Avatar size="xl" />
            <span>{sectionName}</span>
          </button>
        );
      })}
    </section>
  );
}

export default Carousel;
