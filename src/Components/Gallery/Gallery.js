import React, { useState } from "react";
import Card from "./Card";
import CarouselModal from "./CarouselModal";
import cardData from "./cardData";
import "../Styles/gallery.css";

export default function Gallery() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlides, setSelectedSlides] = useState([]);

  const openModal = (slides) => {
    setSelectedSlides(slides);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSlides([]);
  };

  return (
    <div id="gallery-page">

      {/* Hero */}

      <div className="container">

        <div className="gallery-hero">

          <div className="gallery-badge">
            <i className="fa fa-camera"></i>
            Gallery
          </div>

          <h1>Gallery</h1>

          <p>
            Explore memorable moments from guest lectures,
            workshops, competitions, freshers, farewell,
            alumni meet and various events organized by
            the Society of Civil Engineers, IIT Kanpur.
          </p>

        </div>

      </div>

      {/* Cards */}

      <div className="container">

        <div className="row g-4">

          {cardData.map((card, index) => (

            <div className="col-lg-4 col-md-6" key={index}>

              <Card
                title={card.title}
                imageSrc={card.imageSrc}
                description={card.description}
                onSeeMoreClick={() => openModal(card.slides)}
              />

            </div>

          ))}

        </div>

      </div>

      {/* Modal */}

      {isModalOpen && (

        <div className="gallery-modal-overlay">

          <div className="gallery-modal">

            <button
              className="gallery-close"
              onClick={closeModal}
            >
              ×
            </button>

            <CarouselModal autoSlide={true} onClose={closeModal}>
              {selectedSlides.map((slide, index) => (
                <img
                  key={index}
                  src={slide}
                  alt={`Slide ${index}`}
                />
              ))}
            </CarouselModal>

          </div>

        </div>

      )}

    </div>
  );
}