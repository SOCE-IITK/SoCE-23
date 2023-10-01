import React, { useState } from "react";
import Card from "./Card";
import CarouselModal from "./CarouselModal";
import cardData from "./cardData"; // Import the card data

function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal open/close
  const [selectedSlides, setSelectedSlides] = useState([]); // State to track selected card's slides

  // Function to open the modal and set the selected slides
  const openModal = (slides) => {
    setSelectedSlides(slides);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-800">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            imageSrc={card.imageSrc}
            description={card.description}
            onSeeMoreClick={() => openModal(card.slides)} // Pass the slides of the current card
          />
        ))}
      </div>
      {/* Carousel Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <CarouselModal autoSlide={true} onClose={closeModal}>
              {selectedSlides.map((slide, index) => (
                <img key={index} src={slide} alt={`Slide ${index}`} />
              ))}
            </CarouselModal>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
