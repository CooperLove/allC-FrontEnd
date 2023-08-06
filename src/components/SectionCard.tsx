import { useState } from "react";
import "../css/SectionCard.css";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

function SectionCard() {
  const [isCardExpanded, setIsCardExpanded] = useState(false);
  const expandCard = () => {
    setIsCardExpanded(!isCardExpanded);
  };

  return (
    <section
      className={
        "sectionCard__main-container sectionCard__" +
        (isCardExpanded ? "opened" : "closed")
      }
    >
      <header className="sectionCard__header">
        <button
          className="sectionCard__header-btn"
          onClick={() => expandCard()}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, alias.
        </button>
        <div className="sectionCard__header-chevron">
          {isCardExpanded ? <BsChevronUp /> : <BsChevronDown />}
        </div>
      </header>
      <section className="sectionCard__description-container">
        <img
          src="src\assets\girl.png"
          className="sectionCard__description-image"
        />
        <p className="sectionCard__description-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam sed
          modi aliquam asperiores neque magni reiciendis. Voluptas, explicabo,
          tempora in ab obcaecati dignissimos sapiente commodi ipsum nulla
          porro, a dolores. Reiciendis, nobis assumenda! Facere saepe officiis
          ipsam quo a quaerat nulla iure quia, ut nostrum, voluptatum deleniti
          cumque tempore deserunt.
        </p>
      </section>
      <div className="sectionCard__additional-info">
        Endereço: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Cupiditate, dolore.
      </div>
    </section>
  );
}

export default SectionCard;
